import React, { useEffect, useState } from "react";
import { homePageStyles } from "./styling";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { getCats } from "../../API/catsAPI";
import CatDetails from "../../Components/CatDetails/CatDetails";
import { CatProperties } from "../../typing/cat";
import { TextField } from "../../Components/TextField";

const Home = (): React.JSX.Element => {
  const classes = homePageStyles();
  const [cats, setCats] = useState<CatProperties[]>([]);
  const [searchField, setSearchField] = useState<string>("");
  useEffect(() => {
    getCats().then((response) => setCats(response));
  }, []);

  const getFilteredCats = (): CatProperties[] => {
    return cats.filter((cat) => {
      const catNameLowercase = (cat.firstName + ' ' + cat.lastName).toLowerCase();
      const searchFieldLowercase = searchField.toLowerCase();
      console.log(catNameLowercase, searchFieldLowercase);
      
      return (
        catNameLowercase.includes(searchFieldLowercase) ||
        cat.mice.find((mouse) =>
          mouse.name.toLowerCase().includes(searchFieldLowercase)
        )
      );
    });
  };
  return (
    <div className={classes.page}>
      <TextField
        className={classes.searchField}
        placeholder="Search"
        onChange={(e) => setSearchField(e.target.value)}
        value={searchField}
      />
      <Link to="/add-cat">
        <MdAddCircle className={classes.addButton} />
      </Link>
      <div className={classes.catListWrapper}>
        <div className={classes.catList}>
          {getFilteredCats().map((cat, index) => (
            <CatDetails {...cat} key={cat.firstName + index.toString()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

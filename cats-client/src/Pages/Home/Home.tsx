import React, { useEffect, useMemo, useState } from "react";
import { homePageStyles } from "./styling";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import CatDetails from "../../components/catDetails/CatDetails";
import { CatProperties } from "../../types/cat";
import { TextField } from "../../components/textField";
import { useCatsContext } from "../../context/catsContext";
import { addCatPath } from "../../router/config.json";

const Home = (): React.JSX.Element => {
  const classes = homePageStyles();
  const { cats, refreshCats } = useCatsContext();
  const [searchField, setSearchField] = useState<string>("");
  useEffect(() => {
    refreshCats();
  }, [refreshCats]);

  const filteredCats = useMemo((): CatProperties[] => {
    return cats.filter((cat) => {
      const catNameLowercase = (
        cat.firstName +
        " " +
        cat.lastName
      ).toLowerCase();
      const searchFieldLowercase = searchField.toLowerCase();

      return (
        catNameLowercase.includes(searchFieldLowercase) ||
        cat.mice.find((mouse) =>
          mouse.name.toLowerCase().includes(searchFieldLowercase)
        )
      );
    });
  }, [searchField, cats]);
  return (
    <div className={classes.page}>
      <TextField
        className={classes.searchField}
        placeholder="Search"
        onChange={(e) => setSearchField(e.target.value)}
        value={searchField}
      />
      <Link to={addCatPath}>
        <MdAddCircle className={classes.addButton} />
      </Link>
      <div className={classes.catListWrapper}>
        <div className={classes.catList}>
          {filteredCats.map((cat, index) => (
            <CatDetails {...cat} key={cat.firstName + index.toString()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

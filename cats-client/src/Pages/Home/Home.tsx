import React, { useCallback, useEffect, useMemo, useState } from "react";
import { homePageStyles } from "./styling";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import CatDetails from "../../components/catDetails/CatDetails";
import { TextField } from "../../components/textField";
import { useCatsContext } from "../../context/catsContext";
import { addCatPath } from "../../router/config.json";
import { Cat } from "../../models/cat";

const DEBOUNCE_DELAY = 300;

const Home: React.FC = () => {
  const classes = homePageStyles();
  const { cats, refreshCats } = useCatsContext();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");

  useEffect(() => {
    refreshCats();
  }, [refreshCats]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, DEBOUNCE_DELAY);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const updateSearchQuery = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchQuery(event.target.value);
    },
    []
  );
  const filteredCats = useMemo((): Cat[] => {
    if (!searchQuery.length) return cats;
    const searchFieldLowercase = searchQuery.toLowerCase();
    return cats.filter((cat) => {
      const catNameLowercase = cat.fullName.toLowerCase();
      return (
        catNameLowercase.includes(searchFieldLowercase) ||
        cat.mice.find((mouse) =>
          mouse.name.toLowerCase().includes(searchFieldLowercase)
        )
      );
    });
  }, [debouncedQuery, cats]);

  return (
    <div className={classes.page}>
      <TextField
        className={classes.searchField}
        placeholder="Search"
        onChange={updateSearchQuery}
        value={searchQuery}
      />
      <Link to={addCatPath}>
        <MdAddCircle className={classes.addButton} />
      </Link>
      <div className={classes.catListWrapper}>
        <div className={classes.catList}>
          {filteredCats.map((cat) => (
            <CatDetails cat={cat} key={cat.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

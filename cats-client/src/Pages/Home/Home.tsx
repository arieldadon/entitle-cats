import React from "react";
import { homePageStyles } from "./styling";
import { CarDetails } from "../../Components/CatDetails";

const Home = (): React.JSX.Element => {
  const classes = homePageStyles();
  return (
    <div className={classes.page}>
      <div className={classes.catList}>
        <CarDetails
          firstName="Ariel"
          lastName="Dadon"
          imageUrl="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          description="This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy"
          mice={[{ name: "Mouse1" }, { name: "Mouse2" }]}
        />
        <CarDetails
          firstName="Ariel"
          lastName="Dadon"
          imageUrl="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          description="This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy"
          mice={[{ name: "Mouse1" }, { name: "Mouse2" }]}
        />
        <CarDetails
          firstName="Ariel"
          lastName="Dadon"
          imageUrl="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          description="This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy"
          mice={[{ name: "Mouse1" }, { name: "Mouse2" }]}
        />
        <CarDetails
          firstName="Ariel"
          lastName="Dadon"
          imageUrl="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          description="This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy"
          mice={[{ name: "Mouse1" }, { name: "Mouse2" }]}
        />
        <CarDetails
          firstName="Ariel"
          lastName="Dadon"
          imageUrl="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          description="This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy This is a very nice cat, bla bla black and white, he have a lot of mice and he is very happy"
          mice={[{ name: "Mouse1" }, { name: "Mouse2" }]}
        />
        <CarDetails
          firstName="Ariel"
          lastName="Dadon"
          imageUrl="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          description=""
          mice={[{ name: "Mouse1" }, { name: "Mouse2" }, { name: "Mouse2" }, { name: "Mouse2" }, { name: "Mouse2" }, { name: "Mouse2" }]}
        />
        <CarDetails
          firstName="Ariel"
          lastName="Dadon"
          imageUrl="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          description="This is a very nice cat,"
          mice={[]}
        />
      </div>
    </div>
  );
};

export default Home;

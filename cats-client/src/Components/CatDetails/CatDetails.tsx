import React from "react";
import { catDetailsStyling } from "./styling";
import { CatProperties } from "../../typing/cat";

const CatDetails = ({
  firstName,
  lastName,
  imageUrl,
  description,
  mice,
}: CatProperties): React.JSX.Element => {
  const classes = catDetailsStyling();
  return (
    <div className={classes.wrapper}>
      <img
        className={classes.image}
        src={imageUrl}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-o4BqYKVAfgc_on60_5r-hx_NHAFMLF0jQ&s";
        }}
      />
      <div className={classes.details}>
        <span className={classes.title}>
          This is {firstName} {lastName}
        </span>
        <span className={classes.description}>{description}</span>
        <span className={classes.miceTitle}>My mice</span>
        <div className={classes.miceList}>
          {mice.map((mouse, index) => (
            <span className={classes.mouse} key={mouse + index.toString()}>
              - {mouse.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatDetails;

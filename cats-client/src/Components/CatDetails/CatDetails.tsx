import React from "react";
import { catDetailsStyling } from "./styling";

interface Mouse {
  name: string;
}
interface CatDetailsType {
  firstName: string;
  lastName: string;
  imageUrl: string;
  description: string;
  mice: Mouse[];
}
const CatDetails = ({
  firstName,
  lastName,
  imageUrl,
  description,
  mice,
}: CatDetailsType): React.JSX.Element => {
  const classes = catDetailsStyling();
  return (
    <div className={classes.wrapper}>
      <img className={classes.image} src={imageUrl} />
      <div className={classes.details}>
        <span className={classes.title}>
          This is {firstName} {lastName}
        </span>
        <span className={classes.description}>{description}</span>
        <span className={classes.miceTitle}>My mice</span>
        <div className={classes.miceList}>
          {mice.map((mouse) => (
            <span className={classes.mouse}>- {mouse.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatDetails;

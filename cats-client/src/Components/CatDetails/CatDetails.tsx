import React, { memo } from "react";
import { catDetailsStyling } from "./styling";
import config from "./config";
import { Cat } from "../../models/cat";

export interface CatDetailsProps {
  cat: Cat;
}

const handleImageError = ({
  currentTarget,
}: React.SyntheticEvent<HTMLImageElement>): void => {
  currentTarget.onerror = null;
  currentTarget.src = config.defaultImageUrl;
};
const CatDetails: React.FC<CatDetailsProps> = memo(({ cat }) => {
  const classes = catDetailsStyling();
  return (
    <div className={classes.wrapper}>
      <img
        className={classes.image}
        src={cat.imageUrl}
        onError={handleImageError}
      />
      <div className={classes.details}>
        <span className={classes.title}>This is {cat.fullName}</span>
        <span className={classes.description}>{cat.description}</span>
        <span className={classes.miceTitle}>My mice</span>
        <div className={classes.miceList}>
          {cat.mice.map((mouse, index) => (
            <span className={classes.mouse} key={mouse + index.toString()}>
              - {mouse.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default CatDetails;

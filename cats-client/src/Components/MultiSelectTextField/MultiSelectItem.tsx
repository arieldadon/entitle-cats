import React from "react";
import { multiSelectItemStyling } from "./styling";

interface MultiSelectItemProps {
  item: string;
  index: number;
  remove: (index: number) => void;
}

const MultiSelectItem: React.FC<MultiSelectItemProps> = ({
  item,
  index,
  remove,
}) => {
  const classes = multiSelectItemStyling();
  return (
    <span
      className={classes.item}
      onClick={() => {
        remove(index);
      }}
    >
      {item}
    </span>
  );
};

export default MultiSelectItem;

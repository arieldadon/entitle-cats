import React, { useCallback, useState } from "react";
import { TextField } from "../textField";
import { multiSelectTextFieldStyling } from "./styling";
import { MdAddCircle } from "react-icons/md";
import classNames from "classnames";
import MultiSelectItem from "./MultiSelectItem";

interface MultiSelectTextFieldProps {
  items: string[];
  className?: string;
  append: (value: string) => void;
  remove: (index: number) => void;
}
const MultiSelectTextField: React.FC<MultiSelectTextFieldProps> = ({
  items,
  className,
  append,
  remove,
}) => {
  const [value, setValue] = useState<string>("");
  const classes = multiSelectTextFieldStyling();

  const handleAppend = useCallback((): void => {
    if (value.length > 0) {
      append(value);
      setValue("");
    }
  }, [append, value]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>): void => {
      if (event.key === "Enter") {
        handleAppend();
        event.preventDefault();
      }
    },
    [handleAppend]
  );

  const handleValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );

  return (
    <div>
      <div className={classes.textField}>
        <TextField
          className={classNames(className, classes.textField)}
          onChange={handleValueChange}
          onKeyDown={handleKeyDown}
          value={value}
          hint="Add Mouse"
        />
        <div className={classes.addButtonWrapper}>
          <MdAddCircle className={classes.addButton} onClick={handleAppend} />
        </div>
      </div>
      <div className={classes.listWrapper}>
        {items.map((item, index) => (
          <MultiSelectItem
            key={index}
            item={item}
            index={index}
            remove={remove}
          />
        ))}
      </div>
    </div>
  );
};

export default MultiSelectTextField;

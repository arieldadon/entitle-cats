import React, { useCallback, useState } from "react";
import { TextField } from "../textField";
import { multiSelectTextFieldStyling } from "./styling";
import { MdAddCircle } from "react-icons/md";

type MultiSelectTypeField = string | { name: string; id: string };
interface MultiSelectTextFieldProps {
  items: MultiSelectTypeField[];
  className?: string;
  append: (value: string) => void;
  remove: (index: number) => void;
}
const MultiSelectTextField = ({
  items,
  className,
  append,
  remove,
}: MultiSelectTextFieldProps): React.JSX.Element => {
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
  const getKey = (item: MultiSelectTypeField, index: number): string => {
    return typeof item === "string" ? item + index.toString() : item.id;
  };
  const getValue = (item: MultiSelectTypeField): string => {
    return typeof item === "string" ? item : item.name;
  };
  return (
    <div>
      <div className={classes.textField}>
        <TextField
          className={className + " " + classes.textField}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
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
          <span
            key={getKey(item, index)}
            className={classes.value}
            onClick={() => {
              remove(index);
            }}
          >
            {getValue(item)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectTextField;

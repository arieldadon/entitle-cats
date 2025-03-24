import React, { memo } from "react";
import { textFieldStyling } from "./styling";
import classNames from "classnames";

interface TextFieldProps {
  type?: string;
  value?: string;
  name?: string;
  hint?: string;
  error?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
const TextField: React.FC<TextFieldProps> = memo(
  ({ className, hint, error, type = "text", ...inputProps }) => {
    const classes = textFieldStyling();
    return (
      <div className={classNames(className, classes.wrapper)}>
        <span className={classes.hint}>{hint}</span>
        <input type={type} {...inputProps} className={classes.textField} />
        {error && <span className={classes.error}>{error}</span>}
      </div>
    );
  }
);

export default TextField;

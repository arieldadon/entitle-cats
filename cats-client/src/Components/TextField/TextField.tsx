import React from "react";
import { textFieldStyling } from "./styling";

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
const TextField = (props: TextFieldProps): React.JSX.Element => {
  const classes = textFieldStyling();
  return (
    <div className={props.className + " " + classes.wrapper}>
      <span className={classes.hint}>{props.hint}</span>
      <input
        type={props.type || 'text'}
        {...props}
        className={classes.textField}
      />
      {props.error && <span className={classes.error}>{props.error}</span>}
    </div>
  );
};

export default TextField;

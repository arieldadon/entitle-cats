import React from "react";
import { textAreaStyling } from "./styling";

interface TextAreaProps {
  value?: string;
  name?: string;
  hint?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextField = (props: TextAreaProps): React.JSX.Element => {
  const classes = textAreaStyling();
  return (
    <div className={`${props.className} ${classes.wrapper}`}>
      <span className={classes.hint}>{props.hint}</span>
      <textarea
        {...props}
        className={classes.textField}
      />
    </div>
  );
};

export default TextField;

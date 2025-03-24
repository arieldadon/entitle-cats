import React, { memo } from "react";
import { textAreaStyling } from "./styling";
import classNames from "classnames";

interface TextAreaProps {
  value?: string;
  name?: string;
  hint?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextArea: React.FC<TextAreaProps> = memo((props) => {
  const classes = textAreaStyling();
  return (
    <div className={classNames(props.className, classes.wrapper)}>
      <span className={classes.hint}>{props.hint}</span>
      <textarea {...props} className={classes.textArea} />
    </div>
  );
});

export default TextArea;

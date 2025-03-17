import React, { useCallback } from "react";
import { addCatStyling } from "./styling";
import { TextField } from "../../components/textField";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { TextArea } from "../../components/textArea";
import { MultiSelectTextField } from "../../components/multiSelectTextField";
import { CatProperties } from "../../types/cat";
import { addCat } from "../../api/catsAPI";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { homePath } from "../../router/config.json";

const AddCat = (): React.JSX.Element => {
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CatProperties>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "mice",
  });
  const classes = addCatStyling();

  const onSubmit: SubmitHandler<CatProperties> = async (data) => {
    await addCat(data);
    navigate(homePath);
  };

  const addMouse = useCallback(
    (name: string): void => {
      append({ name });
    },
    [append]
  );

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.titleWrapper}>
          <Link to={homePath}>
            <MdArrowBackIos className={classes.backButton} />
          </Link>
          <span className={classes.title}>Add a new cat</span>
        </div>
        <div className={classes.nameWrapper}>
          <TextField
            className={classes.nameField}
            hint="First Name"
            error={errors.firstName?.message}
            {...register("firstName", {
              required: "First Name is Required",
              maxLength: { value: 50, message: "Max Length of 50 characters" },
            })}
          />
          <TextField
            className={classes.nameField}
            hint="Last Name"
            error={errors.lastName?.message}
            {...register("lastName", {
              required: "First Name is Required",
              maxLength: { value: 50, message: "Max Length of 50 characters" },
            })}
          />
        </div>
        <TextArea
          hint="Description"
          {...register("description", {
            maxLength: {
              value: 3000,
              message: "Max Length of 3000 characters",
            },
          })}
        />
        <TextField
          hint="Image Url"
          error={errors.imageUrl?.message}
          {...register("imageUrl", {
            required: "Please enter an url",
            pattern: {
              value:
                /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/,
              message: "Please enter a valid URL",
            },
          })}
        />
        <MultiSelectTextField
          items={fields.map((mouse) => mouse.name)}
          append={addMouse}
          remove={remove}
        />
        <button type="submit" className={classes.submitButton}>
          <span>Add a new cat!</span>
        </button>
      </form>
    </div>
  );
};

export default AddCat;

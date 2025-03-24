import React, { useCallback, useMemo } from "react";
import { addCatStyling } from "./styling";
import { TextField } from "../../components/textField";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { TextArea } from "../../components/textArea";
import { MultiSelectTextField } from "../../components/multiSelectTextField";
import { addCat } from "../../api/catsAPI";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { homePath } from "../../router/config.json";
import { Cat } from "../../models/cat";

const FIRST_NAME_MAX_LENGTH = 50;
const LAST_NAME_MAX_LENGTH = 50;
const DESCRIPTION_MAX_LENGTH = 3000;
const IMAGE_URL_PATTERN =
  /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/;

const AddCat: React.FC = () => {
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Cat>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "mice",
  });
  const classes = addCatStyling();

  const onSubmit: SubmitHandler<Cat> = async (data) => {
    await addCat(data);
    navigate(homePath);
  };

  const addMouse = useCallback(
    (name: string): void => {
      append({ name });
    },
    [append]
  );

  const mouseNames = useMemo(() => fields.map((mouse) => mouse.name), [fields]);

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
              maxLength: {
                value: FIRST_NAME_MAX_LENGTH,
                message: `Max Length of ${FIRST_NAME_MAX_LENGTH} characters`,
              },
            })}
          />
          <TextField
            className={classes.nameField}
            hint="Last Name"
            error={errors.lastName?.message}
            {...register("lastName", {
              required: "First Name is Required",
              maxLength: {
                value: LAST_NAME_MAX_LENGTH,
                message: `Max Length of ${LAST_NAME_MAX_LENGTH} characters`,
              },
            })}
          />
        </div>
        <TextArea
          hint="Description"
          {...register("description", {
            maxLength: {
              value: DESCRIPTION_MAX_LENGTH,
              message: `Max Length of ${DESCRIPTION_MAX_LENGTH} characters`,
            },
          })}
        />
        <TextField
          hint="Image Url"
          error={errors.imageUrl?.message}
          {...register("imageUrl", {
            required: "Please enter an url",
            pattern: {
              value: IMAGE_URL_PATTERN,
              message: "Please enter a valid URL",
            },
          })}
        />
        <MultiSelectTextField
          items={mouseNames}
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

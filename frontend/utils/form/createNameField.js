import * as yup from "yup";
import { useField } from "vee-validate";

export default function createNameField() {
  // Validate input name

  const {
    value: inputNameModel,
    errorMessage: inputNameError,
    handleBlur: nameBlur,
  } = useField(
    "name",
    yup
      .string()
      .trim()
      .required("Це поле обов'язкове.")
      .min(3, "Перевірте правильність введених данних.")
  );

  //...
  return {
    inputNameModel,
    inputNameError,
    nameBlur,
  };
}

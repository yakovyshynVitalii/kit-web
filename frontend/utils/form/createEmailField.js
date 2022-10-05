import * as yup from "yup";
import { useField } from "vee-validate";

export default function createEmailField() {
  // Validate input email

  const {
    value: inputEmailModel,
    errorMessage: inputEmailError,
    handleBlur: emailBlur,
  } = useField(
    "email",
    yup
      .string()
      .trim()
      .required("Це поле обов'язкове.")
      .email("Перевірте правильність введених данних.")
  );

  //...
  return {
    inputEmailModel,
    inputEmailError,
    emailBlur,
  };
}

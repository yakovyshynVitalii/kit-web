import * as yup from "yup";
import { useField } from "vee-validate";

export default function createPhoneField() {
  // Validate input phone

  const {
    value: inputPhoneModel,
    errorMessage: inputPhoneError,
    handleBlur: phoneBlur,
  } = useField(
    "phone",
    yup
      .string()
      .trim()
      .matches(
        /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){8,14}(\s*)?$/,
        "Перевірте правильність введених данних."
      )
  );

  //...
  return {
    inputPhoneModel,
    inputPhoneError,
    phoneBlur,
  };
}

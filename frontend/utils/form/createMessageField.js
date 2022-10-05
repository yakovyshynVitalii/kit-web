import * as yup from "yup";
import { useField } from "vee-validate";

export default function createMessageField() {
  // Validate input message

  const {
    value: inputMessageModel,
    errorMessage: inputMessageError,
    handleBlur: messageBlur,
  } = useField("message", yup.string());

  //...
  return {
    inputMessageModel,
    inputMessageError,
    messageBlur,
  };
}

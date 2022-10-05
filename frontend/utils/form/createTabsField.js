import * as yup from "yup";
import { useField } from "vee-validate";

export default function createTabsField() {
  // Validate input tabs input

  const {
    value: inputTabModel,
    errorMessage: inputTabError,
    handleBlur: tabBlur,
    handleChange: tabChange,
  } = useField("type of work", yup.array());

  //...
  return {
    inputTabModel,
    inputTabError,
    tabBlur,
    tabChange,
  };
}

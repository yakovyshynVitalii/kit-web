import * as yup from "yup";
import { useField } from "vee-validate";

export default function createFileField(params) {
  // Get files types validation params

  const allowFileTypes = params?.allowFileTypes?.value;
  const allowFileTypesAttr = allowFileTypes
    ? params.allowFileTypes.value.join(", .")
    : null;
  const allowFileTypesErrorText = params?.allowFileTypes?.errorText;

  // Get file weight validation params

  const allowFileWeight = params?.allowFileWeight?.value;
  const allowFileWeightErrorText = params?.allowFileWeight?.errorText;

  // Get files count validation params

  const allowFilesCount = params?.allowFilesCount?.value;
  const allowFilesCountErrorText = params?.allowFilesCount?.errorText;

  // Validate logic

  const {
    value: filesValue,
    errorMessage: filesError,
    handleChange: attachChange,
  } = useField(
    "file",
    yup
      .mixed()

      // Check files count

      .test("filesCount", allowFilesCountErrorText, (value) => {
        if (allowFilesCount) {
          return value ? value.length <= allowFilesCount : true;
        } else {
          return true;
        }
      })

      //	Check allowed file types

      .test("fileType", allowFileTypesErrorText, (value) => {
        if (!value.length) return true;
        if (!allowFileTypes) return true;
        let isValid = true;

        for (let file = 0; file < value; file++) {
          const fileType = value[file].name.split(".").pop().toLowerCase();
          if (!allowFileTypes.includes(fileType)) {
            isValid = false;
          }
        }

        return isValid;
      })

      // Check files weight

      .test("fileWeight", allowFileWeightErrorText, (value) => {
        if (!value.length) return true;
        if (!allowFileWeight) return true;

        let isValid = true;

        for (let file = 0; file < value; file++) {
          if (value[file].size > allowFileWeight) {
            isValid = false;
          }
        }

        return isValid;
      }),

    { initialValue: [] }
  );

  // ...

  return {
    filesValue,
    filesError,
    allowFileTypesAttr,
    attachChange,
  };
}

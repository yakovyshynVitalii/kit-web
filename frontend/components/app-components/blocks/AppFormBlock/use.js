// Global imports

import { useForm } from "vee-validate";

// Imports Field

import createNameField from "~/utils/form/createNameField";
import createEmailField from "~/utils/form/createEmailField";
import createPhoneField from "~/utils/form/createPhoneField";
import createMessageField from "~/utils/form/createMessageField";
import createFileField from "~/utils/form/createFileField";
import createTabsField from "~/utils/form/createTabsField";

export default function use(props) {
  // validation

  const { handleSubmit, isSubmitting, resetForm } = useForm();

  // Name

  const { inputNameModel, inputNameError, nameBlur } = createNameField();

  // Email

  const { inputEmailModel, inputEmailError, emailBlur } = createEmailField();

  // Phone

  const { inputPhoneModel, inputPhoneError, phoneBlur } = createPhoneField();

  // Description

  const { inputMessageModel, inputMessageError, messageBlur } =
    createMessageField();

  // Tabs
  const { inputTabModel, inputTabError, tabBlur, tabChange } =
    createTabsField();

  // File
  const uploadFilesParams = {
    allowFileTypes: {
      value: ["jpg", "png", "gif", "ai", "eps", "mp4", "pdf"],
      errorText: "Тип файлу не правильний",
    },
    allowFileWeight: {
      value: 1048576 * 50, // 50 MB,
      errorText: "Розмір файлу завеликий",
    },
    allowFilesCount: {
      value: 2,
      errorText: "Кількісь файлів завелика",
    },
  };

  const { filesValue, filesError, allowFileTypesAttr, attachChange } =
    createFileField(uploadFilesParams);

  // onSubmit

  const isFormSent = ref(false);

  const onSubmit = handleSubmit((values) => {
    if (isSubmitting) {
      const message = {
        page: props.page,
        values,
      };
      console.log(message);
      isFormSent.value = true;
      resetForm();

      setTimeout(() => (isFormSent.value = false), 30000);
    }
  });

  //...

  return {
    // Is form sent
    isFormSent,

    // Name
    inputNameModel,
    inputNameError,
    nameBlur,

    // Email
    inputEmailModel,
    inputEmailError,
    emailBlur,

    // Phone
    inputPhoneModel,
    inputPhoneError,
    phoneBlur,

    // Description
    inputMessageModel,
    inputMessageError,
    messageBlur,

    //File

    filesError,
    allowFileTypesAttr,
    attachChange,
    filesValue,

    // Tabs
    inputTabModel,
    inputTabError,
    tabBlur,
    tabChange,

    // onSubmit
    onSubmit,
  };
}

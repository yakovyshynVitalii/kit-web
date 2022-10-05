import { ref } from "vue";

export function use(emit) {
  const originalInput = ref(null);

  // Choose file

  function chooseFile() {
    originalInput.value.click();
  }

  // On change

  const fileName = ref("");

  function onChange(e) {
    fileName.value = originalInput.value.files[0].name;
    emit("update:modelValue", e.target.value);
  }

  // On clear

  function onClear() {
    originalInput.value.value = [];
    emit("clear", originalInput.value.value);
    fileName.value = null;
  }

  return {
    originalInput,
    chooseFile,

    onClear,
    fileName,
    onChange,
  };
}

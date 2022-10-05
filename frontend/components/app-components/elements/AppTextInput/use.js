export function use(props, emit) {
  // On input

  function onInput(e) {
    // v-model
    emit("update:modelValue", e.target.value);

    // Textarea auto height
    if (isTextarea.value) textareaAutoHeight(e);
  }

  // Focus event

  function onFocus() {
    emit("focus");
  }

  // Disable autofill styles on blur

  function onBlur() {
    const inputs = document.querySelectorAll(".input-type-text input");

    inputs.forEach((el) => {
      const value = el.value;

      el.value = "";
      el.value = value;
    });
  }

  // Is textarea

  const isTextarea = ref(props.type == "textarea");

  // Textarea auto height

  function textareaAutoHeight(e) {
    if (window.innerWidth > 1000) {
      e.target.style.height = `min(${e.target.scrollHeight}px, ${
        (e.target.scrollHeight * 100) / 1600
      }vw)`;
    } else {
      e.target.style.height = "1px";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    if (!e.target.value) {
      e.target.style.height = `60px`;
    }
  }

  //

  return {
    // On input
    onInput,

    // Focus event
    onFocus,

    // Disable autofill styles on blur
    onBlur,

    // Is textarea
    isTextarea,
  };
}

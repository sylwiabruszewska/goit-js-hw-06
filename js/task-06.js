const textInput = document.querySelector("#validation-input");

const onBlur = () => {
  const isValid = textInput.value.length === parseInt(textInput.dataset.length);
  textInput.classList.toggle("valid", isValid);
  textInput.classList.toggle("invalid", !isValid);
};
textInput.addEventListener("blur", onBlur);

// OPCJA 2: classList add & remove
// const onBlur = () => {
//   if (textInput.value.length === parseInt(textInput.dataset.length)) {
//     textInput.classList.remove("invalid");
//     textInput.classList.add("valid");
//   } else {
//     textInput.classList.remove("valid");
//     textInput.classList.add("invalid");
//   }
// };
// textInput.addEventListener("blur", onBlur);

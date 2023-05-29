const fontSizeControlElement = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const setInitialFontSize = () => {
  text.style.fontSize = fontSizeControlElement.value + "px";
};

setInitialFontSize();

const changeFontSize = () => {
  const newFontSize = fontSizeControlElement.value;
  text.style.fontSize = newFontSize + "px";
};

fontSizeControlElement.addEventListener("input", changeFontSize);

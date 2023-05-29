function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorNameSpan = document.querySelector(".color");
const bodyElement = document.body;

const changeBgColor = () => {
  const randomColor = getRandomHexColor();
  bodyElement.style.backgroundColor = randomColor;
  colorNameSpan.textContent = randomColor;
};

changeColorBtn.addEventListener("click", changeBgColor);

let counterValue = 0;

const spanValue = document.querySelector("#value");
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');

const incrementValue = () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
};

const decrementValue = () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
};

btnIncrement.addEventListener("click", incrementValue);
btnDecrement.addEventListener("click", decrementValue);

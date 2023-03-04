
let counterValue = 0;

const spanValue = document.querySelector("#value");

spanValue.innerHTML = counterValue

const btnIncrement = document.querySelector("button[data-action='increment']")

const addOne = btnIncrement.addEventListener(
  "click",
  () => {
    counterValue += 1, spanValue.innerHTML = counterValue;
  }
);

const btnDecrement = document.querySelector("button[data-action='decrement']");

const minusOne = btnDecrement.addEventListener(
  "click",
  () => {counterValue -= 1, spanValue.innerHTML = counterValue
}
);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundColor = document.querySelector(".color")

const body = document.querySelector('body')

const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const randomColor = getRandomHexColor()

  body.style.backgroundColor = randomColor;

  backgroundColor.textContent = randomColor;
}

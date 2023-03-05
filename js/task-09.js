function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const btnChange = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btnChange.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  spanColor.textContent = randomColor;
  body.style.backgroundColor = randomColor;
});

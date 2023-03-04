let counterValue = 0;
const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");
const value = document.querySelector("#value");
console.log(decrementBtn);
console.log(incrementBtn);
console.log(value);
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});

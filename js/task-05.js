const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");
nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    nameOutput.textContent = "Anonymus";
  } else nameOutput.textContent = event.currentTarget.value;
});

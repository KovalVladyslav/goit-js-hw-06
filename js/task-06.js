const input = document.querySelector("#validation-input");
const dataLength = Number(input.getAttribute("data-length"));

const inputValidation = (event) => {
  if (event.target.value.length === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else if (event.target.value.length !== dataLength) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else if (event.target.value.length === 0) {
    input.classList.remove("invalid");
    input.classList.remove("valid");
  }
};
input.addEventListener(`blur`, inputValidation);

const input = document.querySelector("input#font-size-control");
const textSize = document.querySelector("span#text");
textSize.style.fontSize = input.value + "px";
input.addEventListener("input", (x) => {
  textSize.setAttribute("style", `font-size: ${x.currentTarget.value}px`);
});

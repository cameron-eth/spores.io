// buttons.js
let currentSizeIndex = 0;
const sizes = ["6", "12", "24"];

function changeProduct(direction) {
  currentSizeIndex += direction;
  if (currentSizeIndex < 0) {
    currentSizeIndex = sizes.length - 1;
  } else if (currentSizeIndex >= sizes.length) {
    currentSizeIndex = 0;
  }
  document.getElementById("currentSize").innerText = sizes[currentSizeIndex] + "oz";
}

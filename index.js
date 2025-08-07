const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const countP = document.getElementById("count");
let count = 0;

increase.onclick = function () {
  count++;
  countP.textContent = count;
};

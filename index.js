const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const countP = document.getElementById("count");
let count = 0;

increase.onclick = function () {
  count++;
  countP.textContent = count;
};

decrease.onclick = function () {
  count--;
  countP.textContent = count;
};

reset.onclick = function () {
  count = 0;
  countP.textContent = count;
};

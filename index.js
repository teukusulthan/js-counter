const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const countP = document.getElementById("count");
let count = 0;
const clickSound = new Audio("sound/btn.mp3");
const resetSound = new Audio("sound/reset.mp3");

function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

increase.onclick = function () {
  clickSound.play();
  count++;
  countP.textContent = count;
};

decrease.onclick = function () {
  clickSound.play();
  count--;
  countP.textContent = count;
};

reset.onclick = function () {
  resetSound.play();
  count = 0;
  countP.textContent = count;
};

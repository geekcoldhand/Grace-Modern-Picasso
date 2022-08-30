const graceNumber = document.getElementById("grace-cellphone-number");
const hiddenNumber = document.getElementById("hidden-number-behind");
graceNumber.textContent = "(404)-200-5230";
graceNumber.style.display = "none";

function showNumber() {
  graceNumber.style.display = "block";
}

hiddenNumber.addEventListener("click", showNumber);

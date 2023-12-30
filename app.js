const dollars = document.querySelector(".dollars");
const slider = document.querySelector(".slider");

slider.value = 5000; // 50 dollars
dollars.textContent = integerToCurrency(slider.value);

slider.addEventListener("input", () => {
  dollars.textContent = integerToCurrency(slider.value);
});

function integerToCurrency(value) {
  let dollars = Math.floor(value / 100);
  let cents = value % 100;
  return `${leadingZero(dollars)}.${leadingZero(cents)}`;
}

function leadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

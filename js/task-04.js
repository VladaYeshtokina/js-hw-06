const value = document.querySelector("#value");
const btnDecrement = document.querySelector("button[data-action='decrement']");
const btnIncrement = document.querySelector("button[data-action='increment']");


let counterValue = 0;


btnDecrement.addEventListener("click", onBtnDecrementClick);
btnIncrement.addEventListener("click", OnBtnIncrementClick);

function onBtnDecrementClick(event) {
  counterValue -= 1;
  value.textContent = counterValue; 
}

function OnBtnIncrementClick(event) {
  counterValue += 1;
  value.textContent = counterValue; 
}






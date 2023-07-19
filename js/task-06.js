const validatorRef = document.querySelector("#validation-input");





validatorRef.addEventListener(`focus`, onFocusInput);
validatorRef.addEventListener(`blur`, onBlurInput);

function onFocusInput(event) {
 const value = event.currentTarget;
  value.classList.remove(`valid`);
  value.classList.remove(`invalid`);
}

function onBlurInput(event) {
  const value = validatorRef.value.length;
  const length = Number(validatorRef.dataset.length); 
  const elemValue = event.currentTarget;
  value === length
    ? elemValue.classList.add(`valid`)
    : elemValue.classList.add(`invalid`);
}



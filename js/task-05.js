const dataInput = document.querySelector("#name-input");
const dataOutput = document.querySelector("#name-output");

dataInput.addEventListener('input', event =>
  dataOutput.textContent = dataInput.value);





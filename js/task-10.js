function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elNumRef = document.querySelector('input');
const createRef = document.querySelector("button[data-create]");
const destroyRef = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");


createRef.addEventListener('click', onCreateClick);

function onCreateClick(event) {  
  event.preventDefault();  
  createBoxes(elNumRef.value);
}

function createBoxes(amount) { 
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    boxesRef.insertAdjacentHTML("afterbegin", "<div class = 'boxesChild'></div>");
    const boxesChildRef = document.querySelector(".boxesChild");

    boxesChildRef.style.width = size + "px";
    boxesChildRef.style.height = size + "px";    
    boxesChildRef.style.backgroundColor = getRandomHexColor();
    size += 10;    
  }
  

  destroyRef.addEventListener("click", onDestroyClick);

  function onDestroyClick(event) {
    event.preventDefault();
    destroyBoxes();
  }
  
  function destroyBoxes() {
    boxesRef.innerHTML = '';
    elNumRef.value = '';
  }
  



}
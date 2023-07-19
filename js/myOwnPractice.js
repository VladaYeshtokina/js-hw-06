
// const arr = [2, 5, 3, -1, 99, 13, -67, 95, -114];
// const toIncrease = arr.map(el => el + (el * 0.1));
// console.log(toIncrease);

// const sum = arr.reduce((acc, el) => (acc += el * el), 0);
// const positiveSum = arr.reduce((acc, el) => {
//   if (el > 0) {
//     acc += el;
//   }
//   return acc;
// }, 0)
// console.log(positiveSum);


// const str = 'asdfgh';
// const strArr = str.split('');
// const number = 12345;
// const arrNumber = number.toString().split('');
// const sumNumber = arrNumber.reduce((acc, el) => acc += Number(el), 0);
// const reverseNumber = arrNumber.slice().reverse().join('');
// console.log(sumNumber);


// const arr = [];
// for (let i = 1; i <= 10; i += 1) {
//   if (!(i % 2)) {
//      arr.push(i);
//   }
// }
// console.log(arr);

// const arr = [1.456, 2.125, 3.32, 4.1, 5.34];
// const newArr = arr.map(el => el.toFixed(1));
// console.log(newArr);

// const arr = ['asdfrow', 'asdfhgjrow', 'asdjngdsi', 'fmovurf', 'ckfndurow'];
// const newArrStart = arr.reduce((acc, el) => {
//   if (el.slice(0, 3) === 'asd') {
//     acc.push(el);
//   }
//   return acc
// }, []);
// console.log(newArrStart);

// const newArrEnd = arr.reduce((acc, el) => {
//   if (el.slice(-3) === "row") {
//     acc.push(el);
//   }
//   return acc;
// }, []);
// console.log(newArrEnd);


// const randomArr = [];
// for (let i = 0; i < 10; i += 1) {
//   const numbers = (Math.random() * (100 - 1) + 1).toFixed();
//   randomArr.push(Number(numbers));
// }
// console.log(randomArr);

// const num = 12345;
// const numArr = num.toString().split('').reverse();
// for (const el of numArr) {
//   console.log(Number(el));
// }

// const arr = [1, 2, 3, 4, 5, 6];
// arr.reduce((acc, el) => {
//   acc.push(el);
  
//   if (acc.length === 2) {
//     console.log(acc);
//     acc.splice(0, 2);
//   }

//   return acc;
// }, [])


// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const newArr = arr.concat(arr2);
// console.log(newArr);
// const newArray = [...arr, ...arr2];
// console.log(newArray);

// const someStr = 'jdoeenf0nejfuen0';
// console.log(someStr.indexOf('0'));

// const arr = [];
// for (let i = 1; i <= 1000; i += 1) {
//   arr.push(i);
// }

// arr.reduce((acc, el) => {
//   const str = el.toString();
//   acc = Number(str.slice(0, 1)) + Number(str.slice(-1));
//   if (acc === 5) {
//     console.log(`The first + last of number ${el} = ${acc}`);
//   }
// }, 0);

// function toDelete(arr, num) {
//   return arr.filter(el => el !== num);
// }
// console.log(toDelete([1, 4, 3, 4, 9, 7], 4));

// const arr = [1, 2, 3, 4, 5, 6];
// const firstPart = arr.slice(0, arr.length / 2);
// const result = firstPart.reduce((acc, el) => acc += el);
// console.log(result);

// const arr = [1, -2, 3, -4, 5, -6, -7];
// const negNum = arr.reduce((acc, el) => {
//   if (el < 0) {
//     acc += 1;
//   }
//   return acc;
// }, 0)
// console.log(negNum);

// const first = 'fhhf23';
// const second = '1hfytj';

// const result = first.slice(first.length -1) === second.slice(0, 1) ? true : false;
// console.log(result);

// const str = "12,34,56";
// const result = str.split(",").reduce((acc, el) => acc += Number(el), 0);
// console.log(result);

// function data(str) {
//   return str.split('-').reduce((acc, el, idx) => {
//     switch (idx) {
//       case 0:
//         acc.year = el;
//         break;
//       case 1:
//         acc.month = el;
//         break;
//       case 2:
//         acc.day = el;
//         break;
//     }
//     return acc;
//   }, {})
// }

// console.log(data("2025-12-31"));
// console.log(data("2029-2-22"));


// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }


// const boxRef = document.querySelector(".js-container");
// boxRef.addEventListener("click", onBoxRefClick);

// function onBoxRefClick(e) {
//   if (!e.target.classList.contains('js-box')) {
//     return;
//   }
//   console.log(e.target.dataset.color);
// }

// const container = document.querySelector(".js-content");

// let player = "X";
// let historyX = [];
// let historyO = [];
// const wins = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];

// function createMarkup() {
// let markup = "";
//   for (let i = 1; i < 10; i += 1) {
//     markup += `<div class = "item js-item" data-id = ${i}></div>`;
//   }
// container.innerHTML = markup;
// }

// createMarkup();
// container.addEventListener('click', onClick);

// function onClick(e) {
//   const { target } = e;
//   if (!target.classList.contains("js-item") || target.textContent) {
//     return;
//   }

//   const id = Number(target.dataset.id);
//   let result = false;
//   const isGameOver = historyX.length + historyO.length === 9;
 
//   if (target.textContent === 'X') {
//     historyX.push(id);
//     result = isWinner(historyX);
//   } else {
//     historyO.push(id);
//     result = isWinner(historyO);
//   }
//   target.textContent = player;

//   if (result) {
//     console.log(`Winner is ${player}`);
//     resetGame();
//     return;
//   } else if (isGameOver) {
//     console.log(`Try again!`);
//     resetGame();
//     return;
//   }
    
//     player = player === "X" ? "O" : "X";
// }

// function isWinner(arr) {
//   return wins.some(item => item.every(id => arr.includes(id)));
// }

// function resetGame() {
//   createMarkup();
//   historyX = [];
//   historyO = [];
//   player = "X";
// }














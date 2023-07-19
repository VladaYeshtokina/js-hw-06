const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredient = ingredients.map(ingredient => {
//   const elem = document.createElement('li');
//   elem.textContent = ingredient;
//   elem.classList.add('item');
//   return elem;
// });

// const ingredientsListRef = document.querySelector("#ingredients");
// ingredientsListRef.append(...ingredient);

// console.log(ingredientsListRef);


// OR

const ingredientsListRef = document.querySelector("#ingredients");

const ingredient = ingredients.map((ingredient) =>
  `<li class = "item">${ingredient}</li>`).join('');
ingredientsListRef.insertAdjacentHTML('beforeend', ingredient);

console.log(ingredientsListRef);
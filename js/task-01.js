
const categoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach(elem => {   
    console.log(elem.firstElementChild.textContent);   
    console.log(elem.lastElementChild.children.length);
}
);











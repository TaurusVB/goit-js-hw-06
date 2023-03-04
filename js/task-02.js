const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let arrIngredients = []

for (let ingredient of ingredients) {
  let itemIngredients = document.createElement("li");
  itemIngredients.textContent = ingredient
  itemIngredients.classList.add("item");
  arrIngredients.push(itemIngredients);
}

const ingredientsUl = document.querySelector("#ingredients");

ingredientsUl.append(...arrIngredients)

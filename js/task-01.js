// ----------------------1----------------------------------

const listCategories = document.querySelectorAll(".item");

// let total = 0

// listCategories.forEach(() => (total += 1));

// console.log(`Number of categories: ${total}`);

console.log(`Number of categories: ${listCategories.length}`);

// ----------------------1----------------------------------


// ----------------------2----------------------------------

listCategories.forEach((item) =>
  console.log(
    `Category: ${item.firstElementChild.innerText}\nElements: ${
      item.lastElementChild.getElementsByTagName("li").length
    }`
  )
);

// ----------------------2----------------------------------

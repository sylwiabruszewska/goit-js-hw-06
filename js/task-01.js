const categoriesList = document.querySelector("ul#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");
const categoriesCount = categoriesItems.length;
console.log(`Number of categories: ${categoriesCount}`);

categoriesItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElementsCount = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElementsCount}`);
});

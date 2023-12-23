const categoriesList = document.querySelector('#categories');

console.log('Number of categories: ' + categoriesList.childElementCount);

const categoriesListItems = categoriesList.querySelectorAll('.item');

categoriesListItems.forEach(item => {
  const h2 = item.firstElementChild;
  const ul = h2.nextElementSibling;

  console.log('Category: ' + h2.textContent);
  console.log('ELements: ' + ul.childElementCount);
});

const categories = document.querySelector('#categories');
const allItems = categories.querySelectorAll('.item');

console.log(`Number of categories: ${allItems.length}`);

allItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryItemsCount = item.querySelectorAll('ul > li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemsCount}`);
});

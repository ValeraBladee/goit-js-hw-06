const categories = document.querySelector("#categories");
console.log("Number of categories:", categories.children.length);

[...categories.children].forEach(category => {
    console.log("Category:", category.firstElementChild.textContent);
    console.log("Elements:", category.lastElementChild.children.length);
})
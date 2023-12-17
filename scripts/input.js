import filterArticles from './articles.js'
let userInput = "";
let timeoutId;

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", handleInputChange);

function handleInputChange(event) {
  userInput = event.target.value;
  clearTimeout(timeoutId);
  timeoutId = setTimeout(filterArticles, 300);
}
import { articlesData } from "./constants.js";

function createArticles(articles) {
  const list = document.getElementById("list");
  articles.forEach((item) => {
    const html = `
      <article class="article">
        <a class="article-item" href="https://spring.io/projects/${item.img}">
          <img
            class="article-item__img"
            src="https://spring.io/img/projects/${item.img}.svg"
            alt="${item.title}"
          />
          <div class="article-item__info">
            <h1 class="article-item__h1">${item.title}</h1>
            <p class="article-item__p">${item.description}</p>
          </div>
        </a>
      </article>
    `;

    list.insertAdjacentHTML("beforeend", html);
  });
}

export default function filterArticles() {
  const filteredArticles = articlesData.filter((item) => {
    return (
      item.description.toLowerCase().includes(userInput.toLowerCase()) ||
      item.title.toLowerCase().includes(userInput.toLowerCase())
    );
  });
  updateArticles(filteredArticles.length > 0 ? filteredArticles : null);
}

function updateArticles(articles) {
  const list = document.getElementById("list");
  list.innerHTML = "";

  if (articles) {
    createArticles(articles);
  } else {
    list.textContent = "No results";
  }
}

createArticles(articlesData);
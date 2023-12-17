import { articlesData } from "./constants.js";

function createArticleElement(item) {
  const article = document.createElement("article");
  article.className = "article";

  const link = document.createElement("a");
  link.className = "article-item";
  link.href = `https://spring.io/projects/${item.img}`;

  const img = document.createElement("img");
  img.className = "article-item__img";
  img.src = `https://spring.io/img/projects/${item.img}.svg`;
  img.alt = item.title;
  link.appendChild(img);

  const infoDiv = document.createElement("div");
  infoDiv.className = "article-item__info";

  const h1 = document.createElement("h1");
  h1.className = "article-item__h1";
  h1.textContent = item.title;

  const p = document.createElement("p");
  p.className = "article-item__p";
  p.textContent = item.description;

  infoDiv.appendChild(h1);
  infoDiv.appendChild(p);

  link.appendChild(infoDiv);
  article.appendChild(link);

  return article;
}

function createArticles(articles) {
  const list = document.getElementById("list");
  articles.forEach((item) => {
    const articleElement = createArticleElement(item);
    list.appendChild(articleElement);
  });
}

export default function filterArticles(userInput) {
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

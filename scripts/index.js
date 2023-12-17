import { articlesData, menuItems} from "./constants";

// function generateDropDownItems(items, liClass, aClass) {
//   return items.map(
//       (item) =>
//           `<li class=${liClass}><a class=${aClass} href="${item.href}">${item.text}</a></li>`
//   ).join("");
// }
//
// function createDropdownMenu(menuData) {
//   return `
//     <div class="dropdown">
//       <button class="drop-btn">${menuData.title}</button>
//       <i class="arrow down"></i>
//       <ul class="dropdown-content">
//         ${generateDropDownItems(menuData.items, "", "dropdown-item" )}
//       </ul>
//     </div>
//   `;
// }
//
// function createDropdownMenuForMobile(menuData) {
//    return `
//             <article class="menu-item">
//               <div class="menu-item__container">
//                 <h1 class="menu-item__h1">${menuData.title}</h1>
//                 <button class="menu-item__arrow down"></button>
//               </div>
//               <ul class="answer">
//                 ${generateDropDownItems(menuData.items, "my-3", "answer-item" )}
//               </ul>
//             </article>
//   `;
// }
//
// function createMobileMenu() {
//   const _menu = document.getElementById("menu-content");
//   menuItems.forEach((menu) => {
//     const dropdownHTML = createDropdownMenuForMobile(menu);
//     _menu.insertAdjacentHTML("beforeend", dropdownHTML);
//   });
// }
//
// createMobileMenu();
//
// const dropdownContainer = document.getElementById("navbar-menu");
// menuItems.forEach((menu) => {
//   const dropdownHTML = createDropdownMenu(menu);
//   dropdownContainer.insertAdjacentHTML("beforeend", dropdownHTML);
// });

// function createArticles(articles) {
//   const list = document.getElementById("list");
//   articles.forEach((item) => {
//     const html = `
//       <article class="article">
//         <a class="article-item" href="https://spring.io/projects/${item.img}">
//           <img
//             class="article-item__img"
//             src="https://spring.io/img/projects/${item.img}.svg"
//             alt="${item.title}"
//           />
//           <div class="article-item__info">
//             <h1 class="article-item__h1">${item.title}</h1>
//             <p class="article-item__p">${item.description}</p>
//           </div>
//         </a>
//       </article>
//     `;
//
//     list.insertAdjacentHTML("beforeend", html);
//   });
// }
//
// function filterArticles() {
//   const filteredArticles = articlesData.filter((item) => {
//     return (
//       item.description.toLowerCase().includes(userInput.toLowerCase()) ||
//       item.title.toLowerCase().includes(userInput.toLowerCase())
//     );
//   });
//   updateArticles(filteredArticles.length > 0 ? filteredArticles : null);
// }
//
// function updateArticles(articles) {
//   const list = document.getElementById("list");
//   list.innerHTML = "";
//
//   if (articles) {
//     createArticles(articles);
//   } else {
//     list.textContent = "No results";
//   }
// }
//
// createArticles(articlesData);
//
// let userInput = "";
// let timeoutId;
//
// const searchInput = document.getElementById("searchInput");
// searchInput.addEventListener("input", handleInputChange);
//
// function handleInputChange(event) {
//   userInput = event.target.value;
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(filterArticles, 300);
// }


  // const burgerBtn = document.getElementById("hm-menu");
  // const closeBtn = document.getElementById("close-menu");
  // const burgerMenu = document.querySelector(".burger-menu");
  // const overlay = document.querySelector(".overlay");
  //
  // burgerBtn.addEventListener("click", function () {
  //   burgerMenu.style.transform = "translateY(0)";
  //   overlay.style.display = "block";
  //   burgerBtn.style.display = "none";
  //   closeBtn.style.display = "block";
  // });
  //
  // closeBtn.addEventListener("click", () => {
  //   burgerMenu.style.transform = "translateY(-100%)";
  //   overlay.style.display = "none";
  //   closeBtn.style.display = "none";
  //   burgerBtn.style.display = "block";
  // });
  //
  // const faqItems = document.querySelectorAll(".menu-item");
  //
  // faqItems.forEach((item) => {
  //   const toggleBtn = item.querySelector(".menu-item__container");
  //
  //   const answer = item.querySelector(".answer");
  //
  //   toggleBtn.addEventListener("click", function () {
  //     const arrow = item.querySelector(".down");
  //     const title = item.querySelector(".menu-item__h1");
  //
  //     faqItems.forEach((otherItem) => {
  //       const arrow = otherItem.querySelector(".down");
  //       const title = otherItem.querySelector(".menu-item__h1");
  //       const otherAnswer = otherItem.querySelector(".answer");
  //       if (otherAnswer !== answer && otherAnswer.classList.contains("show")) {
  //         otherAnswer.classList.remove("show");
  //         arrow.style.transform = "rotate(45deg)";
  //         title.style.color = "#ffffff";
  //       }
  //     });
  //
  //     if (!answer.classList.contains("show")) {
  //       title.style.color = "#6cb52d";
  //       arrow.style.transform = "rotate(-135deg)";
  //     } else {
  //       arrow.style.transform = "rotate(45deg)";
  //       title.style.color = "#ffffff";
  //     }
  //
  //     answer.classList.toggle("show");
  //   });
  // });
  //
  //
  //

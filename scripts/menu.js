import { menuItems } from "./constants.js";

// function generateDropDownItems(items, liClass, aClass) {
//   return items.map(
//     (item) =>
//       `<li class=${liClass}><a class=${aClass} href="${item.href}">${item.text}</a></li>`
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
//   return `
//             <article class="menu-item">
//               <div class="menu-item__container">
//                 <h1 class="menu-item__h1">${menuData.title}</h1>
//                 <button class="menu-item__arrow down"></button>
//               </div>
//               <ul class="dropdown-m">
//                 ${generateDropDownItems(menuData.items, "my-3", "dropdown-m__item" )}
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

function generateDropDownItems(items, liClass, aClass) {
  return items.map((item) => {
    const li = document.createElement("li");
    li.className = liClass;
    const a = document.createElement("a");
    a.className = aClass;
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    return li;
  });
}

function createDropdownMenu(menuData) {
  const dropdown = document.createElement("div");
  dropdown.className = "dropdown";

  const button = document.createElement("button");
  button.className = "drop-btn";
  button.textContent = menuData.title;
  dropdown.appendChild(button);

  const arrow = document.createElement("i");
  arrow.className = "arrow down";
  dropdown.appendChild(arrow);

  const ul = document.createElement("ul");
  ul.className = "dropdown-content";
  const items = generateDropDownItems(menuData.items, "", "dropdown-item");
  items.forEach((item) => ul.appendChild(item));
  dropdown.appendChild(ul);

  return dropdown;
}

function createDropdownMenuForMobile(menuData) {
  const article = document.createElement("article");
  article.className = "menu-item";

  const container = document.createElement("div");
  container.className = "menu-item__container";
  article.appendChild(container);

  const h1 = document.createElement("h1");
  h1.className = "menu-item__h1";
  h1.textContent = menuData.title;
  container.appendChild(h1);

  const button = document.createElement("button");
  button.className = "menu-item__arrow down";
  container.appendChild(button);

  const ul = document.createElement("ul");
  ul.className = "dropdown-m";
  const items = generateDropDownItems(menuData.items, "my-3", "dropdown-m__item");
  items.forEach((item) => ul.appendChild(item));
  article.appendChild(ul);

  return article;
}

function createMobileMenu() {
  const menuContent = document.getElementById("menu-content");
  menuItems.forEach((menu) => {
    const dropdown = createDropdownMenuForMobile(menu);
    menuContent.appendChild(dropdown);
  });
}

function createMenu() {
  const navbarMenu = document.getElementById("navbar-menu");
  menuItems.forEach((menu) => {
    const dropdown = createDropdownMenu(menu);
    navbarMenu.appendChild(dropdown);
  });
}

createMobileMenu();
createMenu();

const burgerBtn = document.getElementById("hm-menu");
const closeBtn = document.getElementById("close-menu");
const burgerMenu = document.querySelector(".burger-menu");
const overlay = document.querySelector(".overlay");

burgerBtn.addEventListener("click", function () {
  burgerMenu.style.transform = "translateY(0)";
  overlay.style.display = "block";
  burgerBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  burgerMenu.style.transform = "translateY(-100%)";
  overlay.style.display = "none";
  closeBtn.style.display = "none";
  burgerBtn.style.display = "block";
});

const documentMenuItems = document.querySelectorAll(".menu-item");

documentMenuItems.forEach((item) => {
  const toggleBtn = item.querySelector(".menu-item__container");
  const dropdownMobile = item.querySelector(".dropdown-m");

  toggleBtn.addEventListener("click", function () {
    const arrow = item.querySelector(".down");
    const title = item.querySelector(".menu-item__h1");

    documentMenuItems.forEach((otherItem) => {
      const arrow = otherItem.querySelector(".down");
      const title = otherItem.querySelector(".menu-item__h1");
      const otherAnswer = otherItem.querySelector(".dropdown-m");
      if (otherAnswer !== dropdownMobile && otherAnswer.classList.contains("show")) {
        otherAnswer.classList.remove("show");
        arrow.style.transform = "rotate(45deg)";
        title.style.color = "#ffffff";
      }
    });

    if (!dropdownMobile.classList.contains("show")) {
      title.style.color = "#6cb52d";
      arrow.style.transform = "rotate(-135deg)";
    } else {
      arrow.style.transform = "rotate(45deg)";
      title.style.color = "#ffffff";
    }

    dropdownMobile.classList.toggle("show");
  });
});




import { menuItems } from "./constants.js";

function generateDropDownItems(items, liClass, aClass) {
  return items.map(
    (item) =>
      `<li class=${liClass}><a class=${aClass} href="${item.href}">${item.text}</a></li>`
  ).join("");
}

function createDropdownMenu(menuData) {
  return `
    <div class="dropdown">
      <button class="drop-btn">${menuData.title}</button>
      <i class="arrow down"></i>
      <ul class="dropdown-content">
        ${generateDropDownItems(menuData.items, "", "dropdown-item" )}
      </ul>
    </div>
  `;
}

function createDropdownMenuForMobile(menuData) {
  return `
            <article class="menu-item">
              <div class="menu-item__container">
                <h1 class="menu-item__h1">${menuData.title}</h1>
                <button class="menu-item__arrow down"></button>
              </div>
              <ul class="answer dropdown-m">
                ${generateDropDownItems(menuData.items, "my-3", "answer-item dropdown-m__item" )}
              </ul>
            </article>
  `;
}

function createMobileMenu() {
  const _menu = document.getElementById("menu-content");
  menuItems.forEach((menu) => {
    const dropdownHTML = createDropdownMenuForMobile(menu);
    _menu.insertAdjacentHTML("beforeend", dropdownHTML);
  });
}

createMobileMenu();

const dropdownContainer = document.getElementById("navbar-menu");
menuItems.forEach((menu) => {
  const dropdownHTML = createDropdownMenu(menu);
  dropdownContainer.insertAdjacentHTML("beforeend", dropdownHTML);
});

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

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  const toggleBtn = item.querySelector(".menu-item__container");

  const dropdownMobile = item.querySelector(".dropdown-m");

  toggleBtn.addEventListener("click", function () {
    const arrow = item.querySelector(".down");
    const title = item.querySelector(".menu-item__h1");

    menuItems.forEach((otherItem) => {
      const arrow = otherItem.querySelector(".down");
      const title = otherItem.querySelector(".menu-item__h1");
      const otherDropdownMobile = otherItem.querySelector(".dropdown-m");
      if (otherDropdownMobile !== dropdownMobile && otherDropdownMobile.classList.contains("show")) {
        otherDropdownMobile.classList.remove("show");
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




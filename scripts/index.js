import { articlesData, menuItems} from "./constants";
// const articlesData = [
//   {
//     title: "Spring Boot",
//     description:
//       "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
//     img: "spring-boot",
//   },
//   {
//     title: "Spring Framework",
//     description:
//       "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
//     img: "spring-framework",
//   },
//   {
//     title: "Spring Data",
//     description:
//       "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
//     img: "spring-data",
//   },
//   {
//     title: "Spring Cloud",
//     description:
//       " Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
//     img: "spring-cloud",
//   },
//   {
//     title: "Spring Cloud Data Flow",
//     description:
//       "Provides an orchestration service for composable data microservice applications on modern runtimes.",
//     img: "spring-data-flow",
//   },
//   {
//     title: "Spring Security",
//     description:
//       "Protects your application with comprehensive and extensible authentication and authorization support.",
//     img: "spring-security",
//   },
// ];
//
// const menuItems = [
//   {
//     title: "Why Spring",
//     items: [
//       { text: "Overview", href: "https://spring.io/why-spring" },
//       { text: "Microservices", href: "/microservices" },
//       { text: "Reactive", href: "https://spring.io/reactive" },
//       { text: "Event Driven", href: "https://spring.io/event-driven" },
//       { text: "Cloud", href: "https://spring.io/cloud" },
//       { text: "Web Applications", href: "https://spring.io/web-applications" },
//       { text: "Serverless", href: "https://spring.io/serverless" },
//       { text: "Batch", href: "https://spring.io/batch" },
//     ],
//   },
//   {
//     title: "Learn",
//     items: [
//       { text: "Overview", href: "https://spring.io/learn" },
//       { text: "Quickstart", href: "https://spring.io/quickstart" },
//       { text: "Guides", href: "https://spring.io/guides" },
//       { text: "Blog", href: "https://spring.io/blog" },
//     ],
//   },
//   {
//     title: "Projects",
//     items: [
//       { text: "Overview", href: "https://spring.io/projects" },
//       { text: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
//       {
//         text: "Spring Framework",
//         href: "https://spring.io/projects/spring-framework",
//       },
//       { text: "Spring Cloud", href: "https://spring.io/projects/spring-cloud" },
//       {
//         text: "Spring Cloud Data Flow",
//         href: "https://spring.io/projects/spring-cloud-dataflow",
//       },
//       { text: "Spring Data", href: "https://spring.io/projects/spring-data" },
//       {
//         text: "Spring Integration",
//         href: "https://spring.io/projects/spring-integration",
//       },
//       { text: "Spring Batch", href: "https://spring.io/projects/spring-batch" },
//       {
//         text: "Spring Security",
//         href: "https://spring.io/projects/spring-security",
//       },
//       { text: "View all projects", href: "https://spring.io/projects/" },
//       { text: "DEVELOPMENT TOOLS" },
//       { text: "Spring Tools 4", href: "https://spring.io/tools" },
//       {
//         text: "Spring Initializr",
//         href: "https://start.spring.io/",
//         ariaLabel: "Spring Initializr, Open in a new tab",
//       },
//     ],
//   },
//   {
//     title: "Academy",
//     items: [
//       { text: "Courses", href: "https://spring.academy/courses" },
//       { text: "Get Certified", href: "https://spring.academy/learning-path" },
//     ],
//   },
//   {
//     title: "Solutions",
//     items: [
//       { text: "Overview", href: "https://spring.io/solutions" },
//       { text: "Spring Runtime", href: "https://spring.io/support" },
//       { text: "Spring Consulting", href: "https://spring.io/consulting" },
//       {
//         text: "Spring Academy For Teams",
//         href: "https://spring.academy/teams",
//       },
//       { text: "Security Advisories", href: "https://spring.io/security" },
//     ],
//   },
//   {
//     title: "Community",
//     items: [
//       { text: "Overview", href: "https://spring.io/community" },
//       { text: "Events", href: "https://spring.io/events" },
//       { text: "Team", href: "https://spring.io/team" },
//     ],
//   },
// ];

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
              <ul class="answer">
                ${generateDropDownItems(menuData.items, "my-3", "answer-item" )}
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

function filterArticles() {
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

let userInput = "";
let timeoutId;

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", handleInputChange);

function handleInputChange(event) {
  userInput = event.target.value;
  console.log(userInput);
  clearTimeout(timeoutId);
  timeoutId = setTimeout(filterArticles, 300);
}


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

  const faqItems = document.querySelectorAll(".menu-item");

  faqItems.forEach((item) => {
    const toggleBtn = item.querySelector(".menu-item__container");

    const answer = item.querySelector(".answer");

    toggleBtn.addEventListener("click", function () {
      const arrow = item.querySelector(".down");
      const title = item.querySelector(".menu-item__h1");

      faqItems.forEach((otherItem) => {
        const arrow = otherItem.querySelector(".down");
        const title = otherItem.querySelector(".menu-item__h1");
        const otherAnswer = otherItem.querySelector(".answer");
        if (otherAnswer !== answer && otherAnswer.classList.contains("show")) {
          otherAnswer.classList.remove("show");
          arrow.style.transform = "rotate(45deg)";
          title.style.color = "#ffffff";
        }
      });

      if (!answer.classList.contains("show")) {
        title.style.color = "#6cb52d";
        arrow.style.transform = "rotate(-135deg)";
      } else {
        arrow.style.transform = "rotate(45deg)";
        title.style.color = "#ffffff";
      }

      answer.classList.toggle("show");
    });
  });




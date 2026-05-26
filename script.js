const menuIcon = document.querySelector("#menu-icon");
const rightNav = document.querySelector("#right-nav");

menuIcon.addEventListener("click", () => {
  rightNav.classList.toggle("active");
  if (rightNav.classList.contains("active")) {
    menuIcon.classList.remove("fa-solid fa-bars");
    menuIcon.classList.add("fa-light fa-xmark");
  } else {
    menuIcon.classList.remove("fa-light fa-xmark");
    menuIcon.classList.add("fa-solid fa-bars");
  }
});

// PROJECT FILTER ACTIVE BUTTON

const buttons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

const viewAllBtn = document.querySelector(".view-btn button");

// FILTER BUTTONS
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // remove active class
    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    // active class add
    btn.classList.add("active");

    // selected category
    const filterValue = btn.getAttribute("data-filter");

    // filter projects
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filterValue === "all" || category === filterValue) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// VIEW ALL PROJECTS BUTTON
viewAllBtn.addEventListener("click", () => {
  // show all projects
  projectCards.forEach((card) => {
    card.style.display = "block";
  });

  // active class remove from all buttons
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // active class add on ALL button
  document.querySelector('[data-filter="all"]').classList.add("active");
});

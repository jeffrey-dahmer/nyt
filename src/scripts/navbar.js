const navbar = document.querySelector(".nav-categorys");

const navbarHeader = navbar.cloneNode(true);
navbarHeader.style.border = "none";

const navbarHeaderContainer = document.createElement("header");
navbarHeaderContainer.classList.add("navbarContainer");
navbarHeaderContainer.append(navbarHeader);

function showHeader() {
  const scrolled = window.scrollY;

  if (scrolled >= 200) {
    navbarHeaderContainer.style.visibility = "visible";
    navbarHeaderContainer.style.transform = "translateY(0px)";
  } else {
    navbarHeaderContainer.style.visibility = "hidden";
    navbarHeaderContainer.style.transform = "translateY(-70px)";
  }
}
window.addEventListener("scroll", showHeader);

const body = document.getElementsByTagName("body");
console.log(body);
body[0].insertAdjacentElement("afterbegin", navbarHeaderContainer);

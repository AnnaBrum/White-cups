const body = document.querySelector("body");
const aboutUsImage = document.querySelector(".about-us-image img");
const logoFooter = document.querySelector(".logo-footer img");
const hamburgerDiv = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger-menu-icon");
const menuCloser = document.querySelector(".close-menu");
const navIcons = document.querySelector(".nav-icons");
const navIconsImg = navIcons.querySelectorAll("img");
console.log(navIconsImg);

window.addEventListener("click", (event) => {
  console.log(hamburgerDiv.classList);
  if (
    !hamburgerDiv.contains(event.target) &&
    !hamburgerIcon.contains(event.target) &&
    !menuCloser.contains(event.target) &&
    !hamburgerDiv.classList.contains("hidden")
  ) {
    hamburgerDiv.classList.toggle("hidden");
  }
});

hamburgerIcon.addEventListener("click", (event) => {
  if (hamburgerDiv.classList.contains("hidden")) {
    hamburgerDiv.classList.remove("hidden");
  } else hamburgerDiv.classList.add("hidden");
});

menuCloser.addEventListener("click", (event) => {
  if (hamburgerDiv.classList.contains("hidden")) {
    hamburgerDiv.classList.remove("hidden");
  } else hamburgerDiv.classList.add("hidden");
});

// Create a media condition that targets viewports at least 768px wide

// Check if the media query is true

const mediaQuery = window.matchMedia("(min-width: 780px)");

if (mediaQuery.matches) {
  aboutUsImage.src = "images/aboutus_desktop.png";
} else {
  aboutUsImage.src = "images/aboutus_mobile.png";
}

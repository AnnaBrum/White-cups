const body = document.querySelector("body");
const aboutUsImage = document.querySelector(".about-us-image img");
const logoFooter = document.querySelector(".logo-footer img");
const hamburgerDiv = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger-menu-icon");
const menuCloser = document.querySelector("close-menu");

console.log(hamburgerIcon);

hamburgerIcon.addEventListener("click", (event) => {
  if (hamburgerDiv.classList.contains("hidden")) {
    hamburgerDiv.classList.remove("hidden");
  } else hamburgerDiv.classList.add("hidden");
});

// hamburgerIcon.addEventListener("click", (event) => {
//   if (hamburgerDiv.classList.contains("hidden")) {
//     hamburgerDiv.classList.remove("hidden");
//   } else hamburgerDiv.classList.add("hidden");
// });

// Create a media condition that targets viewports at least 768px wide

// Check if the media query is true

const mediaQuery = window.matchMedia("(min-width: 780px)");

if (mediaQuery.matches) {
  // Then trigger an alert
  logoFooter.src = "images/desktop_logo.png";
  aboutUsImage.src = "images/aboutus_desktop.png";
} else {
  logoFooter.src = "images/mobile_logo.png";
  aboutUsImage.src = "images/aboutus_mobile.png";
}

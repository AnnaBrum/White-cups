const body = document.querySelector("body");
const aboutUsImage = document.querySelector(".about-us-image img");
const logoFooter = document.querySelector(".logo-footer img");
const hamburgerDiv = document.querySelector(".hamburger");

console.log(hamburgerDiv.classList);

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

const body = document.querySelector("body");
const aboutUsImage = document.querySelector(".about-us-image img");

console.log(aboutUsImage);

// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(min-width: 390px)");
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  aboutUsImage.src = "images/aboutus_desktop.png";
  console.log();
}

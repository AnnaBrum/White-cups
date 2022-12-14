const body = document.querySelector("body");
const aboutUsImage = document.querySelector(".about-us-image img");

// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(min-width: 780px)");
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert

  aboutUsImage.src = "images/aboutus_desktop.png";
  console.log(aboutUsImage.src);
} else aboutUsImage.src = "images/aboutus_mobile.png";

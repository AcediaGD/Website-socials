document.addEventListener("DOMContentLoaded", function () {
  const swipeUp = document.getElementById("swipe-up");
  const links = document.getElementById("links");

  swipeUp.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents immediate closing
    links.style.display = "flex"; // Show menu
    swipeUp.style.display = "none"; // Hide "Tap to see socials"
  });

  document.body.addEventListener("click", function (event) {
    if (!links.contains(event.target) && links.style.display === "flex") {
      links.style.display = "none"; // Hide menu
      swipeUp.style.display = "block"; // Show "Tap to see socials"
    }
  });

  // Prevent menu from closing when clicking inside it
  links.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const swipeUp = document.getElementById("swipe-up");
  const links = document.getElementById("links");
  const container = document.querySelector(".container");

  swipeUp.addEventListener("click", function() {
    links.style.display = "flex"; // Show the social links
    swipeUp.style.display = "none"; // Hide the swipe-up text
  });

  // Close menu when tapping outside
  container.addEventListener("click", function(event) {
    if (!links.contains(event.target) && links.style.display === "flex") {
      links.style.display = "none"; // Hide links
      swipeUp.style.display = "block"; // Show "Tap to see socials"
    }
  });
});

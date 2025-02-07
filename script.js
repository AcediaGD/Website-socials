document.addEventListener("DOMContentLoaded", function() {
  const swipeUp = document.getElementById("swipe-up");
  const links = document.getElementById("links");

  swipeUp.addEventListener("click", function() {
    links.style.display = "flex";  // Show the social links
    swipeUp.style.display = "none"; // Hide the swipe-up text
  });
});
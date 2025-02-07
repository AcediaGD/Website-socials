document.addEventListener("DOMContentLoaded", function () {
  const swipeUp = document.getElementById("swipe-up");
  const links = document.getElementById("links");

  swipeUp.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents immediate closing
    links.classList.add("active"); // Slide up
    swipeUp.style.display = "none"; // Hide "Tap to see socials"
  });

  document.body.addEventListener("click", function (event) {
    if (!links.contains(event.target) && links.classList.contains("active")) {
      links.classList.remove("active"); // Slide down
      setTimeout(() => {
        swipeUp.style.display = "block"; // Show "Tap to see socials" after animation
      }, 500); // Matches CSS transition duration
    }
  });

  // Prevent menu from closing when clicking inside it
  links.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

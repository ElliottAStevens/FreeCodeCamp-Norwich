const toggleButton = document.getElementsByClassName("toggle-button")[0];
const links = document.getElementsByClassName("navbar-links")[0];
const main = document.getElementsByTagName("main")[0];

toggleButton.addEventListener("click", function() {
  links.classList.toggle("active");
  main.classList.toggle("down");
});



  
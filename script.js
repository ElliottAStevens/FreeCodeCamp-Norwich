const toggleButton = document.getElementsByClassName("toggle-button")[0];
const links = document.getElementsByClassName("navbar-links")[0];
const content = document.getElementsByClassName("content")[0];

toggleButton.addEventListener("click", function() {
  links.classList.toggle("active");
  content.classList.toggle("down");
});



  
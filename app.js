function toggleMenu() {
  const navbar = document.getElementById("navbar");
  const menuButton = document.querySelector(".menu-btn");

  navbar.classList.toggle("show");

  menuButton.classList.toggle("open");
}
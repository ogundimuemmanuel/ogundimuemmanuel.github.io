window.addEventListener("load",
  () => {
const hamburger =
document.getElementById('hamburger');
const navlinks =
document.getElementById('navlinks');

if (hamburger && navlinks) {
  console.log(" Hamburger js connected and running!");
hamburger.addEventListener('click', () => {
  navlinks.classList.toggle('active');
});
} else {
  console.log(" Hamburger or navlinks not found on this page");
}
});
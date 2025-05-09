document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for reaching out! We'll get back to you soon.");
  this.reset();
});
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("show");
});

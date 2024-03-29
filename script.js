const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
const dropdownMenu = document.querySelector('.dropdown-menu');

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => {
  header.classList.toggle("show-mobile-menu");
});

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => {
  header.classList.remove("show-mobile-menu");
});

// Toggle display of the dropdown menu on click
document.getElementById('menu-link').addEventListener('click', function() {
  dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
});

// Close dropdown menu when clicking outside
document.addEventListener("click", function(event) {
  if (!event.target.matches('#menu-link')) {
    dropdownMenu.style.display = 'none';
  }
});

window.onload = function() {
  const menuItems = document.querySelectorAll('.menu-item');
  let currentItemIndex = 0;

  function showNextItem() {
    menuItems[currentItemIndex].classList.add('hidden');
    currentItemIndex = (currentItemIndex + 1) % menuItems.length;
    menuItems[currentItemIndex].classList.remove('hidden');
  }

  setInterval(showNextItem, 3000); // Change every 3 seconds


};

document.addEventListener("DOMContentLoaded", function() {
  const clientCard = document.querySelector(".client-card");
  const cards = document.querySelectorAll(".card");

  let currentIndex = 0;

  function showCard(index) {
    clientCard.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  setInterval(nextSlide, 5000); // Change slide every 5 seconds
});

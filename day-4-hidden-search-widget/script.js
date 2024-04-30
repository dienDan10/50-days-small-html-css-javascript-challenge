const searchIcon = document.querySelector('.search-icon');
const searchbar = document.querySelector('.search-bar');

searchIcon.addEventListener('click', () => {
  searchbar.classList.toggle('search-bar--active');
  searchbar.focus();
})
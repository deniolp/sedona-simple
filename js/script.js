
var searchButton = document.querySelector(".search-button");
var searchForm = document.querySelector(".search-hotels-form");

searchButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  searchForm.classList.toggle("form-remove");
});

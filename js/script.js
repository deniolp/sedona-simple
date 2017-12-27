
var searchButton = document.querySelector(".search-button");
var searchForm = document.querySelector(".search-hotels-form");
var form = document.querySelector("form");
var comein = form.querySelector("[name=date-in]");
var comeout = form.querySelector("[name=date-out]");
var adults = form.querySelector("[name=adults]");

searchButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  searchForm.classList.toggle("form-remove");
  searchForm.classList.add("form-animation");
});


form.addEventListener("submit", function(evt) {
  if (!comein.value || !comeout.value || !adults.value) {
      evt.preventDefault();
      searchForm.classList.remove("form-error");
      searchForm.offsetWidth = searchForm.offsetWidth;
      searchForm.classList.add("form-error");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (!searchForm.classList.contains("form-remove")) {
      searchForm.classList.toggle("form-remove");
    }
  }
});

  var link = document.querySelector(".button-search");
  var form = document.querySelector(".search-form");
  var dateEntry = form.querySelector("[name=date-entry]");

  link.addEventListener("click", function (evt) {
      evt.preventDefault();
      form.classList.toggle("form-show");
      dateEntry.focus();
  });


 
var link = document.querySelector(".button-search");
var form = document.querySelector(".search-form");
var dateEntry = form.querySelector("[name=date-entry]");
var dateDeparture = form.querySelector("[name=date-departure]");
var NumberChildren = form.querySelector("[name=search-number-children]");
var NumberAdults = form.querySelector("[name=search-number-adults]");
var anim = document.querySelector("form");

link.addEventListener ("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-show");
});

form.addEventListener("submit", function (evt) {
  if (!dateEntry.value || !dateDeparture.value 
  || !NumberChildren.value || !NumberAdults.value) {
  evt.preventDefault();
  form.classList.remove("form-error");
  form.offsetWidth = form.offsetWidth;
  form.classList.add("form-error");
}
});

anim.addEventListener("animationend", function()
	{dateEntry.focus();});

function initMap() {
  var uluru = {lat: 34.77, lng: -111.75};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: uluru,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: mark = {lat: 34.87, lng: -111.75},
    map: map
  });
}
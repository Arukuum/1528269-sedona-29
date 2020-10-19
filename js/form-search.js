const popupLink = document.querySelector(".search-hotel-button");
const searchPopup = document.querySelector(".form-search");
const formSearch = document.querySelector(".modal-form");
const arrivalDate = document.querySelector("#input-date");
const departureDate = document.querySelector("#outcome-date");
const adultsNumder = document.querySelector("#adults");
const childNumder = document.querySelector("#child");

let isStorageSupport = true;
let storageAdult = "";
let storageChild = "";

try {
	storageAdult = localStorage.getItem("adults");
	storageChild = localStorage.getItem("child");
}	catch (err) {
	isStorageSupportAdult = false;
}

if (storageAdult) {
	adultsNumder.value = storageAdult;
} 

if (storageChild) {
	childNumder.value = storageChild;
}

popupLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	searchPopup.classList.toggle("modal-form-close");
	searchPopup.classList.remove("modal-error");
	arrivalDate.focus();
});

formSearch.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !departureDate.value || !adultsNumder.value) {
    	evt.preventDefault();
    	searchPopup.classList.remove("modal-error");
    	searchPopup.offsetWidth = searchPopup.offsetWidth;
		searchPopup.classList.add("modal-error");
	}	else {
			if (isStorageSupport) {
			localStorage.setItem("adults", adultsNumder.value);
			localStorage.setItem("child", childNumder.value);
    	}
    }
});

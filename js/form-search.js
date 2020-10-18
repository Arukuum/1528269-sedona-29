let PopupLink = document.querySelector(".search-hotel-button");
let SearchPopup = document.querySelector(".form-search");
let FormSearch = document.querySelector(".modal-form");
let ArrivalDate = document.querySelector("#input-date");
let DepartureDate = document.querySelector("#outcome-date");
let AdultsNumder = document.querySelector("#adults");
let ChildNumder = document.querySelector("#child");

let isStorageSupport = true;
let storage = "";

try {
	storage = localStorage.getItem("adults");
	storage = localStorage.getItem("child");
}	catch (err) {
	isStorageSupport = false;
}

PopupLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	SearchPopup.classList.toggle("modal-form-close");

	if (storage) {
    	AdultsNumder.value = storage;
    	ChildNumder.value = storage;
	}

	ArrivalDate.focus();
});

FormSearch.addEventListener("submit", function (evt) {
    if (!ArrivalDate.value || !DepartureDate.value || !AdultsNumder.value) {
    	evt.preventDefault();
    	SearchPopup.classList.add("modal-error");
    	SearchPopup.offsetWidth = SearchPopup.offsetWidth;
		SearchPopup.classList.add("modal-error");
	}	else {
		if (isStorageSupport) {
    	localStorage.setItem("adults", AdultsNumder.value);
    	localStorage.setItem("child", ChildNumder.value);
    	}
	}
});
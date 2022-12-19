const popup = document.querySelector('.popup');
let inputPopupName = document.querySelector("#Popup_form_name");
let inputPopupProfession = document.querySelector("#Popup_form_profession");
let nameProfile = document.querySelector(".profile-info__name");
let professionProfile = document.querySelector(".profile-info__profession");
inputPopupName.value = nameProfile.textContent
inputPopupProfession.value = professionProfile.textContent
// popup.classList.add('popup_opened');

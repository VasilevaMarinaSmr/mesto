const popupForm = document.querySelector('.popup');
let popupInputName = document.querySelector("#Popup_form_name");
let popupInputProfession = document.querySelector("#Popup_form_profession");
let profileName = document.querySelector(".profile-info__name");
let profileProfession = document.querySelector(".profile-info__profession");
let profileOpenPopupBtn = document.querySelector('profile-info__edit-button');
let popupCloseBtn = popupForm.querySelector('.popup__button-close');



function openPopup() {
  popupForm.classList.add('popup_opened');
  popupInputName.value = profileName.textContent
  popupInputProfession.value = profileProfession.textContent
}

function closePopup() {
  popupForm.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit); 
profileOpenPopupBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);

const popupWindow = document.querySelector('.popup');
let popupForm = document.querySelector('.form-popup');
let popupInputName = document.querySelector('#Popup_form_name');
let popupInputProfession = document.querySelector('#Popup_form_profession');
let profileName = document.querySelector('.profile-info__name');
let profileProfession = document.querySelector('.profile-info__profession');
let profileOpenPopupBtn = document.querySelector('.profile-info__edit-button');
let popupCloseBtn = popupWindow.querySelector('.popup__button-close');


function openPopup() {
  popupWindow.classList.add('popup_opened');
  popupInputName.value = profileName.textContent
  popupInputProfession.value = profileProfession.textContent
}

function closePopup() {
  popupWindow.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  closePopup();
}

popupForm.addEventListener('submit', handleFormSubmit);
profileOpenPopupBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const popupWindow = document.querySelector('.popup');
let popupForm = document.querySelector('.form-popup');
let popupInputName = document.querySelector('.form-popup__text_modified_name');
let popupInputProfession = document.querySelector('.form-popup__text_modified_profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
let profileOpenPopupBtn = document.querySelector('.profile__edit-button');
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

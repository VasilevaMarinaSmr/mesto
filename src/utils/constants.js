export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const popupFormEditProfile = document.querySelector(
  ".form-popup_edit-profile"
);
export const popupFormAddImage = document.querySelector(
  ".form-popup_add-image"
);
export const popupInputName = document.querySelector(
  ".form-popup__text_modified_name"
);
export const popupInputProfession = document.querySelector(
  ".form-popup__text_modified_profession"
);
export const profileOpenPopupEditProfileBtn = document.querySelector(
  ".profile__edit-button"
);
export const profileOpenPopupAddImageBtn = document.querySelector(
  ".profile__add-button"
);

export const profileAvatar = document.querySelector(
  ".profile__avatar"
);

export const profileName = document.querySelector(
  ".profile__name"
);

export const profileProfession = document.querySelector(
  ".profile__profession"
);

export const validationConfig = {
  formSelector: ".form-popup",
  inputSelector: ".form-popup__text",
  submitButtonSelector: ".form-popup__save",
  inactiveButtonClass: "form-popup__save_disabled",
  inputErrorClass: "form-popup__text_type_error",
  errorClass: "form-popup__error_visible",
};
import { Card } from "./Card.js";
import { initialCards, validationConfig } from "./constants.js";
import { FormValidator } from "./FormValidator.js";

const popupWindowEditProfile = document.querySelector(
  ".popup_form_edit-profile"
);
const popupWindowAddImage = document.querySelector(".popup_form_add-image");
const popupWindowBigPicture = document.querySelector(".popup_form_big-picture");

const popupFormEditProfile = document.querySelector(".form-popup_edit-profile");
const popupFormAddImage = document.querySelector(".form-popup_add-image");

const popupInputName = document.querySelector(
  ".form-popup__text_modified_name"
);
const popupInputProfession = document.querySelector(
  ".form-popup__text_modified_profession"
);
const popupInputImageName = document.querySelector(
  ".form-popup__text_modified_image"
);
const popupInputLink = document.querySelector(
  ".form-popup__text_modified_link"
);

const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const profileOpenPopupEditProfileBtn = document.querySelector(
  ".profile__edit-button"
);
const profileOpenPopupAddImageBtn = document.querySelector(
  ".profile__add-button"
);

const buttonCloseList = document.querySelectorAll(".popup__button-close");

buttonCloseList.forEach((btn) => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => closePopup(popup));
});

const popupBigPictureImage =
  popupWindowBigPicture.querySelector(".popup__image");
const popupBigPictureDescription = popupWindowBigPicture.querySelector(
  ".popup__description"
);

const cardsContainer = document.querySelector(".elements__list");

const popups = Array.from(document.querySelectorAll(".popup"));

function handleDownEsc(evt) {
  if (evt.key === "Escape") {
    const activPopup = document.querySelector(".popup_opened");
    closePopup(activPopup);
  }
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleDownEsc);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleDownEsc);
}

function closePopupClickOnOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

function showPopupBigPicture(name, link) {
  popupBigPictureDescription.textContent = name;
  popupBigPictureImage.src = link;
  popupBigPictureImage.alt = name;
  openPopup(popupWindowBigPicture);
}

function createElementCard(name, link) {
  const cardElement = new Card(
    name,
    link,
    ".element-template",
    showPopupBigPicture
  );
  const card = cardElement.generate();
  return card;
}

function addCard(name, link) {
  cardsContainer.prepend(createElementCard(name, link));
}

function fillCards(cards) {
  cards.forEach((card) => {
    addCard(card.name, card.link);
  });
}

function getProfileInfo() {
  openPopup(popupWindowEditProfile);
  profileValidation.resetValidation();
  popupInputName.value = profileName.textContent;
  popupInputProfession.value = profileProfession.textContent;
}

function handleFormEditProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  closePopup(popupWindowEditProfile);
}

function handleFormАddImageSubmit(evt) {
  evt.preventDefault();
  const imageName = popupInputImageName.value;
  const link = popupInputLink.value;
  addCard(imageName, link);
  popupFormAddImage.reset();
  const btnSaveAddImage = popupFormAddImage.querySelector(".form-popup__save");
  btnSaveAddImage.classList.add("form-popup__save_disabled");
  closePopup(popupWindowAddImage);
}

function openPopupAddImage() {
  newCardValidation.resetValidation();
  openPopup(popupWindowAddImage);
}

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    closePopupClickOnOverlay(evt);
  });
});

profileOpenPopupEditProfileBtn.addEventListener("click", () => {
  getProfileInfo();
});

popupFormEditProfile.addEventListener("submit", handleFormEditProfileSubmit);

profileOpenPopupAddImageBtn.addEventListener("click", () => {
  openPopupAddImage();
});

popupFormAddImage.addEventListener("submit", handleFormАddImageSubmit);

fillCards(initialCards);

const profileValidation = new FormValidator(
  validationConfig,
  popupFormEditProfile
);
const newCardValidation = new FormValidator(
  validationConfig,
  popupFormAddImage
);
profileValidation.enableValidation();
newCardValidation.enableValidation();

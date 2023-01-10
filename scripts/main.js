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

const popupEditProfileCloseBtn = popupWindowEditProfile.querySelector(
  ".popup__button-close_edit_profile"
);
const popupAddImageCloseBtn = popupWindowAddImage.querySelector(
  ".popup__button-close_add_image"
);
const popupBigPictureCloseBtn = popupWindowBigPicture.querySelector(
  ".popup__button-close_picture_big"
);

const popupBigPictureImage =
  popupWindowBigPicture.querySelector(".popup__image");
const popupBigPictureDescription = popupWindowBigPicture.querySelector(
  ".popup__description"
);

const listElements = document.querySelector(".elements__list");
const cardTemplate = document.querySelector(".element-template");

const popups = Array.from(document.querySelectorAll(".popup"));

function handleDownEsc(evt) {
  if (evt.key === "Escape") {
    const activPopup = document.querySelector(".popup_opened");
    closePopup(activPopup);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleDownEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleDownEsc);
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
  const card = cardTemplate.content.cloneNode(true);
  const pushBtnLike = card.querySelector(".element__like");
  const pushBtnTrash = card.querySelector(".element__trash");
  const pushBtnImage = card.querySelector(".element__image");

  pushBtnImage.src = link;
  pushBtnImage.alt = name;
  card.querySelector(".element__name").textContent = name;

  pushBtnLike.addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__like_active");
  });

  pushBtnTrash.addEventListener("click", function () {
    pushBtnTrash.closest(".element").remove();
  });

  pushBtnImage.addEventListener("click", () => showPopupBigPicture(name, link));
  return card;
}

function addCard(name, link) {
  listElements.prepend(createElementCard(name, link));
}

function fillCards(cards) {
  cards.forEach((card) => {
    addCard(card.name, card.link);
  });
}

function getProfileInfo(popup) {
  openPopup(popup);
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
  btnSaveAddImage.setAttribute("disabled", "");
  closePopup(popupWindowAddImage);
}

fillCards(initialCards);

profileOpenPopupEditProfileBtn.addEventListener("click", function () {
  getProfileInfo(popupWindowEditProfile);
});

popupEditProfileCloseBtn.addEventListener("click", function () {
  closePopup(popupWindowEditProfile);
});

popupFormEditProfile.addEventListener("submit", handleFormEditProfileSubmit);

profileOpenPopupAddImageBtn.addEventListener("click", function () {
  openPopup(popupWindowAddImage);
});

popupAddImageCloseBtn.addEventListener("click", function () {
  closePopup(popupWindowAddImage);
});

popupBigPictureCloseBtn.addEventListener("click", function () {
  closePopup(popupWindowBigPicture);
});

popupFormAddImage.addEventListener("submit", handleFormАddImageSubmit);

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    closePopupClickOnOverlay(evt);
  });
});

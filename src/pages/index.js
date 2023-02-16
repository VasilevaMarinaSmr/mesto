import "./index.css";

import {
  initialCards,
  popupFormAddImage,
  popupFormEditProfile,
  popupInputName,
  popupInputProfession,
  profileOpenPopupAddImageBtn,
  profileOpenPopupEditProfileBtn,
  validationConfig
} from "../utils/constants.js";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
};

function createElementCard(name, link) {
  const cardElement = new Card(
    name,
    link,
    ".element-template",
    handleCardClick
  );
  const card = cardElement.generate();
  return card;
}

const cardsContainer = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createElementCard(item.name, item.link);
      cardsContainer.prepItem(cardElement);
    },
  },
  ".elements__list"
);
cardsContainer.renderItems();
const handleFormEditProfileSubmit = (changingValues) => {
  userInfo.setUserInfo(changingValues.name, changingValues.profession);
};

const handleFormАddImageSubmit = (changingValues) => {
  const infoCard = [{ name: changingValues.place, link: changingValues.link }];
  popupAddCard.close();
  const newCard = new Section(
    {
      items: infoCard,
      renderer: (item) => {
        const cardElement = createElementCard(item.name, item.link);
        newCard.prepItem(cardElement);
      },
    },
    ".elements__list"
  );
  newCard.renderItems();
};

profileOpenPopupEditProfileBtn.addEventListener("click", () => {
  const userInfoCurentValues = userInfo.getUserInfo();
  popupEditProfile.open();
  popupInputName.value = userInfoCurentValues.name;
  popupInputProfession.value = userInfoCurentValues.profession;
  profileValidation.resetValidation();
});

profileOpenPopupAddImageBtn.addEventListener("click", () => {
  newCardValidation.resetValidation();
  popupAddCard.open();
});

const popupWithImage = new PopupWithImage(".popup_form_big-picture");

const popupEditProfile = new PopupWithForm(
  ".popup_form_edit-profile",
  handleFormEditProfileSubmit
);

const userInfo = new UserInfo(".profile__name", ".profile__profession");

const popupAddCard = new PopupWithForm(
  ".popup_form_add-image",
  handleFormАddImageSubmit
);

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

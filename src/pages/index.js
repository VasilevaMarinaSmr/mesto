import "./index.css";

import {
  popupFormAddImage,
  popupFormEditProfile,
  popupInputName,
  popupInputProfession, profileAvatar,
  profileName, profileOpenPopupAddImageBtn,
  profileOpenPopupEditProfileBtn, profileProfession, validationConfig
} from "../utils/constants.js";

import { Api } from "../components/Api.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupConfirmation } from "../components/PopupConfirmation.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

let userId;

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
};


const addLike = (card) => {
  api.addLike(card.id)
    .then(res => {
      card.addingLike(res.likes);
    })
    .catch(err => console.log(err));
}

const removeLike = (card) => {
  api.removeLike(card.id)
    .then(res => {
      card.removingLike(res.likes);
    })
    .catch(err => console.log(err));
}

const openPopupConfirmation = (element, cardId) => {
  popupConfirm.open()
  popupConfirm.callbackDeleteCard(() => {
    api.deleteCard(cardId)
      .then(() =>{
        element.remove();
        element = null;
      })
      .catch((err) => {
        console.log(err);
    })
  })
}

function createElementCard(cardProperties) {
  const cardElement = new Card(
    cardProperties,
    ".element-template",
    handleCardClick,
    userId,
    addLike,
    removeLike,
    openPopupConfirmation
  );
  const card = cardElement.generate();
  return card;
}

const cardsContainer = new Section(
  {
    renderer: (cardProperties) => {
    const cardElement = createElementCard(cardProperties);
    cardsContainer.prependItem(cardElement);
    },
  },
  ".elements__list"
);


const handleInitialCards = (initialCards) => {
  cardsContainer.renderItems(initialCards)
}

const showNewProfile = (changingValues) => {
  userInfo.setUserInfo(changingValues.name, changingValues.about);
}

const handleFormEditProfileSubmit = (changingValues) => {
  api.updateProfile(changingValues.name, changingValues.profession)
  .then(res => showNewProfile(res))
  .catch(err => console.log(err))
}

const showNewCard = (changingValues) =>{
  const newCard = createElementCard(changingValues);
  cardsContainer.prependItem(newCard);
  popupAddCard.close();
}

const handleFormАddImageSubmit = (changingValues) => {
  api.createCard({name:changingValues.place, link:changingValues.link})
  .then(res => showNewCard(res))
  .catch(err => console.log(err))
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

const popupConfirm = new  PopupConfirmation(".popup_form_delete")

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


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: 'aa8e790a-3250-4e42-83f6-285a574f94a9',
    'Content-Type': 'application/json'
  }
});


Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, initialCards]) => {
    profileAvatar.src = data.avatar
    profileName.textContent = data.name
    profileProfession.textContent = data.about
    userId = data._id
    handleInitialCards(initialCards);
  })
  .catch(err => console.log(err));

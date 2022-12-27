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


const popupWindowEditProfile = document.querySelector('.popup_form_edit-profile');
const popupWindowAddImage = document.querySelector('.popup_form_add-image');
const popupWindowBigPicture = document.querySelector('.popup_form_big-picture');

let popupFormEditProfile = document.querySelector('.form-popup_edit-profile');
let popupFormAddImage = document.querySelector('.form-popup_add-image');



let popupInputName = document.querySelector('.form-popup__text_modified_name');
let popupInputProfession = document.querySelector('.form-popup__text_modified_profession');
let popupInputImageName = document.querySelector('.form-popup__text_modified_image');
let popupInputLink = document.querySelector('.form-popup__text_modified_link');

let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
let profileOpenPopupEditProfileBtn = document.querySelector('.profile__edit-button');
let profileOpenPopupAddImageBtn = document.querySelector('.profile__add-button');


let popupEditProfileCloseBtn = popupWindowEditProfile.querySelector('.popup__button-close_edit_profile');
let popupAddImageCloseBtn = popupWindowAddImage.querySelector('.popup__button-close_add_image');
let popupBigPictureCloseBtn = popupWindowBigPicture.querySelector('.popup__button-close_picture_big');

const popupBigPictureImage = popupWindowBigPicture.querySelector('.popup__image')
const popupBigPictureDescription = popupWindowBigPicture.querySelector('.popup__description')

const listElements = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('.element-template');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function showPopupBigPicture(name, link){
  popupBigPictureDescription.textContent = name;
  popupBigPictureImage.src = link;
  popupBigPictureImage.alt = name;
  openPopup(popupWindowBigPicture);
}

function createElementCard(name, link){
  const card = cardTemplate.content.cloneNode(true);
  const pushBtnLike = card.querySelector('.element__like');
  const pushBtnTrash = card.querySelector('.element__trash');
  const pushBtnImage = card.querySelector('.element__image');

  card.querySelector('.element__image').src = link;
  card.querySelector('.element__image').alt = name;
  card.querySelector('.element__name').textContent = name;

  pushBtnLike.addEventListener('click', function(evt){
    evt.target.classList.toggle('element__like_active');
  })

  pushBtnTrash.addEventListener('click', function(){
    pushBtnTrash.closest('.element').remove();
  })

  pushBtnImage.addEventListener('click', () => showPopupBigPicture(name, link));

  return card;
}

function addCard(name, link){
  listElements.prepend(createElementCard(name, link))
}

function fillCards(cards){
  cards.forEach((card) => {
    addCard(card.name, card.link);
  })
}

fillCards(initialCards);


function getProfileInfo(popup) {
  openPopup(popup);
  popupInputName.value = profileName.textContent
  popupInputProfession.value = profileProfession.textContent
}

function handleFormEditProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  closePopup(popupWindowEditProfile);
}

function handleFormАddImageSubmit(evt) {
  evt.preventDefault();
  imageName=popupInputImageName.value
  link = popupInputLink.value
  addCard(imageName, link)
  closePopup(popupWindowAddImage); 
}

profileOpenPopupEditProfileBtn.addEventListener('click', function(){
  getProfileInfo(popupWindowEditProfile)
  }
);
popupEditProfileCloseBtn.addEventListener('click', function(){
  closePopup(popupWindowEditProfile)
  }
);
popupFormEditProfile.addEventListener('submit',handleFormEditProfileSubmit);

profileOpenPopupAddImageBtn.addEventListener('click', function(){
  openPopup(popupWindowAddImage)
  }
);

popupAddImageCloseBtn.addEventListener('click', function(){
  closePopup(popupWindowAddImage)
  }
);

popupBigPictureCloseBtn.addEventListener('click', function(){
  closePopup(popupWindowBigPicture)
  }
);

popupFormAddImage.addEventListener('submit', handleFormАddImageSubmit);
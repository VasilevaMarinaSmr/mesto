export class Card {
  constructor(cardProperties, templateSelector, handleCardClick, userId, addLike, removeLike, openPopupConfirmation) {
    this._name = cardProperties.name;
    this._link = cardProperties.link;
    this._whoLikedIt = cardProperties.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._addLike = addLike;
    this._removeLike = removeLike;
    this.id = cardProperties._id;
    this._owner = cardProperties.owner._id;
    this._openPopupConfirmation = openPopupConfirmation;
  }

  _setEventListeners() {
    this._btnLike.addEventListener("click", () => {
      this._handleLikeButton();
    });
    this._element
      .querySelector(".element__trash")
      .addEventListener("click", () => {
        this._openPopupConfirmation(this._element, this.id);
      });
    this._btnImage.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }


  _showOrHideNumberOfLike(whoLikedIt){
    const countLike = whoLikedIt.length;
    if (countLike > 0){
      this._elementLikeCount.textContent = countLike;
      this._elementLikeCount.classList.add('element__likes-number_active');
    } else {
      this._elementLikeCount.classList.remove('element__likes-number_active');
    }
  }

  _showLikeInCard(){
    this._btnLike.classList.add("element__like_active");
  }

  _hideLikeInCard(){
    this._btnLike.classList.remove("element__like_active");
  }

  _showTrachBtn(){
    this._btnDeleteCard.classList.add("element__trash_show")
  }

  _handleLikeButton() {
    if (this._btnLike.classList.contains("element__like_active")) {
      this._removeLike(this);
    }
    else {
      this._addLike(this);
    }
  }

  addingLike(whoLikedIt) {
    this._showOrHideNumberOfLike(whoLikedIt);
    this._showLikeInCard();
  }

  removingLike(whoLikedIt) {
    this._showOrHideNumberOfLike(whoLikedIt);
    this._hideLikeInCard()
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  generate() {
    this._element = this._getTemplate();
    this._btnDeleteCard = this._element.querySelector(".element__trash");
    this._btnLike = this._element.querySelector(".element__like");
    this._btnImage = this._element.querySelector(".element__image");
    this._elementLikeCount = this._element.querySelector('.element__like-count')
    this._btnImage.src = this._link;
    this._btnImage.alt = this._name;
    this._element.querySelector(".element__name").textContent = this._name;
    this._showOrHideNumberOfLike(this._whoLikedIt);
    this._whoLikedIt.map(a => a._id).includes(this._userId) && this._showLikeInCard();
    this._owner === this._userId && this._showTrachBtn();
    this._setEventListeners();
    return this._element;
  }
}

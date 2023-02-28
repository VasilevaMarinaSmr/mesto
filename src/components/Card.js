export class Card {
  constructor(cardProperties, templateSelector, handleCardClick, userId, addLike, removeLike) {
    this._name = cardProperties.name;
    this._link = cardProperties.link;
    this._whoLikedIt = cardProperties.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._userId = userId;
  }

  _setEventListeners() {
    this._btnLike.addEventListener("click", () => {
      this._handleLikeButton();
    });
    this._element
      .querySelector(".element__trash")
      .addEventListener("click", () => {
        this._handleTrashButton();
      });
    this._btnImage.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  _handleTrashButton() {
    this._element.remove();
    this._element = null;
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

  _handleLikeButton() {
    this._btnLike.classList.toggle("element__like_active");
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
    this._btnLike = this._element.querySelector(".element__like");
    this._btnImage = this._element.querySelector(".element__image");
    this._elementLikeCount = this._element.querySelector('.element__like-count')
    this._btnImage.src = this._link;
    this._btnImage.alt = this._name;
    this._element.querySelector(".element__name").textContent = this._name;
    this._showOrHideNumberOfLike(this._whoLikedIt);
    this._whoLikedIt.includes(this._userId) && this._handleLikeButton();
 
    this._setEventListeners();
    return this._element;
  }
}

export class Card {
  constructor(cardProperties, templateSelector, handleCardClick) {
    this._name = cardProperties.name;
    this._link = cardProperties.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._btnImage.src = this._link;
    this._btnImage.alt = this._name;
    this._element.querySelector(".element__name").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}

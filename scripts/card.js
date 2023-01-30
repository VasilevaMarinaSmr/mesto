export class Card {
  constructor(name, link, templateSelector, showPopupBigPicture) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._showPopupBigPicture = showPopupBigPicture;
  }

  _setEventListeners() {
    this._btnLike.addEventListener("click",  () => {
      this._btnLike.classList.toggle("element__like_active");
    });
    this._element.querySelector(".element__trash").addEventListener('click', () => {
      this._handleTrashButton();
    });
    this._btnImage.addEventListener("click", () =>
      this._showPopupBigPicture(this._name, this._link)
    );
  }

  _handleTrashButton() {
    this._element.remove();
    this._element = null;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  generate() {
    this._element = this._getTemplate()
    this._btnLike = this._element.querySelector(".element__like");
    this._btnImage = this._element.querySelector(".element__image");
    this._btnImage.src = this._link;
    this._btnImage.alt = this._name;
    this._element.querySelector(".element__name").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}

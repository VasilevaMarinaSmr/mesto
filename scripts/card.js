export class Card {
  constructor(name, link, cardTemplate, showPopupBigPicture) {
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate;
    this._showPopupBigPicture = showPopupBigPicture;
  }

  _setEventListeners() {
    this._pushBtnLike.addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like_active");
    });
    this._pushBtnTrash.addEventListener("click", function (evt) {
      evt.target.closest(".element").remove();
    });
    this._pushBtnImage.addEventListener("click", () =>
      this._showPopupBigPicture(this._name, this._link)
    );
  }

  generate() {
    this._element = this._cardTemplate.content.cloneNode(true);
    this._pushBtnLike = this._element.querySelector(".element__like");
    this._pushBtnTrash = this._element.querySelector(".element__trash");
    this._pushBtnImage = this._element.querySelector(".element__image");
    this._pushBtnImage.src = this._link;
    this._pushBtnImage.alt = this._name;
    this._element.querySelector(".element__name").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}

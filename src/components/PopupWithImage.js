import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupBigPictureDescription = this._popupElement.querySelector(
      ".popup__description"
    );
    this._popupBigPictureImage =
      this._popupElement.querySelector(".popup__image");
  }

  open(name, link) {
    super.open();
    this._popupBigPictureDescription.textContent = name;
    this._popupBigPictureImage.src = link;
    this._popupBigPictureImage.alt = name;
  }
}

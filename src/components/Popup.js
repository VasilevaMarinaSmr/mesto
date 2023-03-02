export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    this._setEventListeners();
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    this._removeEventListeners();
  }

  _handleEscClose = (evt) => {
    evt.key === "Escape" && this.close();
  };

  _handleClickOnOverlayClose = (evt) => {
    evt.target === evt.currentTarget && this.close();
  };

  _handelClickOnBtnClose = (evt) => {
    evt.target.classList.contains("popup__button-close") && this.close();
  };

  _setEventListeners() {
    document.addEventListener("keydown", this._handleEscClose);
    this._popupElement.addEventListener(
      "click",
      this._handleClickOnOverlayClose
    );
    this._popupElement.addEventListener(
      "mousedown",
      this._handelClickOnBtnClose
    );
  }

  _removeEventListeners() {
    document.removeEventListener("keydown", this._handleEscClose);
    this._popupElement.removeEventListener(
      "click",
      this._handleClickOnOverlayClose
    );
    this._popupElement.removeEventListener(
      "mousedown",
      this._handelClickOnBtnClose
    );
  }
}

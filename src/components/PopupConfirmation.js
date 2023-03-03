import Popup from "./Popup.js";

export class PopupConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._btnSubmitConfirmation = this._popupElement.querySelector(
      ".popup__submit-button"
    );
  }

  callbackDeleteCard(deleteCard) {
    this._deleteCard = deleteCard;
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._deleteCard();
  }

  _setEventListeners() {
    super._setEventListeners();
    this._btnSubmitConfirmation.addEventListener("click",  this._handleSubmit)

  }

  _removeEventListeners() {
    super._removeEventListeners()
    this._btnSubmitConfirmation.removeEventListener("click",  this._handleSubmit)
  }
}

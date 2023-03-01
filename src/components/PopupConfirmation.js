import Popup from "./Popup.js";

export class PopupConfirmation extends Popup {
    constructor(popupSelector, handleSubmitConfirmation) {
      super(popupSelector);
      this._btnSubmitConfirmation = this._popupElement.querySelector(".popup__submit-button");
      this._handleSubmitConfirmation = handleSubmitConfirmation;
    }

    _handleSubmit = () =>{
        this._handleSubmitConfirmation()
    }

    _setEventListeners() {
        super._setEventListeners();
        this._btnSubmitConfirmation.addEventListener('click', this._handleSubmit);
    }

    _removeEventListeners() {
        super._removeEventListeners();
        this._btnSubmitConfirmation.removeEventListener('click', this._handleSubmit);
    }
}
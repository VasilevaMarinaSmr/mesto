import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormEditSubmit) {
    super(popupSelector);
    this._formPopup = this._popupElement.querySelector(".form-popup");
    this._handleFormEditSubmit = handleFormEditSubmit;
    this._inputContainer = Array.from(
      this._formPopup.querySelectorAll(".form-popup__text")
    );
  }

  _getInputValues() {
    this._valueFields = {};
    this._inputContainer.forEach((input) => {
      this._valueFields[input.id] = input.value;
    });
    return this._valueFields;
  }

  _handleSubmitForm = (evt) => {
    evt.preventDefault();
    this._handleFormEditSubmit(this._getInputValues());
  };

  _setEventListeners() {
    super._setEventListeners();
    this._formPopup.addEventListener("submit", this._handleSubmitForm);
  }

  _removeEventListeners() {
    super._removeEventListeners()
    this._formPopup.removeEventListener("submit", this._handleSubmitForm);

  }

  close() {
    super.close();
    this._formPopup.reset();
  }
}

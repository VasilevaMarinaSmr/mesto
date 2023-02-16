export class FormValidator {
  constructor(validationConfig, formPopup) {
    this._validationConfig = validationConfig;
    this._formPopup = formPopup;
    this._inputList = Array.from(
      this._formPopup.querySelectorAll(this._validationConfig.inputSelector)
    );
    this._submitButton = this._formPopup.querySelector(
      validationConfig.submitButtonSelector
    );
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(
        this._validationConfig.inactiveButtonClass
      );
      this._submitButton.setAttribute("disabled", "");
    } else {
      this._submitButton.classList.remove(
        this._validationConfig.inactiveButtonClass
      );
      this._submitButton.removeAttribute("disabled", "");
    }
  }

  _showInputError(inputElement) {
    const errorElement = this._formPopup.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._validationConfig.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._validationConfig.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formPopup.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._validationConfig.inputErrorClass);
    errorElement.classList.remove(this._validationConfig.errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  enableValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
}

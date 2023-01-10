function showInputError(
  formElement,
  inputElement,
  errorMessage,
  validationConfig
) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorClass);
}

function hideInputError(formElement, inputElement, validationConfig) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = "";
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute("disabled", "");
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled", "");
  }
}

function checkInputValidity(formElement, inputElement, validationConfig) {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      validationConfig
    );
  } else {
    hideInputError(formElement, inputElement, validationConfig);
  }
}

function enableValidation(validationConfig) {
  const popupForms = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );
  popupForms.forEach((formPopup) => {
    const inputList = Array.from(
      formPopup.querySelectorAll(validationConfig.inputSelector)
    );
    inputList.forEach((inputElement) => {
      const submitButton = formPopup.querySelector(
        validationConfig.submitButtonSelector
      );
      toggleButtonState(
        inputList,
        submitButton,
        validationConfig.inactiveButtonClass
      );
      inputElement.addEventListener("input", function () {
        checkInputValidity(formPopup, inputElement, validationConfig);
        toggleButtonState(
          inputList,
          submitButton,
          validationConfig.inactiveButtonClass
        );
      });
    });
  });
}

enableValidation({
  formSelector: ".form-popup",
  inputSelector: ".form-popup__text",
  submitButtonSelector: ".form-popup__save",
  inactiveButtonClass: "form-popup__save_disabled",
  inputErrorClass: "form-popup__text_type_error",
  errorClass: "form-popup__error_visible",
});

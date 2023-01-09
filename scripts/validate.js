function showInputError(formElement, inputElement, errorMessage, classesModification){
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(classesModification.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(classesModification.errorClass);
};


function hideInputError(formElement, inputElement, classesModification) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(classesModification.inputErrorClass);
  errorElement.classList.remove(classesModification.errorClass);
  errorElement.textContent = '';
};

function hasInvalidInput(inputList){
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
  });
};

function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
  buttonElement[0].classList.add(inactiveButtonClass);
  } else {
  buttonElement[0].classList.remove(inactiveButtonClass);
  }
};

const checkInputValidity = (formElement, inputElement, classesModification) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, classesModification);
  } else {
    hideInputError(formElement, inputElement, classesModification);
  }
};


function enableValidation(classesModification){
  const formsPopup = Array.from(document.querySelectorAll(classesModification.formSelector));
  // Обходим формы
  formsPopup.forEach((formPopup) => {
    const inputList = Array.from(formPopup.querySelectorAll(classesModification.inputSelector));
    formPopup.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    inputList.forEach(inputElement => {
      inputElement.setAttribute('required', true);
      const submitButton = formPopup.querySelectorAll(classesModification.submitButtonSelector)
      console.log(submitButton)
      inputElement.addEventListener('input', function () {
        checkInputValidity(formPopup, inputElement, classesModification);
        toggleButtonState(inputList, submitButton, classesModification.inactiveButtonClass);
    });
  });
});
};

enableValidation({
  formSelector: '.form-popup',
  inputSelector: '.form-popup__text',
  submitButtonSelector: '.form-popup__save',
  inactiveButtonClass: 'form-popup__save_disabled',
  inputErrorClass: 'form-popup__text_type_error',
  errorClass: 'form-popup__error_visible'
});

export default class FormValidator {
  constructor(setting, formElement) {
    // Selectores
    this._inputSelector = setting.inputSelector;
    this._submitButtonSelector = setting.submitButtonSelector;
    this._buttonSaveOff = setting.buttonSaveOff;
    this._inputErrorClass = setting.inputErrorClass;
    this._errorClass = setting.errorClass;
    this._formElement = formElement;
    // Botón de guardado
    this._buttonElement = formElement.querySelector(".popup-save");
    // Input list
    this._inputList = Array.from(formElement.querySelectorAll("input"));
    // Habilitar validación y agregar el event listener
    this.enableValidation();
  }

  enableValidation() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._toggleButtonState();
  }

  _isValid(inputElement) {
    const formProfileError = this._formElement.querySelector(`.${inputElement.id}-error`);

    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, formProfileError, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement, formProfileError);
    }
  }

  _showInputError(inputElement, errorElement, errorMessage) {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement, errorElement) {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disabledButton();
    } else {
      this._enabledButton();
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _disabledButton() {
    this._buttonElement.classList.add(this._buttonSaveOff);
    this._buttonElement.setAttribute("disabled", true);
  }

  _enabledButton() {
    this._buttonElement.classList.remove(this._buttonSaveOff);
    this._buttonElement.removeAttribute("disabled");
  }
}
export default class FormValidator {
  constructor(formElement) {
    this.formElement = formElement;
    this.inputList = Array.from(formElement.querySelectorAll(".form__imput-text"));
    this.buttonElement = formElement.querySelector(".popup-save");
    this.enableValidation();
  }
  
  showInputError(inputElement, errorMessage) {
    const formProfileError = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("form__input-text_type_error");
    formProfileError.textContent = errorMessage;
    formProfileError.classList.add("form__input-show-error");
  }
  
  hideInputError(inputElement) {
    const formProfileError = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("form__input-text_type_error");
    formProfileError.classList.remove("form__input-show-error");
    formProfileError.textContent = "";
  }
  
  isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement, inputElement.validationMessage);
      return false;
    } else {
      this.hideInputError(inputElement);
      return true;
    }
  }
  
  hasInvalidInput() {
    return this.inputList.some((inputElement) => !this.isValid(inputElement));
  }
  
  toggleButtonState() {
    if (this.hasInvalidInput()) {
      this.buttonElement.classList.add("popup__button-save-off");
      this.buttonElement.setAttribute("disabled", true);
    } else {
      this.buttonElement.classList.remove("popup__button-save-off");
      this.buttonElement.removeAttribute("disabled");
    }
  }
  
  setEventListeners() {
    this.toggleButtonState();
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.isValid(inputElement);
        this.toggleButtonState();
      });
    });
  }
  
  enableValidation() {
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this.setEventListeners();
  }

  addClickHandler() {
    document.addEventListener("click", () => {
      console.log("Se hizo clic en el formulario", this.formElement.id);
    });
  }
}
  

import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitInfo) {
    super(popupSelector);

    this._submitInfo = submitInfo;
    this._formElement = document.querySelector(`${popupSelector} .form__popup`);
    this._popupElement = document.querySelector(".popup");
    console.log(this._popupElement);

    this._inputList = this._formElement.querySelectorAll(".form__imput-text");
    console.log(this._inputList);
  }

  _getImputValues() {
    const inputValues = {};

    Array.from(this._inputList).forEach((input) => {
      const selector = this._formElement.querySelector(`#${input.id}`);
      console.log("selector", selector);

      console.log(input.name);
      console.log(input.value);
      const value = this._formElement.querySelector(`#${input.id}`)?.value;

      inputValues[input.id] = value;
    });

    console.log(inputValues);
    return inputValues;
  }

  _handleAddClass() {
    this._popupElement.classList.add(".popup-place_opened");
  }

  setEventListeners() {
    super.setEventListeners();
    this.closeButton = this._popupElement.querySelector(".popup-save");
    this._formElement.addEventListener("submit", (evt) => {
      console.log(evt);
      evt.preventDefault();
      const values = this._getImputValues();
      console.log(values);

      this._submitInfo(evt, this._getImputValues());
    });
    this.closeButton.addEventListener("click", () => {
      this._handleAddClass();
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}

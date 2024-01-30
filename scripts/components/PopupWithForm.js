import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitInfo){
        super(popupSelector);
        this._submitInfo = submitInfo;
        this._formElement = document.querySelector(`${popupSelector} .form__popup`);
        this._popupElement = document.querySelector(".popup");
        this._inputList = this._formElement.querySelectorAll(".form__imput-text")
    }

    _getImputValues() {
        const inputValues = {};
        this._inputList.forEach((input) => {
            const value = this._formElement.querySelector(`#${input.id}`)?.value;
            inputValues[input.id] = value;
        });
        return inputValues;
    }
    
    _handleAddClass() {
        this._popupElement.classList.add(".popup-place_opened");
    }

    setEventListeners() {
        super.setEventListeners();

        this._btnClose = this._popupElement.querySelector("#icon_close");
        this._formElement.addEventListener("submit",(evt) =>{
            evt.preventDefault();
            this._submitInfo(this._getImputValues());
        });
        this._btnClose.addEventListener("click", () => {
            this._handleAddClass();
        });
    }

    close() {
        super.close();
        this._formElement.reset();
    }
}
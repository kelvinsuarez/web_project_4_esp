//funciones para validar los formularios
const showInputError = (formElement, inputElement, errorMessage) => {
    const formProfileError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("popup__input-text_type_error");
    formProfileError.textContent = errorMessage;
    formProfileError.classList.add("popup__input-show-error");
  };
  
const hideInputError = (formElement, inputElement) => {
    const formProfileError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("popup__input-text_type_error");
    formProfileError.classList.remove("popup__input-show-error");
    formProfileError.textContent = "";
  };

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement , inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add("popup__button-save-off");
        buttonElement.setAttribute("disabled", true);
    } else {
    buttonElement.classList.remove("popup__button-save-off");
    buttonElement.removeAttribute("disabled");
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".popup__imput-text"));
    const buttonElement = formElement.querySelector(".popup-save");
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            isValid(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};


const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".popup__form"));
    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement)
    });
}

enableValidation();
export default class PopupAvatarForm {
    constructor(){
        this._popupElement = document.querySelector("#popup-image-profile_container");
        this._formElement = this._popupElement.querySelector(".popup-image-profile__group");
        this._closeButton = this._formElement.querySelector(".popup-image-profile__icon-close");
        this._inputElement = this._formElement.querySelector(".popup-image-profile__imput-text");
        this._chageButton = this._formElement.querySelector(".popup-image-profile__button-save");
        this._editButton = document.querySelector(".profile__edit-image-button-vector");
        this._setEventListener();
    }

    _setEventListener(){
        document.addEventListener("keydown", (evt) =>{
            if (evt.key === "Escape") {
                this.close();
            }
        });

        this._editButton.addEventListener("click", () =>{
            this.open();
        });

        this._closeButton.addEventListener("click", () => {
            this.close();

        })
    }

    open() {
        this._popupElement.classList.remove("popup-opened");
    }

    close() {
        this._popupElement.classList.add("popup-opened");
    }

    loadingAction(isLoading) {
        if (isLoading) {
            this._chageButton.textContent = "Guardando..."
        } else {
            this._chageButton.textContent = "Guardar"
        }
    }
}
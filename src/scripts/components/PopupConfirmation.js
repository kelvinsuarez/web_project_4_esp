export default class PopupConfirmation{
    constructor(){
        this._action;
        this._popupElement = document.querySelector(".popup-confirmation");
        this._buttonClose = this._popupElement.querySelector(".popup-confirmation__icon-close");
        this._buttonConfirm = this._popupElement.querySelector(".popup-confirmation__button-delete");
        this._setEventListeners();
    }

    _setEventListeners(){
        document.addEventListener("keydown",(evt) => {
            if (evt.key === "Escape"){
                this.close();
            }
        });

        this._buttonClose.addEventListener("click",() => {
            this.close()
        })

        this._popupElement.addEventListener("click", (evt) => {
            if(evt.target === this._popupElement) {
                this.close()
            }
        })

        this._buttonConfirm.addEventListener("click", () =>{
            this._handleAction();
        })
    }

    open(callback) {
        this._action = callback;
        this._popupElement.classList.remove("popup-confirmation-opened");
    }

    close() {
        this._popupElement.classList.add("popup-confirmation-opened");
    }

    _handleAction() {
        this._action()
    }

    loadingAction(isLoading) {
        if(isLoading) {
            this._buttonConfirm.textContent = "Borrando...";
        } else {
            this._buttonConfirm.textContent = "Si";
        }
    }

}
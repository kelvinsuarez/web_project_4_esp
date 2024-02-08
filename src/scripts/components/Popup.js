export default class Popup{
    constructor(popupSelector){
        this.popupSelector = document.querySelector(popupSelector);
        this.closeButton = this.popupSelector.querySelector(".popup-save");
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    
    open(){
        this.popupSelector.classList.remove("popup-opened");
        document.addEventListener("keydown", this._handleEscClose)
    }

    close(){
        if (this.popupSelector) {
            this.popupSelector.classList.add("popup-opened");
        }
        document.removeEventListener("keydown", this._handleEscClose)
    }

    _handleEscClose(evt){
        if (evt.key == 'Escape'){
            this.close();
        }
    }

    setEventListeners(){
        this.closeButton.addEventListener("click", this.close.bind(this));
        this.popupSelector.addEventListener("click", (evt) => {
            if (evt.target === this.popupSelector){
                this.close()
            }
        })
    }
}
import Popup from "./Popup.js"
export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);

        this._popupImage = this.popupSelector.querySelector(".image-zoom__container");
        this._imageLegend = this.popupSelector.querySelector(".image-zoom__text");
    }

    open(imageSrc, imageAlt){
        this._popupImage.src = imageSrc;
        this._popupImage.alt = imageAlt;
        this._imageLegend.textContent = `Imagen de ${imageAlt}`;
        this.popupSelector.classList.remove("image-zoom_opened");
        document.removeEventListener("keydown", this._handleEscClose);
        document.addEventListener("keydown", this._handleEscClose)
    }

    close(){
        if (this.popupSelector) {
            this.popupSelector.classList.add("image-zoom_opened");
        }
        document.removeEventListener("keydown", this._handleEscClose)
    }
    
}
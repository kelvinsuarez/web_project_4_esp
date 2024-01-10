import Popup from "./Popup.js"
export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this.popupImage = this.popupSelector.querySelector(".image-zoom__container");
        this.imageLegend = this.popupSelector.querySelector(".image-zoom__text");
    }

    open(imageSrc, imageAlt){
        this.popupImage.src = imageSrc;
        this.popupImage.alt = imageAlt;
        this.imageLegend.textContent = `Imagen de ${imageAlt}`
        super.open();
    }
}
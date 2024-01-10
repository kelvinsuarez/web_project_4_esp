import PopupWithImage from "./PopupWithImage.js"
const popupWithImage = new PopupWithImage("#image-zoom_container");

export default class Card {
  constructor(data, cardElement, popup) {
    this._cardData = data;
    this._cardElement = cardElement ;
    this._popup = popup;
  }

  _createCardElement() {
    const cardElement = document
    .querySelector(this._cardElement)
    .content
    .querySelector(".cards__element")
    .cloneNode(true);
   return cardElement;
  }

  _setEventListeners(createCard) {
    const like = createCard.querySelector(".cards__element-like");
    like.addEventListener("click", (evt) =>{
      const likeElement = evt.currentTarget.querySelector(".cards__element-like-black");
      likeElement.classList.toggle("cards__element-like-black_on");
    });

    const viewImage = createCard.querySelector(".cards__element-pic");
    viewImage.addEventListener("click", () => this._handleImageClick());

    const trash = createCard.querySelector(".cards__element-trash");
    trash.addEventListener("click", (evt) =>{
      let cardElement = evt.currentTarget.closest(".cards__element");
      cardElement.remove();
    })
  }

  _handleImageClick() {
    const srcValue = this._cardData.link;
    popupWithImage.open(srcValue, this._cardData.name);
    /*const srcValue = this._cardData.link;
    const picZoom = this._popup.querySelector(".image-zoom__container");
    picZoom.src= srcValue;
    this._popup.classList.add("image-zoom_opened");
    const legend = this._popup.querySelector(".image-zoom__text");
    legend.textContent = `Imagen de ${this._cardData.name}`*/
  }


  generateCard(){
    const createCard = this._createCardElement()
    this._setEventListeners(createCard)
    const elementImage = createCard.querySelector(".cards__element-pic")
    elementImage.src = this._cardData.link;
    const elementText=  createCard.querySelector(".cards__element-text-container")
    elementText.querySelector(".cards__element-text").textContent = this._cardData.name;
    elementImage.alt = this._cardData.name
    
    return createCard
  }
}
import PopupWithImage from "./PopupWithImage.js";
import { popupConfirmation } from "../utils/constants.js";

export default class Card {
  constructor({name, link}) {
    this._cardname = name;
    this._cardlink = link;
    this._popupWhitImage = new PopupWithImage(".image-zoom");
  }

  _createCardElement() {
    const cardElement = document
    .querySelector("#cards-template")
    .content
    .querySelector(".cards__element")
    .cloneNode(true);
   return cardElement;
  }

  _setEventListeners(createCard) {
    const like = createCard.querySelector(".cards__element-like");
    const likeCounter = createCard.querySelector(".cards__element-like-counter");
    like.addEventListener("click", (evt) =>{
      const likeElement = evt.currentTarget.querySelector(".cards__element-like-black");
      likeElement.classList.toggle("cards__element-like-black_on");
      likeCounter.textContent = Number(likeCounter.textContent) + 1
    });

    const viewImage = createCard.querySelector(".cards__element-pic");
    viewImage.addEventListener("click", () => this._handleImageClick());

    const trash = createCard.querySelector(".cards__element-trash");
    trash.addEventListener("click", (evt) =>{
      const cardElement = evt.currentTarget.closest(".cards__element-trash");
      if (cardElement){
        if (popupConfirmation.classList.contains("popup-confirmation-opened")){
          popupConfirmation.classList.remove("popup-confirmation-opened");
          const deleteCard = document.querySelector(".popup-confirmation__button-delete");
          deleteCard.addEventListener("click", () => {
            cardElement.closest(".cards__element").remove();
            popupConfirmation.classList.add("popup-confirmation-opened")
          })
        }
      }
    })
  }

  _handleImageClick() {
    this._popupWhitImage.open(this._cardlink, this._cardname);
  }

  generateCard(){
    const createCard = this._createCardElement()
    this._setEventListeners(createCard)
    const elementImage = createCard.querySelector(".cards__element-pic")
    elementImage.src = this._cardlink;
    const elementText=  createCard.querySelector(".cards__element-text-container")
    elementText.querySelector(".cards__element-text").textContent = this._cardname;
    elementImage.alt = this._cardname
    return createCard
  }

}
import PopupWithImage from "./PopupWithImage.js";
import { popupConfirmation } from "../utils/constants.js";

export default class Card {
  constructor({name, link, _id, canBeDelete, likes},
    {api, popupConfirmation}, userId) {
    this._cardname = name;
    this._cardlink = link;
    this._id = _id;
    this._canBeDelete = canBeDelete;
    this._likes = likes;
    this._api = api;
    this._userId = userId
    this._popupConfirmation = popupConfirmation;
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

  _deleteCard(){
    
    console.log(this._id);
    this.element.setAttribute("data-id", this._id);
    this._api.deleteCardFromServer(this._id).then(() =>{
      this.element.remove();
    }).catch((err) =>{
      console.log(err);
    })
  }


  _setEventListeners() {
    const like = this.element.querySelector(".cards__element-like");
    const likeCounter = this.element.querySelector(".cards__element-like-counter");
    like.addEventListener("click", (evt) =>{
      const likeElement = evt.currentTarget.querySelector(".cards__element-like-black");
      likeElement.classList.toggle("cards__element-like-black_on");
      likeCounter.textContent = Number(likeCounter.textContent) + 1
    });

    const viewImage = this.element.querySelector(".cards__element-pic");
    viewImage.addEventListener("click", () => this._handleImageClick());

    const trash = this.element.querySelector(".cards__element-trash");
    if (this._canBeDelete) {
      trash.addEventListener("click", (evt) =>{
        const cardElement = evt.currentTarget.closest(".cards__element-trash");
        if (cardElement){
          if (popupConfirmation.classList.contains("popup-confirmation-opened")){
            popupConfirmation.classList.remove("popup-confirmation-opened");
            const deleteCard = document.querySelector(".popup-confirmation__button-delete");
            deleteCard.addEventListener("click", () => {
              this._deleteCard()
              cardElement.closest(".cards__element").remove();
              popupConfirmation.classList.add("popup-confirmation-opened")
            })
          }
        }
      })
    } else {
      trash.style.display = "none";
    }
  }

  _handleImageClick() {
    this._popupWhitImage.open(this._cardlink, this._cardname);
  }

  generateCard(){
    this.element = this._createCardElement()
    this._setEventListeners(this.element)
    const elementImage = this.element.querySelector(".cards__element-pic")
    elementImage.src = this._cardlink;
    const elementText=  this.element.querySelector(".cards__element-text-container")
    elementText.querySelector(".cards__element-text").textContent = this._cardname;
    elementImage.alt = this._cardname;
    this.element.setAttribute("data-id", this._id)
    return this.element
  }

}
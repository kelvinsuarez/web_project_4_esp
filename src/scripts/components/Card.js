import PopupWithImage from "./PopupWithImage.js";

export default class Card {
  constructor({name, link, _id, canBeDelete, likes},
    {api, popupConfirmation}, userId) {
    this._cardname = name;
    this._cardlink = link;
    this._id = _id;
    this._canBeDelete = canBeDelete;
    this._likes = Array.isArray(likes) ? likes : [];
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
    this._popupConfirmation.loadingAction(true);
    console.log(this._id);
    this._api.deleteCardFromServer(this._id).then(() =>{
      this.element.remove();
      this._popupConfirmation.close();
    }).catch((err) =>{
      console.log(err);
    })
    .finally(() => {
      this._popupConfirmation.loadingAction(false);
    })
  }

  async _likeIconToServer() {
    // this.buttonLike.classList.toggle("cards__element-like-black_on");
    try {
      if (
        this.buttonLikeBlack.classList.contains(
          "cards__element-like-black_on"
        )
      ) {
        const result = await this._api.showLikeFromCard(this._id);
        this.buttonLikeBlack.classList.remove("cards__element-like-black_on");
        this.likeCounter.textContent = result.likes.length;
        this.likeCounter.style.display = "flex";
      } else {
        const resultDelete = await this._api.deleteLikeFromCard(this._id);
        this.buttonLikeBlack.classList.add("cards__element-like-black_on");
        this.likeCounter.textContent = resultDelete.likes.length;
      }
    } catch (err) {
      console.log(err);
    }
  }

  _setEventListeners() {
    this.buttonLike.addEventListener("click", () =>{
      console.log(this.buttonLikeBlack)
      if (this.likeCounter < 1) {
        console.log(this.likeCounter)
        this.likeCounter.style.display = "none";
      }
       this._likeIconToServer()
    });

    const viewImage = this.element.querySelector(".cards__element-pic");
    viewImage.addEventListener("click", () => this._handleImageClick());

    const trash = this.element.querySelector(".cards__element-trash");
    if (this._canBeDelete) {
      trash.addEventListener("click", () => {
        this._popupConfirmation.open(this._deleteCard.bind(this));
      })
    } else {
      trash.style.display = "none";
    }
  }

  _handleImageClick() {
    this._popupWhitImage.open(this._cardlink, this._cardname);
  }

  generateCard(){
    this.element = this._createCardElement();
    const elementImage = this.element.querySelector(".cards__element-pic")
    elementImage.src = this._cardlink;
    const elementText=  this.element.querySelector(".cards__element-text-container")
    elementText.querySelector(".cards__element-text").textContent = this._cardname;
    elementImage.alt = this._cardname;
    this.buttonLike = this.element.querySelector(".cards__element-like");
    this.buttonLikeBlack = this.buttonLike.querySelector(".cards__element-like-black");
    this.likeCounter = this.element.querySelector(".cards__element-like-counter");
    this.likeCounter.textContent = this._likes.length;

    if (this.likeCounter.textContent === "0") {
      this.likeCounter.style.display = "none";
    } else {
      const myLike = this._likes.find((evt) => {
        return evt._id === this._userId;
      });
      if  (myLike) {
        this.buttonLikeBlack.classList.remove("cards__element-like-black_on")
      }
    }

    this._setEventListeners(this.element)
    this.element.setAttribute("data-id", this._id)
    return this.element
  }

}
export default class Card {
  constructor(data, cardElement) {
    this._cardData = data;
    this._cardElement = cardElement ;
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
    viewImage.addEventListener("click", (evt) =>{
      const clickedPic = evt.currentTarget; 
      const srcValue = clickedPic.getAttribute("src");
      const picZoom =document.querySelector(".image-zoom__container");
      picZoom.src= srcValue;
      this.openZoomImage();
    });

    const trash = createCard.querySelector(".cards__element-trash");
    trash.addEventListener("click", (evt) =>{
      let cardElement = evt.currentTarget.closest(".cards__element");
      cardElement.remove();
    })
  }

  generateCard(){
    const createCard = this._createCardElement()
    this._setEventListeners(createCard)
    const elementImage = createCard.querySelector(".cards__element-pic")
    elementImage.src = this._cardData.link;
    const elementText=  createCard.querySelector(".cards__element-text-container")
    elementText.querySelector(".cards__element-text").textContent = this._cardData.name;
    elementImage.alt = this._cardData.name
    const imageLegend = document.querySelector(".image-zoom__text");
    imageLegend.textContent = this._cardData.name
    return createCard
  }

  openZoomImage() {
    const zoomImage = document.querySelector("#image-zoom_container");
    zoomImage.classList.remove("image-zoom_opened");
  }
}
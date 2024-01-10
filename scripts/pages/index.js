import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import agregarEventListeners from "../utils/utils.js";
import { cerrarImagenClickOut } from "../utils/utils.js";
import { onClosePopupPlaceClick } from "../utils/utils.js";
import PopupWithImage from "../components/PopupWithImage.js";

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  }
];

const popupWithImage = new PopupWithImage("#image-zoom_container");
console.log (popupWithImage)

const cardListSelector = ".cards";

const cardList = new Section ({ 
  items: initialCards,
    renderer: () =>{
      this._initialArray.forEach(data =>{
        const card = new Card(data, "#cards-template", popupWithImage);
        const cardElement = card.generateCard();
        cardList.setItem(cardElement)
      });
    }
  },
  cardListSelector
);

popupWithImage.setEventListeners();

//cerrar imagen
const zoomImage = document.querySelector("#image-zoom_container");
const closeImage = document.querySelectorAll(".image-zoom__icon-close");
closeImage.forEach(function(closeZoom){
  closeZoom.addEventListener("click", () => popupWithImage.close());
})


cerrarImagenClickOut()


//funcion para cerrar las imagenes
function closeZoomImage() {
  popupWithImage.close();
}

 // Función para agregar una nueva tarjeta
function addCard(cardData) {
  const newCard = new Card(cardData, "#cards-template", popupWithImage);
  const cardContainer = document.querySelector(".cards");
  cardContainer.prepend(newCard.generateCard());
}

//funcion para agregar lugar
export function handledAddPlaceFormSubmit (evt){
  evt.preventDefault();
  const titleValue = document.querySelector(".popup-place__imput-text_title").value;
  const picValue = document.querySelector(".popup-place__imput-text_image").value;
  const newCard = {
    name : titleValue,
    link : picValue
  }
  initialCards.unshift(newCard);
  onClosePopupPlaceClick();
  addCard(newCard)
}

//Funcion para inicializar las 6 cartas y manter las funciones dentro de ellas
export default function init(){
  initialCards.forEach(card => {
    addCard(card);
  });
}

// Crear instancias para validadores de popupProfile y popupPlace
const validateProfile = new FormValidator(document.querySelector("#form"));
const validatePlace = new FormValidator(document.querySelector("#popup-place_container .form__popup"));



agregarEventListeners()








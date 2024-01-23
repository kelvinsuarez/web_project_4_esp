import Card from "./Card.js"
import FormValidator from "./FormValidator.js"
import agregarEventListeners from "./utils.js";
import { cerrarImagenClickOut } from "./utils.js";
import { onClosePopupPlaceClick } from "./utils.js";

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

//cerrar imagen
const zoomImage = document.querySelector("#image-zoom_container");
const closeImage = document.querySelectorAll(".image-zoom__icon-close");
closeImage.forEach(function(closeZoom){
  closeZoom.addEventListener("click", closeZoomImage);
})


cerrarImagenClickOut()


//funcion para cerrar las imagenes
function closeZoomImage() {
  zoomImage.classList.add("image-zoom_opened");
}

 // Función para agregar una nueva tarjeta
  function addCard(cardData) {
  const newCard = new Card(cardData, "#cards-template");
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








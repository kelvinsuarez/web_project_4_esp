import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import agregarEventListeners from "../utils/utils.js";
import { cerrarImagenClickOut } from "../utils/utils.js";
import { onClosePopupPlaceClick } from "../utils/utils.js";
import Section from "../components/Section.js";
import { 
  initialCards,
  cardListSelector,
  zoomImage,
  closeImage,
 } from "../utils/constants.js";



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

//cerrar imagen
closeImage.forEach(function(closeZoom){
  closeZoom.addEventListener("click", closeZoomImage);
})


cerrarImagenClickOut();


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



agregarEventListeners();








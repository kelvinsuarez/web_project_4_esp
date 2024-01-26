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


//instancia de clase Section para renderizar las cartas
const cardList = new Section ({ 
  items: initialCards,
    renderer: (cardItem) =>{
        const card = new Card(cardItem, "#cards-template");
        const cardElement = card.generateCard();
        cardList.setItem(cardElement);
    },
  },
  cardListSelector
);


//funcion para agregar lugar
export function handledAddPlaceFormSubmit (evt){
  evt.preventDefault();
  const titleValue = document.querySelector(".popup-place__imput-text_title").value;
  const picValue = document.querySelector(".popup-place__imput-text_image").value;
  const newCard = new Card( {
    name : titleValue,
    link : picValue
  },"#cards-template")
  
  cardList.setItem(newCard.generateCard());
  onClosePopupPlaceClick();
}

//Funcion para inicializar las 6 cartas y manter las funciones dentro de ellas
export default function init(){
  cardList.renderer();
}

// Crear instancias para validadores de popupProfile y popupPlace
const validateProfile = new FormValidator(document.querySelector("#form"));
const validatePlace = new FormValidator(document.querySelector("#popup-place_container .form__popup"));

//cerrar imagen
closeImage.forEach(function(closeZoom){
  closeZoom.addEventListener("click", closeZoomImage);
})


cerrarImagenClickOut();


//funcion para cerrar las imagenes
function closeZoomImage() {
  zoomImage.classList.add("image-zoom_opened");
}



agregarEventListeners();








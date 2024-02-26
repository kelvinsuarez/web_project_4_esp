import "./styles/index.css"
import Card from "./scripts/components/Card.js"
import FormValidator from "./scripts/components/FormValidator.js"
import agregarEventListeners from "./scripts/utils/utils.js";
import { onClosePopupPlaceClick } from "./scripts/utils/utils.js";
import Section from "./scripts/components/Section.js";
import Api from "./scripts/components/Api.js";
import { 
  initialCards,
  cardListSelector,
  settingElement,
  apiKey,
 } from "./scripts/utils/constants.js";


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
export function handledAddPlaceFormSubmit() {
  
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

// Array de instacias de FormValidator
const formList = Array.from(document.querySelectorAll(".form__popup"));
formList.forEach((formElement)=> {
  const formValidator = new FormValidator (settingElement,formElement);
  formValidator.enableValidation();
});
agregarEventListeners();


const api = new Api (apiKey);
api.getUserInfoFronServer();
api.getCards();




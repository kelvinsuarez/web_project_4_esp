import "./styles/index.css"
import Card from "./scripts/components/Card.js"
import FormValidator from "./scripts/components/FormValidator.js"
import agregarEventListeners from "./scripts/utils/utils.js";
import { 
  userInfo,
  api,
  popupConfirmation,
 } from "./scripts/utils/utils.js";
import Section from "./scripts/components/Section.js";
import { 
  cardListSelector,
  settingElement,
 } from "./scripts/utils/constants.js";


//instancia de clase Section para renderizar las cartas
let cardList;
async function initializePage(){
  const getCards = await api.getCards();
  const userInfoFronServer= await api.getUserInfoFronServer();
  const userId = userInfoFronServer._id;

  cardList = new Section ({ 
    items: getCards.map((card) =>{
      const canBeDelete = card.owner._id == userId;
      return {
        name: card.name,
        link: card.link,
        _id: card._id,
        canBeDelete: canBeDelete,
        likes: card.likes,
      };
    }),
      renderer: (cardItem) =>{
          const card = new Card(cardItem,{api, popupConfirmation}, userId);
          const cardElement = card.generateCard();
          cardList.setItem(cardElement);
      },
    },
    cardListSelector
  );
  cardList.renderer();
};


//funcion cargar los datos del servidor
async function infoProfile(userInfoFronServer){
  userInfo.setUserInfo({
    name: userInfoFronServer.name,
    job: userInfoFronServer.about,
    avatar: userInfoFronServer.avatar
  })
}

//Funcion para inicializar las 6 cartas y manter las funciones dentro de ellas
export default async function init(){
  const userInfoFronServer = await api.getUserInfoFronServer();
  initializePage();
  infoProfile(userInfoFronServer);
}

// Array de instacias de FormValidator
const formList = Array.from(document.querySelectorAll(".form-popup"));
formList.forEach((formElement)=> {
  const formValidator = new FormValidator (settingElement,formElement);
  formValidator.enableValidation();
});
agregarEventListeners();


// const getCards = await api.getCards();
// // const userInfoFronServer= await api.getUserInfoFronServer();
// // const userId = userInfoFronServer._id
// console.log(getCards)





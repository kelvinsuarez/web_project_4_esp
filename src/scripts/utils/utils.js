// import { handledAddPlaceFormSubmit } from "../../index.js";
import init from "../../index.js";
import Card from "../components/Card.js";
import {popup,
  popupPlace,
  closeImageOut,
  editProfileButton,
  closeProfileButton,
  addCardButton,
  closePlaceButton,
  editProfileImage,
  closeProfileImage,
  closeImage,
  inputName,
  inputAcerca,
  inputProfilePic,
  buttonSaveNewProfileImage,
  cardListSelector,
  apiKey,
  settingElement,
} from "../utils/constants.js"
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupConfirmation from "../components/PopupConfirmation.js";
import PopupAvatarForm from "../components/PopupAvatarForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";


//intancia de Useriinfo
export const userInfo = new UserInfo ({
  dataName: ".profile__title",
  dataJob: ".profile__subtitle",
  dataPic: ".profile__image",
})

//instancia de Api
export const api = new Api (apiKey)

//instancia de Popup
export const popupEdit = new Popup ("#popup_container");

//instancia de PopupWithImage
const popupWithImage = new PopupWithImage("#image-zoom_container");

//instancia de PopupConfirmation
export const popupConfirmation = new PopupConfirmation();

//instancias de PopupWithForm
export const popupFormProfile = new PopupWithForm ("#popup_container", handleProfileFormSubmit);
const popupFormAddCard = new PopupWithForm ("#popup-place_container", handledAddPlaceFormSubmit);
const popupFormProfileImage = new PopupWithForm ("#popup-image-profile_container", handleImageProfileFormSubmit);

//instancia de PopupAvatarForm
const popupAvatarForm = new PopupAvatarForm();


// controlador del boton editar perfil
function onEditButtonClick(){
  popupFormProfile.open()
}
// controlador del boton cerrar editar perfil
function onClosePopupClick(){
  popup.classList.add("popup-opened");
}

//funcion para editar perfil
async function handleProfileFormSubmit() {
  // Utiliza la instancia de UserInfo para actualizar la información del usuario
  userInfo.setUserInfo({
    name: inputName.value,
    job: inputAcerca.value,
  });

  try {
    popupFormProfile.loadingAction(true);
    const res = await api.saveDataToServer(inputName.value, inputAcerca.value);
    return res;
  }catch (err) {
    console.log(err);
  } finally {
    popupFormProfile.loadingAction(false);
    popupEdit.close();
  }
}

// controlador del boton agregar lugar
function onAddButtonClick(){
  popupFormAddCard.open()
}
// controlador del boton cerrar agregar lugar
export function onClosePopupPlaceClick(){
  popupFormAddCard.close();
}

//funcion para agregar lugar
async function handledAddPlaceFormSubmit() {
  
  const titleValue = document.querySelector(".popup-place__imput-text_title").value;
  const picValue = document.querySelector(".popup-place__imput-text_image").value;

  const dataNewCard = {name: titleValue, link: picValue};

  try {
    popupFormAddCard.loadingAction(true);
    const response = await api.addNewCardToServer(titleValue, picValue);
    dataNewCard.canBeDelete = true;
    dataNewCard._id = response._id;
    const newCard = new Card(dataNewCard, {api, popupConfirmation}).generateCard();
    const cardListContainer = document.querySelector(cardListSelector)
    cardListContainer.prepend(newCard);
    
    document.querySelector(".popup-place__imput-text_title").value = "";
    document.querySelector(".popup-place__imput-text_image").value = "";
  } catch (err){
    console.log(err);
    alert("Se ha producido un error")
  } finally {
    popupFormAddCard.loadingAction(false);
    onClosePopupPlaceClick();
  }
}

//funcion para cambiar imagen de perfil
async function handleImageProfileFormSubmit(){
  popupAvatarForm.loadingAction(true);
  
  const newAvatarUrl = inputProfilePic.value;
  await  api
  .updateImageProfile(newAvatarUrl)
  .then((res) => {
    userInfo.setUserInfo({avatar: newAvatarUrl});
    popupAvatarForm.close();
    return res;
  })
  .then(() => {
    inputProfilePic.value = "";
  })
  .catch((err) => {
      console.log(err);
  })
  .finally(() => {
    popupAvatarForm.loadingAction(false);
    enableButtonProfileImage();
  });
}

function enableButtonProfileImage() {
  buttonSaveNewProfileImage.classList.add(settingElement.buttonSaveOff);
  buttonSaveNewProfileImage.setAttribute("disabled", true);
}

// controlador del boton editar foto de perfil
function onEditPicProfileButtonClick(){
  popupFormProfileImage.open();
}

// controlador del boton cerrar editar foto de perfil
function onClosePicProfileClick(){
  popupFormProfileImage.close();
}

export default function agregarEventListeners() {

  //manipuladores de eventos para abrir y cerrar editar perfil
  editProfileButton.addEventListener("click", onEditButtonClick);
  closeProfileButton.addEventListener("click", onClosePopupClick);
  popup.addEventListener("click", function(evt){
    if (evt.target === popup){
      onClosePopupClick();
    }
  });
  //manipuladores de eventos para abrir y cerrar addPlace
  addCardButton.addEventListener("click", onAddButtonClick);
  closePlaceButton.addEventListener("click", onClosePopupPlaceClick);
  popupPlace.addEventListener("click", function(evt){
    if (evt.target === popupPlace){
      onClosePopupPlaceClick();
    }
  });
  
  //manipuladores de eventos para abrir y cerrar cambiar imagen de perfil
  editProfileImage.addEventListener("click", onEditPicProfileButtonClick);
  closeProfileImage.addEventListener("click", onClosePicProfileClick);

 //manipuladores de eventos para cerrar las imagenes agrandadas
  closeImage.forEach(function(closeZoom){
    closeZoom.addEventListener("click", () =>{
      popupWithImage.close()
    });
  })
  closeImageOut.forEach(function (zoomImage) {
    zoomImage.addEventListener("click", function (event) {
      if (event.target === zoomImage) {
        popupWithImage.close()
      }
    });
  });

  // manipulador de evento para enviar nueva imagen de perfil
  buttonSaveNewProfileImage.addEventListener("click", handleImageProfileFormSubmit)


  // Conecta el manipulador de eventos enviar
  popupFormProfile.setEventListeners()

  popupFormAddCard.setEventListeners()

  popupFormProfileImage.setEventListeners()
  //controlador de eventos para inicializar las 6 cartas
  document.addEventListener("DOMContentLoaded", init);
}


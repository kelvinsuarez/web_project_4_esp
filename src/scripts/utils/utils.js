import { handledAddPlaceFormSubmit } from "../../index.js";
import init from "../../index.js";
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
  popupConfirmation,
  inputName,
  inputAcerca,
  inputProfilePic,
} from "../utils/constants.js"
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";


//intancia de Useriinfo
const userInfo = new UserInfo ({
  dataName: ".profile__title",
  dataJob: ".profile__subtitle",
  dataPic: ".profile__image",
})

console.log(userInfo._dataPic)
//instancia de Popup
export const popupEdit = new Popup ("#popup_container");

//istancia de PopupWithImage
const popupWithImage = new PopupWithImage("#image-zoom_container");

//instancias de PopupWithForm
const popupFormProfile = new PopupWithForm ("#popup_container", handleProfileFormSubmit);
const popupFormAddCard = new PopupWithForm ("#popup-place_container", handledAddPlaceFormSubmit);
const popupFormProfileImage = new PopupWithForm ("#popup-image-profile_container", handleImageProfileFormSubmit)


// controlador del boton editar perfil
function onEditButtonClick(){
  popupFormProfile.open()
}
// controlador del boton cerrar editar perfil
function onClosePopupClick(){
  popup.classList.add("popup-opened");
}

//funcion para editar perfil
function handleProfileFormSubmit() {
  // Utiliza la instancia de UserInfo para actualizar la información del usuario
  userInfo.setUserInfo({
    name: inputName.value,
    job: inputAcerca.value,
  });
  
  popupEdit.close();
}

// controlador del boton agregar lugar
function onAddButtonClick(){
  popupFormAddCard.open()
}
// controlador del boton cerrar agregar lugar
export function onClosePopupPlaceClick(){
  popupFormAddCard.close();
}

//funcion para cambiar imagen de perfil
function handleImageProfileFormSubmit(){
  userInfo.setUserInfo({
    pic: inputProfilePic.value,
  });
  popupFormProfileImage.close();
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

  //manipuladores de eventos para cerrar popup de confirmacion para borrar cartas
  const closeConfirmationDelete = document.querySelector(".popup-confirmation__icon-close");
  closeConfirmationDelete.addEventListener("click", ()=>{
    if(!popupConfirmation.classList.contains("popup-confirmation-opened")){
      popupConfirmation.classList.add("popup-confirmation-opened");
    }
  })

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


  // Conecta el manipulador de eventos enviar
  popupFormProfile.setEventListeners()

  popupFormAddCard.setEventListeners()

  popupFormProfileImage.setEventListeners()
  //controlador de eventos para inicializar las 6 cartas
  document.addEventListener("DOMContentLoaded", init);
}


import { handledAddPlaceFormSubmit } from "../pages/index.js";
import init from "../pages/index.js";
import {popup,
  popupPlace,
  zoomImage,
  closeImageOut,
  editProfileButton,
  closeProfileButton,
  closeProfile,
  addCardButton,
  closePlaceButton
} from "../utils/constants.js"
import Popup from "../components/Popup.js";


//instanca de Popup
const popupEditProfile = new Popup ("#popup_container");


// controlador del boton agregar lugar
function onAddButtonClick(){
  popupPlace.classList.remove("popup-place_opened");
}
// controlador del boton cerrar agregar lugar
export function onClosePopupPlaceClick(){
  popupPlace.classList.add("popup-place_opened");
}


//funcion para editar perfil
function handleProfileFormSubmit(evt) {
  // Esta línea impide que el navegador entregue el formulario en su forma predeterminada.
  evt.preventDefault();
  // Busquemos los campos del formulario en el DOM
  let nameValue = popup.querySelector(".popup__imput-text_name").value;
  let jobValue = popup.querySelector(".popup__imput-text_job").value;
  let profileName= document.querySelector(".profile__title");
  let profilejob= document.querySelector(".profile__subtitle");
  profileName.innerText= nameValue;
  profilejob.innerText= jobValue;
    
  onClosePopupClick();
}


// controlador del boton editar perfil
function onEditButtonClick(){
  popup.classList.remove("popup_opened");
}
// controlador del boton cerrar editar perfil
function onClosePopupClick(){
  popup.classList.add("popup_opened");
}


export function cerrarImagenClickOut() {
  closeImageOut.forEach(function (zoomImage) {
    zoomImage.addEventListener("click", function (event) {
      if (event.target === zoomImage) {
        cerrarZoomImage(zoomImage);
      }
    });
  });
}

function cerrarZoomImage(zoomImage) {
  zoomImage.classList.add("image-zoom_opened")
}



export default function agregarEventListeners() {

  //manipuladores de eventos para abrir y cerrar editar perfil
  editProfileButton.addEventListener("click", onEditButtonClick);
  closeProfileButton.addEventListener("click", onClosePopupClick);
  closeProfile.addEventListener("click", function(evt){
    if (evt.target === closeProfile){
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

  // //manipuladores de eventos para cerrar con bonton Esc
  // document.addEventListener('keydown', (evt) => {
  //   const buscdorDeClases = Array.from(closeImageOut).some(elemento =>{
  //     return elemento.classList.contains("image-zoom");
  //   })
  //   if(evt.key == 'Escape'){
  //     if(popup.classList.contains("popup")){
  //       popup.classList.add("popup_opened")
  //     }
  //     if(popupPlace.classList.contains("popup-place")){
  //       popupPlace.classList.add("popup-place_opened")
  //     }
  //     if (buscdorDeClases){
  //       zoomImage.classList.add("image-zoom_opened")
  //     }
  //   }
  // })

  // Conecta el manipulador de eventos enviar
  popup.addEventListener('submit', handleProfileFormSubmit);

  popupPlace.addEventListener("submit", handledAddPlaceFormSubmit);


  //controlador de eventos para inicializar las 6 cartas
  document.addEventListener("DOMContentLoaded", init);
}


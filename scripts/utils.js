import { handledAddPlaceFormSubmit } from "./index.js";
import init from "./index.js";

const popup = document.querySelector("#popup_container"); 
const popupPlace = document.querySelector(".popup-place");
const closeImageOut = document.querySelectorAll(".image-zoom");
const zoomImage = document.querySelector("#image-zoom_container");


// controlador del boton agregar lugar
function onAddButtonClick(){
  togglePopupPlaceVisility();
}
// controlador del boton cerrar agregar lugar
export function onClosePopupPlaceClick(){
  popupPlace.style.animation = 'fadeout 0.5s ease';
  //agregando animacion para el cierre de popupPlace
  popupPlace.addEventListener('animationend', function onAnimationEnd() {
    popupPlace.style.animation = '';
    togglePopupPlaceVisility();
    popupPlace.removeEventListener('animationend', onAnimationEnd);
  });
}
function togglePopupPlaceVisility(){
  popupPlace.classList.toggle("popup-place_opened");
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
  togglePopupVisility();
}
// controlador del boton cerrar editar perfil
function onClosePopupClick(){
  popup.style.animation = 'fadeout 0.5s ease';
  //agregando animacion para el cierre de popup
  popup.addEventListener('animationend', function onAnimationEnd() {
    popup.style.animation = '';
    togglePopupVisility();
    popup.removeEventListener('animationend', onAnimationEnd);
  });
}
function togglePopupVisility(){
  popup.classList.toggle("popup_opened");
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
  zoomImage.style.animation = 'fadeout 0.5s ease';
  // Agregando animación al cierre de imágenes
  zoomImage.addEventListener('animationend', function onAnimationEnd() {
    zoomImage.style.animation = ''; // Restablecer la animación después de que termine
    zoomImage.classList.remove("image-zoom_opened");
    zoomImage.removeEventListener('animationend', onAnimationEnd);
  });
}



export default function agregarEventListeners() {
  const editButton = document.querySelector(".profile__edit-button-square");
  const closeProfileButton = document.querySelector(".popup__icon-close");
  const closeProfile = document.querySelector(".popup");
  const addButton = document.querySelector(".profile__add-button");
  const closePlaceButton = document.querySelector(".popup-place__icon-close");
  const closeImageOut = document.querySelectorAll(".image-zoom");

  //manipuladores de eventos para abrir y cerrar editar perfil
  editButton.addEventListener("click", onEditButtonClick);
  closeProfileButton.addEventListener("click", onClosePopupClick);
  closeProfile.addEventListener("click", function(evt){
    if (evt.target === closeProfile){
      popup.style.animation = 'fadeout 0.5s ease';
      popup.addEventListener('animationend', function onAnimationEnd() {
        popup.style.animation = '';
        togglePopupVisility();
        popup.removeEventListener('animationend', onAnimationEnd);
      });
    }
  });
  //manipuladores de eventos para abrir y cerrar addPlace
  addButton.addEventListener("click", onAddButtonClick);
  closePlaceButton.addEventListener("click", onClosePopupPlaceClick);
  popupPlace.addEventListener("click", function(evt){
    if (evt.target === popupPlace){
      popupPlace.style.animation = 'fadeout 0.5s ease';
      popupPlace.addEventListener('animationend', function onAnimationEnd() {
        popupPlace.style.animation = '';
        togglePopupPlaceVisility();
        popupPlace.removeEventListener('animationend', onAnimationEnd);
      });
    }
  });

  //manipuladores de eventos para cerrar con bonton Esc
  document.addEventListener('keydown', (evt) => {
    const buscdorDeClases = Array.from(closeImageOut).some(elemento =>{
      return elemento.classList.contains("image-zoom_opened");
    })
    if(evt.key == 'Escape'){
      if(popup.classList.contains("popup_opened")){
        popup.style.animation = 'fadeout 0.5s ease';
        popup.addEventListener('animationend', function onAnimationEnd() {
          popup.style.animation = '';
          togglePopupVisility();
          popup.removeEventListener('animationend', onAnimationEnd);
        });
      }else if(popupPlace.classList.contains("popup-place_opened")){
        popupPlace.style.animation = 'fadeout 0.5s ease';
        popupPlace.addEventListener('animationend', function onAnimationEnd() {
          popupPlace.style.animation = '';
          togglePopupPlaceVisility();
          popupPlace.removeEventListener('animationend', onAnimationEnd);
        });
      }else if (buscdorDeClases){
        cerrarZoomImage(zoomImage)
      }
    }
  })

  // Conecta el manipulador de eventos enviar
  popup.addEventListener('submit', handleProfileFormSubmit);

  popupPlace.addEventListener("submit", handledAddPlaceFormSubmit);


  //controlador de eventos para inicializar las 6 cartas
  document.addEventListener("DOMContentLoaded", init);
}


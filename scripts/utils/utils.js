import { handledAddPlaceFormSubmit } from "../pages/index.js";
import init from "../pages/index.js";
import {
  popup,
  popupPlace,
  closeImageOut,
  editProfileButton,
  closeProfileButton,
  closeProfile,
  addCardButton,
  closePlaceButton,
  closeImage,
} from "../utils/constants.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";

//instancia de Popup
const popupEdit = new Popup("#popup_container");

//istancia de PopupWithImage
const popupWithImage = new PopupWithImage("#image-zoom_container");

//instancias de PopupWithForm
const popupFormProfile = new PopupWithForm(
  "#popup_container",
  handleProfileFormSubmit()
);
const popupFormAddCard = new PopupWithForm(
  "#popup-place_container",
  handledAddPlaceFormSubmit
);

console.log(popupFormAddCard);
console.log(popupFormAddCard._submitInfo);

// controlador del boton editar perfil
function onEditButtonClick() {
  popupFormProfile.open();
}
// controlador del boton cerrar editar perfil
function onClosePopupClick() {
  popup.classList.add("popup_opened");
}

//funcion para editar perfil
function handleProfileFormSubmit() {
  // Busquemos los campos del formulario en el DOM
  let nameValue = popup.querySelector(".popup__imput-text_name").value;
  let jobValue = popup.querySelector(".popup__imput-text_job").value;
  let profileName = document.querySelector(".profile__title");
  let profilejob = document.querySelector(".profile__subtitle");
  profileName.innerText = nameValue;
  profilejob.innerText = jobValue;

  popupEdit.close();
}

// controlador del boton agregar lugar
function onAddButtonClick() {
  popupFormAddCard.open();
}
// controlador del boton cerrar agregar lugar
export function onClosePopupPlaceClick() {
  popupFormAddCard.close();
}

export default function agregarEventListeners() {
  //manipuladores de eventos para abrir y cerrar editar perfil
  editProfileButton.addEventListener("click", onEditButtonClick);
  closeProfileButton.addEventListener("click", onClosePopupClick);
  closeProfile.addEventListener("click", function (evt) {
    if (evt.target === closeProfile) {
      onClosePopupClick();
    }
  });
  //manipuladores de eventos para abrir y cerrar addPlace
  addCardButton.addEventListener("click", onAddButtonClick);
  closePlaceButton.addEventListener("click", onClosePopupPlaceClick);
  popupPlace.addEventListener("click", function (evt) {
    if (evt.target === popupPlace) {
      onClosePopupPlaceClick();
    }
  });
  //manipuladores de eventos para cerrar las imagenes agrandadas
  closeImage.forEach(function (closeZoom) {
    closeZoom.addEventListener("click", () => {
      popupWithImage.close();
    });
  });
  closeImageOut.forEach(function (zoomImage) {
    zoomImage.addEventListener("click", function (event) {
      if (event.target === zoomImage) {
        popupWithImage.close();
      }
    });
  });

  // Conecta el manipulador de eventos enviar
  popupFormProfile.setEventListeners();

  popupFormAddCard.setEventListeners();

  //controlador de eventos para inicializar las 6 cartas
  document.addEventListener("DOMContentLoaded", init);
}

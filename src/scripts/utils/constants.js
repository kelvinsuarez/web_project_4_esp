//datos de la cartas iniciales
export const initialCards = [
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

//ventanas modales
export const popup = document.querySelector("#popup_container"); 
export const popupPlace = document.querySelector(".popup-place");
export const zoomImage = document.querySelector("#image-zoom_container");

//botones cerrar ventanas modales
export const closeImageOut = document.querySelectorAll(".image-zoom");
export const closeImage = document.querySelectorAll(".image-zoom__icon-close");
export const closeProfileButton = document.querySelector(".popup__icon-close");
export const closePlaceButton = document.querySelector(".popup-place__icon-close");

 //botones para los manejadores de eventos de click para abrir ventanas modales
 export const editProfileButton = document.querySelector(".profile__edit-button-square");
 export const closeProfile = document.querySelector(".popup");
 export const addCardButton = document.querySelector(".profile__add-button");
 
 // selector de contenedor de cartas
 export const cardListSelector = ".cards";

 //constante para validador de formulario
 export const settingElement = {
    inputSelector: ".form__imput-text",
    submitButtonSelector: ".popup-save",
    buttonSaveOff: "popup__button-save-off",
    inputErrorClass: "form__input-text_type_error",
    errorClass: "form__input-show-error",
};

//constantes de los datos de perfirl
export const inputName = document.querySelector("#nombre");
export const inputAcerca = document.querySelector("#acerca");

export const apiKey = "ddd525c3-4e22-45dd-b59e-e1d482e580b4"
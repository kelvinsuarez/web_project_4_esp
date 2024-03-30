//ventanas modales
export const popup = document.querySelector("#popup_container"); 
export const popupPlace = document.querySelector(".popup-place");
export const zoomImage = document.querySelector("#image-zoom_container");
// export const popupConfirmation = document.querySelector(".popup-confirmation")

//botones cerrar ventanas modales
export const closeImageOut = document.querySelectorAll(".image-zoom");
export const closeImage = document.querySelectorAll(".image-zoom__icon-close");
export const closeProfileButton = document.querySelector(".popup__icon-close");
export const closePlaceButton = document.querySelector(".popup-place__icon-close");
export const closeProfileImage = document.querySelector(".popup-image-profile__icon-close")

 //botones para los manejadores de eventos de click para abrir ventanas modales
 export const editProfileButton = document.querySelector(".profile__edit-button-square");
 export const addCardButton = document.querySelector(".profile__add-button");
 export const editProfileImage = document.querySelector(".profile__edit-image-button-vector")
 
 // selector de contenedor de cartas
 export let cardListSelector = ".cards";

 //constante para validador de formulario
 export const settingElement = {
    inputSelector: ".form-imput-text",
    submitButtonSelector: ".popup-save",
    buttonSaveOff: "popup__button-save-off",
    inputErrorClass: "form__input-text_type_error",
    errorClass: "form-input-show-error",
};

//constantes de los datos de perfirl
export const inputName = document.querySelector("#nombre");
export const inputAcerca = document.querySelector("#acerca");
export const inputProfilePic = document.querySelector("#url-profile");
export const formPopupAvatar = document.querySelector(".popup-image-profile__container");
export const buttonSaveNewProfileImage = document.querySelector(".popup-image-profile__button-save")
// export const inpuFormPopupAvatar = formPopupAvatar.querySelector("#url-profile")


export const apiKey = "ddd525c3-4e22-45dd-b59e-e1d482e580b4"
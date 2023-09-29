// array de targetas
const initialCards = [
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

// variables para la plantilla contenedora de cartas
const cardsContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector("#cards-template");
const cardElement = cardTemplate.content.cloneNode(true);
// variables para la ventana de formulario popup de perfil
const popup = document.querySelector(".popup");
const closeProfileButton = document.querySelector(".popup__icon-close");
const closeProfile = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button-square");
//variables para la ventana de formulario popup-place de agregar lugares
const popupPlace = document.querySelector(".popup-place");
const closePlaceButton = document.querySelector(".popup-place__icon-close");
const addButton = document.querySelector(".profile__add-button");

//cerrar imagen
const closeImage = document.querySelectorAll(".image-zoom__icon-close");
closeImage.forEach(function(closeZoom){
    closeZoom.addEventListener("click", closeZoomImage);
})



//funciones para validar los formularios
const showInputError = (formElement, inputElement, errorMessage) => {
    const formProfileError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("popup__input-text_type_error");
    formProfileError.textContent = errorMessage;
    formProfileError.classList.add("popup__input-show-error");
  };
  
const hideInputError = (formElement, inputElement) => {
    const formProfileError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("popup__input-text_type_error");
    formProfileError.classList.remove("popup__input-show-error");
    formProfileError.textContent = "";
  };

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement , inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add("popup__button-save-off");
        buttonElement.setAttribute("disabled", true);
    } else {
    buttonElement.classList.remove("popup__button-save-off");
    buttonElement.removeAttribute("disabled");
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".popup__imput-text"));
    const buttonElement = formElement.querySelector(".popup-save");
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            isValid(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};


const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".popup__form"));
    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement)
    });
}

enableValidation();
  
  
//*******************************************************************************


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
    const popup = document.querySelector("#popup_container");
    popup.style.animation = 'fadeout 0.5s ease';
    //agregando animacion para el cierre de popup
    popup.addEventListener('animationend', function onAnimationEnd() {
        popup.style.animation = '';
        togglePopupVisility();
        popup.removeEventListener('animationend', onAnimationEnd);
    });
}
function togglePopupVisility(){
    let popup = document.querySelector("#popup_container");
    popup.classList.toggle("popup_opened");
}


//funcion para agregar lugar
function handledAddPlaceFormSubmit (evt){
    evt.preventDefault();
    const titleValue = document.querySelector(".popup-place__imput-text_title").value;
    const picValue = document.querySelector(".popup-place__imput-text_image").value;
    const newCard = {
        name : titleValue,
        link : picValue
    }
    initialCards.unshift(newCard);
    onClosePopupPlaceClick();
    addCard(newCard)
}
// controlador del boton agregar lugar
function onAddButtonClick(){
    togglePopupPlaceVisility();
}
// controlador del boton cerrar agregar lugar
function onClosePopupPlaceClick(){
    let popupPlace = document.querySelector("#popup-place_container");
    popupPlace.style.animation = 'fadeout 0.5s ease';
    //agregando animacion para el cierre de popupPlace
    popupPlace.addEventListener('animationend', function onAnimationEnd() {
        popupPlace.style.animation = '';
        togglePopupPlaceVisility();
        popupPlace.removeEventListener('animationend', onAnimationEnd);
    });
}
function togglePopupPlaceVisility(){
    let popupPlace = document.querySelector("#popup-place_container");
    popupPlace.classList.toggle("popup-place_opened");
}



//funcion para dar like (encender el corazon negro)
function toggleLikeElement() {
    let likeElement = this.querySelector(".cards__element-like-black");
    likeElement.classList.toggle("cards__element-like-black_on");
}


//funcion para abrir las imagenes
function openZoomImage() {
    let zoomImage = document.querySelector("#image-zoom_container");
    zoomImage.classList.add("image-zoom_opened");

}
//funcion para cerrar las imagenes
function closeZoomImage() {
    let zoomImage = document.querySelector("#image-zoom_container");
    zoomImage.style.animation = 'fadeout 0.5s ease';
    //agregando animacion al cierre de imagenes
    zoomImage.addEventListener('animationend', function onAnimationEnd() {
        zoomImage.style.animation = ''; // Restablecer la animación después de que termine
        zoomImage.classList.remove("image-zoom_opened");
        zoomImage.removeEventListener('animationend', onAnimationEnd);
    });
}

//Funcion para inicializar las 6 cartas y manter las funciones dentro de ellas
function init(){
    initialCards.forEach(card => {
        addCard(card);
    });
}

//Funcion para agregar las cartas
function addCard(card){
    const cardTemplate = document.querySelector("#cards-template");
        const cardElement = cardTemplate.content.cloneNode(true);

        const cardTitle = cardElement.querySelector(".cards__element-text");
        cardTitle.textContent = card.name;
        
        const cardpic = cardElement.querySelector(".cards__element-pic");
        cardpic.src = card.link;

        const cardContainer = document.querySelector(".cards");
        cardContainer.prepend(cardElement);

        const like = document.querySelectorAll(".cards__element-like");

        // Recorrer cada div de clase "cards__element-like"
        like.forEach(function(divLike) {
            divLike.addEventListener("click", toggleLikeElement);
        });

        const viewImage = document.querySelectorAll(".cards__element-pic");
        viewImage.forEach(function(zoom){
            zoom.addEventListener("click", (evt) =>{

                const clickedPic = evt.currentTarget; 
                const srcValue = clickedPic.getAttribute("src");
                const picZoom =document.querySelector(".image-zoom__container");
                picZoom.src= srcValue;
                
                openZoomImage();
            });
        })
        
        //remover carta
        let trash = document.querySelectorAll(".cards__element-trash");
        trash.forEach(function(deleteDiv) {
            deleteDiv.addEventListener("click", function() {
                let cardElement = this.closest(".cards__element");
                cardElement.remove();
            })
        })
}



editButton.addEventListener("click", onEditButtonClick);
closeProfileButton.addEventListener("click", onClosePopupClick);
// Conecta el manipulador (handler) al formulario:
popup.addEventListener('submit', handleProfileFormSubmit);




addButton.addEventListener("click", onAddButtonClick);
closePlaceButton.addEventListener("click", onClosePopupPlaceClick);
popupPlace.addEventListener("submit", handledAddPlaceFormSubmit);


//controlador de eventos para inicializar las 6 cartas
document.addEventListener("DOMContentLoaded", init);









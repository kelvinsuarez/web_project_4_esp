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
const popup = document.querySelector("#popup_container");
const closeProfileButton = document.querySelector(".popup__icon-close");
const closeProfile = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button-square");
//variables para la ventana de formulario popup-place de agregar lugares
const popupPlace = document.querySelector(".popup-place");
const closePlaceButton = document.querySelector(".popup-place__icon-close");
const closePlace = document.querySelector(".popup-place");
const addButton = document.querySelector(".profile__add-button");

//cerrar imagen
const zoomImage = document.querySelector("#image-zoom_container");
const closeImage = document.querySelectorAll(".image-zoom__icon-close");
closeImage.forEach(function(closeZoom){
    closeZoom.addEventListener("click", closeZoomImage);
})

const closeImageOut = document.querySelectorAll(".image-zoom");

function cerrarImagenClickOut() {
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


cerrarImagenClickOut()



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



//funcion para dar like (encender el corazon negro)
function toggleLikeElement() {
    let likeElement = this.querySelector(".cards__element-like-black");
    likeElement.classList.toggle("cards__element-like-black_on");
}


//funcion para abrir las imagenes
function openZoomImage() {
    zoomImage.classList.add("image-zoom_opened");

}
//funcion para cerrar las imagenes
function closeZoomImage() {
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
closePlace.addEventListener("click", function(evt){
    if (evt.target === closePlace){
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









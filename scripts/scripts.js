import Card from "./card.js";
import FormValidator from "./validate.js";
import agregarEventListeners from "./utils.js";
import { cerrarImagenClickOut } from "./utils.js";


//cerrar imagen
const zoomImage = document.querySelector("#image-zoom_container");
const closeImage = document.querySelectorAll(".image-zoom__icon-close");
closeImage.forEach(function(closeZoom){
    closeZoom.addEventListener("click", closeZoomImage);
})


cerrarImagenClickOut()


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

 // Función para agregar una nueva tarjeta
 export function addCard(cardData) {
    const newCard = new Card(cardData, "#cards-template");
    const cardContainer = document.querySelector(".cards");
    cardContainer.prepend(newCard.generateCard());
  }

  // Crear instancias para validadores de popupProfile y popupPlace
  const validateProfile = new FormValidator(document.querySelector("#form"));
  const validatePlace = new FormValidator(document.querySelector("#popup-place_container .form__popup"));



agregarEventListeners()








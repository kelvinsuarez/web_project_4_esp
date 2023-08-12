// array de targetas
const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
  ]; 

// obtengamos la variable para la ventana de formulario de perfil
let popup = document.querySelector(".popup");

function handleProfileFormSubmit(evt) {
    // Esta línea impide que el navegador
    // entregue el formulario en su forma predeterminada.
    evt.preventDefault();
    // Busquemos los campos del formulario en el DOM
    let nameValue = popup.querySelector(".popup__imput-text_name").value;
    let jobValue = popup.querySelector(".popup__imput-text_job").value;
    let profileName= document.querySelector(".profile__title");
    let profilejob= document.querySelector(".profile__subtitle");
    profileName.innerText= nameValue;
    profilejob.innerText= jobValue;
    if(profileName.innerText==""){
        profileName.innerText= "N/A";
    }
    if(profilejob.innerText==""){
        profilejob.innerText= "N/A";
    }
    
    onClosePopupClick();
}

const closeProfileButton = document.querySelector(".popup__icon-close");
const editButton = document.querySelector(".profile__edit-button-square");
editButton.addEventListener("click", onEditButtonClick);
closeProfileButton.addEventListener("click", onClosePopupClick);
// Conecta el manipulador (handler) al formulario:
popup.addEventListener('submit', handleProfileFormSubmit); 


// controlador del boton editar perfil
function onEditButtonClick(){
    togglePopupVisility();
}

function onClosePopupClick(){
    togglePopupVisility();
}
function togglePopupVisility(){
    let popup = document.querySelector("#popup_container");
    popup.classList.toggle("popup_opened");
}



// controlador del boton adaptar lugar
function onAddButtonClick(){
    togglePopupPlaceVisility();
}

function onClosePopupPlaceClick(){
    togglePopupPlaceVisility();
}
function togglePopupPlaceVisility(){
    let popupPlace = document.querySelector("#popup-place_container");
    popupPlace.classList.toggle("popup-place_opened");
}

const closePlaceButton = document.querySelector(".popup-place__icon-close");
const addButton = document.querySelector(".profile__add-button");
addButton.addEventListener("click", onAddButtonClick);
closePlaceButton.addEventListener("click", onClosePopupPlaceClick);

// obtengamos la variable para la ventana de formulario de lugares
let popupPlace = document.querySelector(".popup-place");
let cardsContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector("#cards-template");
const cardElement = cardTemplate.content.cloneNode(true);

// funcion para agregar un nuvo lugar
const addPlace = document.querySelector(".popup-place__button-save");
addPlace.addEventListener("click",(evt) => {
    evt.preventDefault();
    const titleValue = document.querySelector(".popup-place__imput-text_title").value;
    const picValue = document.querySelector(".popup-place__imput-text_image").value;
    const newCard = {
        name : titleValue,
        link : picValue
    }
    initialCards.unshift(newCard);
    cleanHtml();
    init();
    onClosePopupPlaceClick();
});

function cleanHtml(){
    while (cardsContainer.firstChild){
        cardsContainer.removeChild(cardsContainer.firstChild);
    }
}
    
 

//controlador de evetons para inicializar las 6 cartas
document.addEventListener("DOMContentLoaded", init);
function toggleLikeElement() {
    var likeElement = this.querySelector(".cards__element-like-black");
    likeElement.classList.toggle("cards__element-like-black_on");
}



function init(){
    const card = initialCards.map(card =>{
        const cardTemplate = document.querySelector("#cards-template");
        const cardElement = cardTemplate.content.cloneNode(true);

        const cardTitle = cardElement.querySelector(".cards__element-text");
        cardTitle.textContent = card.name;
        
        const cardpic = cardElement.querySelector(".cards__element-pic");
        cardpic.src = card.link;

        const cardContainer = document.querySelector(".cards");
        cardContainer.append(cardElement);

        var like = document.querySelectorAll(".cards__element-like");

        // Recorrer cada div de clase "cards__element-like"
        like.forEach(function(divLike) {
            divLike.addEventListener("click", toggleLikeElement);
        });
        let trash = document.querySelectorAll(".cards__element-trash");
        trash.forEach(function(deleteDiv) {
            deleteDiv.addEventListener("click", function() {
                let cardElement = this.closest(".cards__element");
                cardElement.remove();
            })
        })

    }) 
}


/*function init() {
    const cardTemplate = document.querySelector("#cards-template");
    const cardContainer = document.querySelector(".cards");

    initialCards.forEach(function(card) {
        const cardElement = cardTemplate.content.firstElementChild.cloneNode(true);

        const cardTitle = cardElement.querySelector(".cards__element-text");
        cardTitle.textContent = card.name;

        const cardpic = cardElement.querySelector(".cards__element-pic");
        cardpic.src = card.link;

        cardContainer.append(cardElement);
    });

    var like = document.querySelectorAll(".cards__element-like");
    like.forEach(function(divLike) {
        divLike.addEventListener("click", toggleLikeElement);
    });

    let trash = document.querySelectorAll(".cards__element-trash");
    trash.forEach(function(deleteDiv) {
        deleteDiv.addEventListener("click", function() {
            let cardElement = this.closest(".cards__element");
            cardElement.remove();
        });
    });
}*/
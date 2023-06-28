
let popup = document.querySelector(".popup");

// Lo siguiente es el manipulador (handler) de entrega de formularios, aunque
// no se enviará en ningún sitio todavía

// Observa que el nombre de la función comienza con un verbo
// y describe exactamente lo que hace la función
function handleProfileFormSubmit(evt) {
    // Esta línea impide que el navegador
    // entregue el formulario en su forma predeterminada.
    evt.preventDefault();
    // Una vez hecho esto, podemos definir nuestra propia forma de entregar el formulario.
    // Lo explicaremos todo con más detalle después.

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
    
    
    togglePopupVisility();

    
    // Obtén los valores de cada campo desde la propiedad de valor correspondiente

    // Selecciona los elementos donde se introducirán los valores de los campos

    // Inserta nuevos valores utilizando el textContent
    // propiedad del método querySelector()
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
popup.addEventListener('submit', handleProfileFormSubmit); 


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



// crear variable objeto con elementos de la clase "cards__element-like"
var like = document.querySelectorAll(".cards__element-like");

// Recorrer cada div de clase "cards__element-like"
like.forEach(function(divLike) {
  // Agregar un controlador de eventos de clic a cada div de clase "cards__element-like"
  divLike.addEventListener("click", function() {
    // Obtener el div con clase "cards__element-like-black"
    var likeElement = this.querySelector(".cards__element-like-black");
    
    // Agregar o eliminar la nueva clase "cards__element-like-black_on" al div con clase "cards__element-like-black" ya existente
    likeElement.classList.toggle("cards__element-like-black_on");
  });
});
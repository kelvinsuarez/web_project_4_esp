export default class Popup{
    constructor(popupSelector){
        this.popupSelector = document.querySelector(popupSelector);
        this.closeButton = this.popupSelector.querySelector("#icon_close");
    }
    
    open(){
        this.togglePopupVisility();
    }


      // controlador del boton cerrar editar perfil
    close(){
        this.popupSelector.style.animation = 'fadeout 0.5s ease';
        //agregando animacion para el cierre de popup
        this.popupSelector.addEventListener('animationend', () => {
            this.popupSelector.style.animation = '';
            this.togglePopupVisility();
            this.popupSelector.removeEventListener('animationend', this.onAnimationEnd);
        });
    }
    togglePopupVisility(){
        this.popupSelector.classList.toggle("popup_opened");
    }

    _handleEscClose(){
        document.addEventListener('keydown', (evt) => {
            if (evt.key == 'Escape'){
                if(this.popupSelector.classList.contains("popup_opened")){
                    this.popupSelector.style.animation = 'fadeout 0.5s ease';
                    this.popupSelector.addEventListener('animationend', () => {
                        this.popupSelector.style.animation = '';
                        this.togglePopupVisility();
                        this.popupSelector.removeEventListener('animationend', this.onAnimationEnd);
                    })
                };
            }
        })
    }

    setEventListeners(){
        this.closeButton.addEventListener("click", () => this.close());
        this.popupSelector.addEventListener("click", (evt) => {
            if (evt.target === this.popupSelector){
                this.popupSelector.style.animation = 'fadeout 0.5s ease';
                this.popupSelector.addEventListener('animationend', () => {
                    this.popupSelector.style.animation = '';
                    this.togglePopupVisility();
                    this.popupSelector.removeEventListener('animationend', this.onAnimationEnd);
                });
            }
        })
    }
}
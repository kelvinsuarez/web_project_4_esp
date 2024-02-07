export default class Section {
    constructor({items, renderer}, containerSelector){
        this._initialArray = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    
    clear(){
        this._container.innerHTML = ""
    }
    renderer(){
        this.clear()
        this._initialArray.forEach(item => {
            this._renderer(item)
        });
    }

    setItem(element){
        this._container.prepend(element)
    }
}
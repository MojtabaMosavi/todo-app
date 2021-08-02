
export default class Modal {

    constructor(){

        // caching the dom 
        this.modal = document.querySelector(".modal");
        this.modalCloseBtn = this.modal.querySelector(".modal__btn--close");
        this.modalForm = this.modal.querySelector(".modal__form");
        this.modalBgColorRgbInput = this.modal.querySelector("#bgColorRgb");
        this.modalTextColorRgbInput = this.modal.querySelector("#textColorRgb");
        this.modalListBgColorRgbInput = this.modal.querySelector("#listBgColorRgb");
        this.modalSumbitBtn = this.modal.querySelector(".modal__btn--submit");
    
    
        // initialization 
        this.render();
    }


    // bind events 
    bindEnvetListner(){

        // closing the modal
        this.modalCloseBtn.addEventListener('click', () => { this.hide()});

        // handling the submit
        this.modalSumbitBtn.addEventListener("click", (event) => { this.onSubmit(event)});

        // bg color 
        this.modalBgColorRgbInput.addEventListener("change",()=>{ this.changeBgColor()});

        // text color 
        this.modalTextColorRgbInput.addEventListener("change",() => { this.changeTextColor()});

        // list bg 
        this.modalListBgColorRgbInput.addEventListener("change",() => { this.changeListBgColor()});

    }

    // render the compoenent 
    render(){
        this.bindEnvetListner();
    }

    // methods 
    onSubmit(event){
        this.changeBgColor();
        this.changeTextColor();
        this.changeListBgColor();
        this.hide();
    }

    changeBgColor(){
        document.getElementsByTagName("body")[0]
        .style.setProperty('--main-bg',this.modalBgColorRgbInput.value);

    }
    
    changeTextColor(){
        document.getElementsByTagName("body")[0]
        .style.setProperty('--list-bg',this.modalListBgColorRgbInput.value);

    }

    changeListBgColor(){
        document.getElementsByTagName("body")[0]
        .style.setProperty('--text-color',this.modalTextColorRgbInput.value);
    }

    show(){
        this.modal.classList.add("modal--active");
    }

    hide(){
        this.modal.classList.remove("modal--active");
    }

    openTheModel(){
        this.modal.classList.toggle("modal--active");
    }

    
}
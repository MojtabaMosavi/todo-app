import Modal from "./modal";
import ItemList from "./ItemList"

export default class Todo{
    constructor(){
        // caching the dom 
        this.app = document.querySelector("body");
        this.navBtn = this.app.querySelector(".todo__theme-switch");
        this.nav = this.app.querySelector(".todo__nav");
        this.moonIcon = this.app.querySelector(".todo__nav-icon--moon");
        this.sunIcon = this.app.querySelector(".todo__nav-icon--sun");
        this.customIcon = this.app.querySelector(".todo__nav-icon--custom");
        this.todoForm = this.app.querySelector(".todo__form");
        this.todoInput = this.app.querySelector(".todo__input");
        this.todoAnimate = this.app.querySelector(".todo__form-animation")

        // components 
        this.modal = new Modal();
        this.itemList = new ItemList();
        this.numItems = 0;

        // rendering 
        this.render()
    }

    // binding evenet 
    bindEventListeners(){
        
        // navigation 
        this.navBtn.addEventListener("click", () => { this.activateTheNav()})


        // changin the theme 
        this.moonIcon.addEventListener("click", () => { this.changeToDarkTheme()})
        this.sunIcon.addEventListener("click", ()=> { this.changeToLightThem()})

        // activating the modal 
        this.customIcon.addEventListener("click", () => { this.modal.openTheModel()})

        // adding todos 
        this.todoForm.addEventListener("submit", (event)=>{
            event.preventDefault();
            this.startAnimation();
            this.numItems++;
            setTimeout(() => {
                this.endAnimation();
                this.itemList.addToDo(this.todoInput.value,this.numItems);
                this.todoInput.value = "";
            }, 500);
        })

    }


    // render 
    render(){
        this.bindEventListeners();
    }


    changeToDarkTheme(){
        // resetting these variables in the global stylesheet
        document.getElementsByTagName("body")[0].style.removeProperty('--text-color');
        document.getElementsByTagName("body")[0].style.removeProperty('--main-bg');
        document.getElementsByTagName("body")[0].style.removeProperty('--list-bg');


        this.app.classList.remove("light-theme");
        this.app.classList.add("dark-theme");
    }

    changeToLightThem(){
    
        document.getElementsByTagName("body")[0].style.removeProperty('--text-color');
        document.getElementsByTagName("body")[0].style.removeProperty('--main-bg');
        document.getElementsByTagName("body")[0].style.removeProperty('--list-bg');

        this.app.classList.remove("dark-theme");
        this.app.classList.add("light-theme");
    }

    activateTheNav(){
        this.navBtn.classList.toggle("todo__theme-switch--active");
        this.nav.classList.toggle("todo__nav--active");
    }

    startAnimation(){
        this.todoAnimate.classList.add("todo__form-animation--active");
    }

    endAnimation(){
        this.todoAnimate.classList.remove("todo__form-animation--active");
    }
    
}
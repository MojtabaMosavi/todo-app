
export default class ItemList{

    constructor(){

        // caching the dom 
        this.itemList = document.querySelector(".todo__list");
        this.todos = this.itemList.getElementsByClassName("todo__item");
        this.todosCheckBtn = this.itemList.getElementsByClassName("todo__item-circle");
        this.todosText = this.itemList.getElementsByClassName("todo__item-text");
        this.todosCloseBtn = this.itemList.getElementsByClassName("todo__item-btn");
        this.featuresWrapper = this.itemList.querySelector(".todo__features");
        this.numberOfItem = this.itemList.querySelector(".todo__features-heading");
        this.clearBtn = this.itemList.querySelector(".todo__features-completed");
        this.clearCompletedBtn = this.itemList.querySelector(".todo__features-btn-complete");
        this.activeBtn = this.itemList.querySelector(".todo__features-btn-active");
        this.showAll = this.itemList.querySelector(".todo__feature-btn-all")

        // rendering 
        this.render();
    }

    // binding events
    bindEventListener(){
        
        // clear all completed todo 
        this.clearBtn.addEventListener("click",()=> { this.clearCompleted()})

        this.itemList.addEventListener("change", ()=> {this.clearCompleted()})

        this.clearCompletedBtn.addEventListener("click", ()=> { this.showAllCompletedTodos()})

        // show all active todos 
        this.activeBtn.addEventListener("click",()=> {this.showAllActiveTOdos()})

        // show all todos 
        this.showAll.addEventListener("click",()=> { this.showALlTodos()})
        
        // drag evenet 

    }

    // render 
    render(){
        this.bindEventListener();
    }

    // handle the drag and drop behavior 
    handleDrag(){
        const todos = this.itemList.querySelectorAll(".todo__item");
        todos.forEach(item => {
            if(!item.hasAttribute("data-draggable")){
                item.setAttribute("data-draggable","true");
                item.addEventListener("dragstart",(e)=>{
                    

                    /* using the transfer obejct 
                       foramt = format of data being transfered 
                       data = the data added to the drag object */
                    e.dataTransfer.setData("text/plain",e.target.id);

                    
                    // to avoid th item from disappearing on dragstart 
                    setTimeout(() => {
                        e.target.classList.add("hide")
                    }, 0);
                })


                // hnadling the drop 
                item.addEventListener("dragenter", (e)=> {this.dragEnter(e)});

                item.addEventListener("dragover",(e) => {this.dragOver(e)});

                item.addEventListener("dragleave",(e) => { this.dragLeave(e)});

                item.addEventListener("drop", (e) => { this.drop(e)});
                
                item.addEventListener("dragend",(e)=> { this.dragEnd(e)})

            }
        })

    }

    dragEnd(e){
        e.target.classList.remove("hide");
    }


    dragEnter(e){
        // overwiting the default to make it a vaild drop target
        e.target.classList.contains("todo__item-wrapper") ?
            (e.preventDefault(),
            e.target.classList.add("drag-over")):
            null 
        
    }
    
    dragOver(e){
        e.target.classList.contains("todo__item-wrapper") ?
            (e.preventDefault(),
            e.target.classList.add("drag-over")): 
            null 
        
    }

    dragLeave(e){
        e.target.classList.remove("drag-over");
    }


    drop(e){
        
        e.target.classList.remove("drag-over");

        // get the draggable element
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);

        if(e.target.classList.contains("todo__item-wrapper")){
            // add it to the drop target
            e.target.parentElement.parentElement.insertBefore(draggable,e.target.parentElement);
        }

        // display the draggable element
        draggable.classList.remove('hide');
    }

    activateTodos(){
        const todos = this.itemList.querySelectorAll(".todo__item-circle");
        todos.forEach(todo => {
            if(!todo.hasAttribute("listner")){
                todo.setAttribute("listner",'true')

                // chaning the state of check button 
                todo.addEventListener("click", ()=> { this.changeTodoState(todo)})

                // changin the state of text buttons
                todo.nextElementSibling.addEventListener("click",()=> { this.changeTodoState(todo)})

                // deleting elements 
                todo.nextElementSibling.nextElementSibling.addEventListener("click", () => {
                    todo.parentElement.parentElement.remove();
                    this.updateNumerOfItem(todos.length);
                })
            }
        })
    }

    changeTodoState(todo){
        todo.classList.toggle("todo__item-circle--active");
        todo.nextElementSibling.classList.toggle("todo__item-text--complete");
        todo.parentElement.parentElement.classList.toggle("completed");
    }

    // show all items 
    showALlTodos(){
        const todos = this.itemList.querySelectorAll(".todo__item");
        todos.forEach(item => {
            item.classList.remove("hide");
        })
        this.updateNumerOfItem(todos.length);
    }

    // show all actiave todos 
    showAllActiveTOdos(){
        const todos = this.itemList.querySelectorAll(".todo__item");
        let numItem = 0;
        todos.forEach(item => {
            if(item.classList.contains("completed")){
                item.classList.add("hide");
            }else{
                item.classList.remove("hide");
                numItem++;
            }
        })
        this.updateNumerOfItem(numItem);
    }

    // show all completed todos
    showAllCompletedTodos(){
        const todos = this.itemList.querySelectorAll(".todo__item");
        let numItems=0;
        todos.forEach(item => {
            if(item.classList.contains("completed")){
                numItems++;
               item.classList.remove("hide");
            }else{
                item.classList.add("hide");
            }
        })
        this.updateNumerOfItem(numItems);
    }

    // clear the completed todos 
    clearCompleted(){
        const todos = this.itemList.querySelectorAll(".todo__item");
        let numItem = todos.length;
        todos.forEach(item => {
            if(item.classList.contains("completed")){
                item.remove();
                numItem--;
            }
        })
        this.updateNumerOfItem(numItem);
    }

    hideItemList(){
        this.itemList.classList.add("hide");
    }

    showItemList(){
        this.itemList.classList.remove("hide");
    } 

    // update the number of todos 
    updateNumerOfItem(count){
        this.numberOfItem.textContent = `${count} items left`;
    }

    // make the template for the todo 
    makeTemplate(text,id){
        const template =
        `<li class="todo__item" draggable="true" id=item-${id}>
            <div class="todo__item-wrapper">

                <button class="todo__circle todo__item-circle" 
                        type="button"
                        aria-label="check the item"
                        title="check">
                    <i class="todo__circle-fill--active todo__item-circle-fill"></i>
                </button>

                <button class="todo__item-text btn btn--inherit-bg"  
                        type="button"
                        aria-label="todo text"
                        draggable="false">
                        ${text}
                </button>

                <button class="todo__item-btn btn btn--cross btn--xs" 
                        type="button"
                        aria-label="delete the item"
                        title="delete">
                </button>
            </div>
        </li>`
        return template
        
    }   

    // add a todo to the list 
    addToDo(text,id){
        this.itemList.insertAdjacentHTML("afterbegin", this.makeTemplate(text,id))
        const item = this.itemList.querySelectorAll(".todo__item").length;
        this.updateNumerOfItem(item);
        this.activateTodos();
        this.handleDrag();
    }
} 
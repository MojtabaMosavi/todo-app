parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RSqK":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function t(){e(this,t),this.modal=document.querySelector(".modal"),this.modalCloseBtn=this.modal.querySelector(".modal__btn--close"),this.modalForm=this.modal.querySelector(".modal__form"),this.modalBgColorRgbInput=this.modal.querySelector("#bgColorRgb"),this.modalTextColorRgbInput=this.modal.querySelector("#textColorRgb"),this.modalListBgColorRgbInput=this.modal.querySelector("#listBgColorRgb"),this.modalSumbitBtn=this.modal.querySelector(".modal__btn--submit"),this.render()}return o(t,[{key:"bindEnvetListner",value:function(){var e=this;this.modalCloseBtn.addEventListener("click",function(){e.hide()}),this.modalSumbitBtn.addEventListener("click",function(t){e.onSubmit(t)}),this.modalBgColorRgbInput.addEventListener("change",function(){e.changeBgColor()}),this.modalTextColorRgbInput.addEventListener("change",function(){e.changeTextColor()}),this.modalListBgColorRgbInput.addEventListener("change",function(){e.changeListBgColor()})}},{key:"render",value:function(){this.bindEnvetListner()}},{key:"onSubmit",value:function(e){this.changeBgColor(),this.changeTextColor(),this.changeListBgColor(),this.hide()}},{key:"changeBgColor",value:function(){document.getElementsByTagName("body")[0].style.setProperty("--main-bg",this.modalBgColorRgbInput.value)}},{key:"changeTextColor",value:function(){document.getElementsByTagName("body")[0].style.setProperty("--list-bg",this.modalListBgColorRgbInput.value)}},{key:"changeListBgColor",value:function(){document.getElementsByTagName("body")[0].style.setProperty("--text-color",this.modalTextColorRgbInput.value)}},{key:"show",value:function(){this.modal.classList.add("modal--active")}},{key:"hide",value:function(){this.modal.classList.remove("modal--active")}},{key:"openTheModel",value:function(){this.modal.classList.toggle("modal--active")}}]),t}();exports.default=n;
},{}],"due9":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function e(){t(this,e),this.itemList=document.querySelector(".todo__list"),this.todos=this.itemList.getElementsByClassName("todo__item"),this.todosCheckBtn=this.itemList.getElementsByClassName("todo__item-circle"),this.todosText=this.itemList.getElementsByClassName("todo__item-text"),this.todosCloseBtn=this.itemList.getElementsByClassName("todo__item-btn"),this.featuresWrapper=this.itemList.querySelector(".todo__features"),this.numberOfItem=this.itemList.querySelector(".todo__features-heading"),this.clearBtn=this.itemList.querySelector(".todo__features-completed"),this.clearCompletedBtn=this.itemList.querySelector(".todo__features-btn-complete"),this.activeBtn=this.itemList.querySelector(".todo__features-btn-active"),this.showAll=this.itemList.querySelector(".todo__feature-btn-all"),this.render()}return i(e,[{key:"bindEventListener",value:function(){var t=this;this.clearBtn.addEventListener("click",function(){t.clearCompleted()}),this.itemList.addEventListener("change",function(){t.clearCompleted()}),this.clearCompletedBtn.addEventListener("click",function(){t.showAllCompletedTodos()}),this.activeBtn.addEventListener("click",function(){t.showAllActiveTOdos()}),this.showAll.addEventListener("click",function(){t.showALlTodos()})}},{key:"render",value:function(){this.bindEventListener()}},{key:"handleDrag",value:function(){var t=this;this.itemList.querySelectorAll(".todo__item").forEach(function(e){e.hasAttribute("data-draggable")||(e.setAttribute("data-draggable","true"),e.addEventListener("dragstart",function(t){t.dataTransfer.setData("text/plain",t.target.id),setTimeout(function(){t.target.classList.add("hide")},0)}),e.addEventListener("dragenter",function(e){t.dragEnter(e)}),e.addEventListener("dragover",function(e){t.dragOver(e)}),e.addEventListener("dragleave",function(e){t.dragLeave(e)}),e.addEventListener("drop",function(e){t.drop(e)}),e.addEventListener("dragend",function(e){t.dragEnd(e)}))})}},{key:"dragEnd",value:function(t){t.target.classList.remove("hide")}},{key:"dragEnter",value:function(t){t.target.classList.contains("todo__item-wrapper")&&(t.preventDefault(),t.target.classList.add("drag-over"))}},{key:"dragOver",value:function(t){t.target.classList.contains("todo__item-wrapper")&&(t.preventDefault(),t.target.classList.add("drag-over"))}},{key:"dragLeave",value:function(t){t.target.classList.remove("drag-over")}},{key:"drop",value:function(t){t.target.classList.remove("drag-over");var e=t.dataTransfer.getData("text/plain"),i=document.getElementById(e);t.target.classList.contains("todo__item-wrapper")&&t.target.parentElement.parentElement.insertBefore(i,t.target.parentElement),i.classList.remove("hide")}},{key:"activateTodos",value:function(){var t=this,e=this.itemList.querySelectorAll(".todo__item-circle");e.forEach(function(i){i.hasAttribute("listner")||(i.setAttribute("listner","true"),i.addEventListener("click",function(){t.changeTodoState(i)}),i.nextElementSibling.addEventListener("click",function(){t.changeTodoState(i)}),i.nextElementSibling.nextElementSibling.addEventListener("click",function(){i.parentElement.parentElement.remove(),t.updateNumerOfItem(e.length)}))})}},{key:"changeTodoState",value:function(t){t.classList.toggle("todo__item-circle--active"),t.nextElementSibling.classList.toggle("todo__item-text--complete"),t.parentElement.parentElement.classList.toggle("completed")}},{key:"showALlTodos",value:function(){var t=this.itemList.querySelectorAll(".todo__item");t.forEach(function(t){t.classList.remove("hide")}),this.updateNumerOfItem(t.length)}},{key:"showAllActiveTOdos",value:function(){var t=this.itemList.querySelectorAll(".todo__item"),e=0;t.forEach(function(t){t.classList.contains("completed")?t.classList.add("hide"):(t.classList.remove("hide"),e++)}),this.updateNumerOfItem(e)}},{key:"showAllCompletedTodos",value:function(){var t=this.itemList.querySelectorAll(".todo__item"),e=0;t.forEach(function(t){t.classList.contains("completed")?(e++,t.classList.remove("hide")):t.classList.add("hide")}),this.updateNumerOfItem(e)}},{key:"clearCompleted",value:function(){var t=this.itemList.querySelectorAll(".todo__item"),e=t.length;t.forEach(function(t){t.classList.contains("completed")&&(t.remove(),e--)}),this.updateNumerOfItem(e)}},{key:"hideItemList",value:function(){this.itemList.classList.add("hide")}},{key:"showItemList",value:function(){this.itemList.classList.remove("hide")}},{key:"updateNumerOfItem",value:function(t){this.numberOfItem.textContent="".concat(t," items left")}},{key:"makeTemplate",value:function(t,e){return'<li class="todo__item" draggable="true" id=item-'.concat(e,'>\n            <div class="todo__item-wrapper">\n\n                <button class="todo__circle todo__item-circle" \n                        type="button"\n                        aria-label="check the item"\n                        title="check">\n                    <i class="todo__circle-fill--active todo__item-circle-fill"></i>\n                </button>\n\n                <button class="todo__item-text btn btn--inherit-bg"  \n                        type="button"\n                        aria-label="todo text"\n                        draggable="false">\n                        ').concat(t,'\n                </button>\n\n                <button class="todo__item-btn btn btn--cross btn--xs" \n                        type="button"\n                        aria-label="delete the item"\n                        title="delete">\n                </button>\n            </div>\n        </li>')}},{key:"addToDo",value:function(t,e){this.itemList.insertAdjacentHTML("afterbegin",this.makeTemplate(t,e));var i=this.itemList.querySelectorAll(".todo__item").length;this.updateNumerOfItem(i),this.activateTodos(),this.handleDrag()}}]),e}();exports.default=n;
},{}],"DgXD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=o(require("./modal")),e=o(require("./ItemList"));function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,o){return e&&i(t.prototype,e),o&&i(t,o),t}var s=function(){function o(){n(this,o),this.app=document.querySelector("body"),this.navBtn=this.app.querySelector(".todo__theme-switch"),this.nav=this.app.querySelector(".todo__nav"),this.moonIcon=this.app.querySelector(".todo__nav-icon--moon"),this.sunIcon=this.app.querySelector(".todo__nav-icon--sun"),this.customIcon=this.app.querySelector(".todo__nav-icon--custom"),this.todoForm=this.app.querySelector(".todo__form"),this.todoInput=this.app.querySelector(".todo__input"),this.todoAnimate=this.app.querySelector(".todo__form-animation"),this.modal=new t.default,this.itemList=new e.default,this.numItems=0,this.render()}return a(o,[{key:"bindEventListeners",value:function(){var t=this;this.navBtn.addEventListener("click",function(){t.activateTheNav()}),this.moonIcon.addEventListener("click",function(){t.changeToDarkTheme()}),this.sunIcon.addEventListener("click",function(){t.changeToLightThem()}),this.customIcon.addEventListener("click",function(){t.modal.openTheModel()}),this.todoForm.addEventListener("submit",function(e){e.preventDefault(),t.startAnimation(),t.numItems++,setTimeout(function(){t.endAnimation(),t.itemList.addToDo(t.todoInput.value,t.numItems),t.todoInput.value=""},500)})}},{key:"render",value:function(){this.bindEventListeners()}},{key:"changeToDarkTheme",value:function(){document.getElementsByTagName("body")[0].style.removeProperty("--text-color"),document.getElementsByTagName("body")[0].style.removeProperty("--main-bg"),document.getElementsByTagName("body")[0].style.removeProperty("--list-bg"),this.app.classList.remove("light-theme"),this.app.classList.add("dark-theme")}},{key:"changeToLightThem",value:function(){document.getElementsByTagName("body")[0].style.removeProperty("--text-color"),document.getElementsByTagName("body")[0].style.removeProperty("--main-bg"),document.getElementsByTagName("body")[0].style.removeProperty("--list-bg"),this.app.classList.remove("dark-theme"),this.app.classList.add("light-theme")}},{key:"activateTheNav",value:function(){this.navBtn.classList.toggle("todo__theme-switch--active"),this.nav.classList.toggle("todo__nav--active")}},{key:"startAnimation",value:function(){this.todoAnimate.classList.add("todo__form-animation--active")}},{key:"endAnimation",value:function(){this.todoAnimate.classList.remove("todo__form-animation--active")}}]),o}();exports.default=s;
},{"./modal":"RSqK","./ItemList":"due9"}],"d6sW":[function(require,module,exports) {
"use strict";var e=r(require("./Todo"));function r(e){return e&&e.__esModule?e:{default:e}}var u=new e.default;
},{"./Todo":"DgXD"}]},{},["d6sW"], null)
//# sourceMappingURL=/main.cbc2f9bf.js.map
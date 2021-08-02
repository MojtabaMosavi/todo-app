## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- Drag and drop to reorder items on the list

### Screenshot

![](./design/desktop-design.jpg)


### Links

- Live Site URL: [Add live site URL here](https://goofy-meninsky-eff547.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript 
- BEM


### What I learned

1- In order to implement the drap and drop functionality I had to use the drag and drop API. 
2- During this project I improved my knowledge about OOP
3- How to utilize extral libraries for repetive and common tasks, for instace I used a external library for animation.
4- How to implement a modal, althought this wasn't in project spec it made sense to allow the user to control a basic set of configurations such background color.

Basic structure of the modal:
```html
<div class="dialog" tabindex="0">
  <div class="modal__dialog">
    <div class="modal__header"></div>
    <div class="modal__body"></div>
    <div class="modal__footer"></div>

  </div>
 </div>
```

### Continued development

1- Futher improvment in OPP, I satisfied with the current implementation but there is alot of rum for improvment.
2- Enhancing the custom configurations, for example allowing the user to set the background image as well.
3- Better usage of git, I need to improve my rutine of taking snapshots and making more consistant.
4- Gettig a better grasp of parcel and probably learning a more sophistacted build-tool like webpack.


### Useful resources

- [Drag and drop API](https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/) - This is good primer on how to use the drag and drop api.
- [CSS animations](https://animate.style/) - This is an amazing librarary which provides a bunch of cool animation and using is really easy.



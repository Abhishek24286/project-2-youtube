 export function darkMode(){
    let element= document.querySelector('.js-theme-selector');
    element.addEventListener('click',()=>{
    if (element.innerText === 'dark') {
    element.innerText = 'bright';
    document.querySelector('.sidebar-container')
   .classList.add("sidebar-container4");
   document.querySelector('.header')
  .classList.add("header4");
   document.body.classList.add("background-color");
   document.querySelector('.sidebar').classList.add("js-sidebar");

    } else {

    element.innerText = 'dark';
    document.querySelector('.sidebar').classList.remove("js-sidebar");

    document.querySelector('.sidebar-container')
    .classList.remove("sidebar-container4");

    document.querySelector('.header')
    .classList.remove("header4");

    document.body.classList.remove("background-color");
    }
    });
 
 }


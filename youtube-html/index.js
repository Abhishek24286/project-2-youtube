import{darkMode} from './dark-mode.js';



const element=document.querySelector('.js-menu-icon');
let count=0;
element.addEventListener('click',()=>{
     document.querySelector('.sidebar-container').classList.toggle("sidebar-container5");
   
   darkMode();
});


let i=1;
const elementLeft =document.querySelector('.left-section');
const elementRight=document.querySelector('.right-section');
const SearchElement=document.querySelector('.search-button');
SearchElement.addEventListener('click',()=>{
   console.log('hii');
 
     elementLeft.classList.toggle("left-js-container");
     elementRight.classList.toggle("right-js-container");
    
    document.querySelector('.js-search-class').classList.toggle("Search-js-bar");
    SearchElement.classList.toggle("search-button-js");
    
      document.querySelector('.js-menu-icon').classList.toggle("js-menu-icon-run");
   });
              
  

                  
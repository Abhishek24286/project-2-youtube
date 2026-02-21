import{darkMode} from '../script folder/dark-mode.js';
import{generateHtml} from './html-generate.js';
 
 
  generateHtml();

const button = document.querySelector('.js-menu-icon');
const sidebar = document.querySelector('.sidebar-container');

button.addEventListener('click', (e) => {
  e.stopPropagation(); 
  sidebar.classList.toggle("sidebar-container5");
  darkMode();
});


sidebar.addEventListener('click', (e) => {
  e.stopPropagation();
});


document.body.addEventListener('click', (e) => {
  sidebar.classList.remove("sidebar-container5");
  
});


let i=1;
const elementLeft =document.querySelector('.left-section');
const elementRight=document.querySelector('.right-section');
const SearchElement=document.querySelector('.search-button');
SearchElement.addEventListener('click',()=>{
 
     elementLeft.classList.toggle("left-js-container");
     elementRight.classList.toggle("right-js-container");
    
    document.querySelector('.js-search-class').classList.toggle("Search-js-bar");
    SearchElement.classList.toggle("search-button-js");
    
      document.querySelector('.js-menu-icon').classList.toggle("js-menu-icon-run");
   });
              

                  
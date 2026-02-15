
const element=document.querySelector('.js-menu-icon');
let count=0;
element.addEventListener('click',()=>{
 if(count%2===1){
  const html= `
   
         <div class="sidebar-container">
             <div class="search-image4">
            <img class="image-2"src="icons/home.svg">
            <div class="icon-name-4">Home</div>
        </div>
         <div class="search-image4">
            <img class="image-2" src="icons/explore.svg">
             <div class="icon-name-4">Explore</div>
          </div>
         <div class="search-image4"> 
            <img class="image-2" src="icons/subscriptions.svg">
             <div class="icon-name-4">Subscriptions</div>
         </div>
         <div class="search-image4"> 
            <img class="image-2" src="icons/originals.svg"> 
             <div class="icon-name-4">Originals</div>
         </div>
         <div class="search-image4">
            <img class="image-2" src="icons/youtube-music.svg"> 
            <div class="icon-name-4">Youtube Music</div>
         </div>
         </div>
        

  
 `;
   document.querySelector('.div-psudo-class').innerHTML=html;
   count++;
   document.body.classList.add("no-scroll");
  
   

  
 
 }
   else{
     document.querySelector('.div-psudo-class').innerHTML="";
     count++;
       document.body.classList.remove("no-scroll");
      
   }
  
 
    
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
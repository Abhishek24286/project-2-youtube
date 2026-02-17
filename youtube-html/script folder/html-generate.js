import{container} from '../script folder/containerData.js';
  export function generateHtml(){
    let html2='';
    for(let i=0;i<container.length;i++){
      let element=container[i];
       const html=`
       <div class="main-container">
         <div class="logo-div3" >
            <a href="${element.Link}">
               <img class="video-picture" src="${element.image}">
            </a>
               <div class="video-time">${element.Time}</div>
         </div>
            <div class ="second-container">
               <div >
                  <img class="logo" src="${element.logo}">
                  
               </div>
                  <div  class="title-div">
                        <div>
                     <p class="p1">
                       ${element.Tital}
                     </p>
                  </div>
                     <div class="author-div">
                        <p class="p2">
                          ${element.Author}
                        </p>
                     </div>
                     <div>
                        <p class="p3">
                          ${element.Stats}
                        </p>
                     </div>
                  </div>
                  
            </div>
               </div>
      `;
      html2=html2+html;
     
   
    }
     document.querySelector('.super-container1').innerHTML=html2;
    
 }
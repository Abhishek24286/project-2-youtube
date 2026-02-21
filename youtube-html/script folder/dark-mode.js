 export function darkMode(){
      let element= document.querySelector('.js-theme-selector');
      let toggelElement=document.querySelector('.toggel-dark-mode');
      toggelElement.addEventListener('click',()=>{
      if (element.innerText === 'dark') {
      element.innerText = 'bright';
      document.querySelector('.sidebar-container')
      .classList.add("sidebar-container4");
      document.querySelector('.header')
      .classList.add("header4");
     
      document.body.classList.add("background-color");
      document.querySelector('.sidebar').classList.add("js-sidebar");
      document.querySelector('.dark-mode-icon').innerText="brightness_4";

      } else {
      element.innerText = 'dark';
      document.querySelector('.sidebar').classList.remove("js-sidebar");

      document.querySelector('.sidebar-container')
      .classList.remove("sidebar-container4");

      document.querySelector('.header')
      .classList.remove("header4");
      document.querySelector('.dark-mode-icon').classList.remove("js-dark-mode");
      document.body.classList.remove("background-color");
      document.querySelector('.dark-mode-icon').innerText="dark_mode";
    }
    });
 
 }


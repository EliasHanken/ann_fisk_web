/**
 * Creates dynamic navigation for different usertypes.
 */
 let degree = 0;

 function createNavigation(){
     const user = {
         username:'',
         jwt:'test',
         admin:'false'
     }; /* Must be implemented as authentication */
 
 }
 
 function rotateMenu(){
     if(degree == 0){
         document.querySelector(".menu-icon").style.webkitTransform = 'rotate(-90deg)';
         degree = -90;
     }else{
         document.querySelector(".menu-icon").style.webkitTransform = 'rotate(0deg)';
         degree = 0;
     }
 }
 
 function openNav(){
     document.querySelector(".sideNav").style.width = "25rem";
     document.querySelector(".menu-icon").style.opacity = "0.1";
 }
 
 function closeNav(){
     document.querySelector(".sideNav").style.width = "0";
     document.querySelector(".menu-icon").style.opacity = "1";
 }
 
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
 
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });
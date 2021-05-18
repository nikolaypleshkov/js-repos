const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    //console.log(links.classList.contains('random'));

    /*
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    }
    else{
        links.classList.add('show-links');
    }
    */
   links.classList.toggle('show-links');
   navToggle.classList.toggle('toggle');

   if(navToggle.classList.contains('toggle')){
      navToggle.classList.add('rotate');
   }
   else{
         navToggle.classList.remove('rotate');
   }
});
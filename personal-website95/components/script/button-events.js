const closeBtn = document.getElementById('close');
const Infowindow = document.getElementById('draggable-elem');
const windowTitle = document.getElementById('title');

const startMenu = document.getElementById('start')
const dropDown = document.getElementById('dropdown-content');



closeBtn.addEventListener('click', function(){
    alert('You are closing window: "'+ windowTitle.innerText+'"');
    Infowindow.classList.add('display-none');
});

startMenu.addEventListener('click', function(){
    if(dropDown.style.display === 'none'){
        dropDown.style.display = 'block';
    }
    else{
        dropDown.style.display = 'none'
    }
    
});


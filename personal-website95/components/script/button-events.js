const closeBtn = document.getElementById('close');
const Infowindow = document.getElementById('draggable-elem');
const windowTitle = document.getElementById('title');

const startBtn = document.getElementById('start')
const dropDown = document.getElementById('dropdown-content');

const aboutBtn = document.getElementById('aboutBtn');
const aboutWin = document.querySelector('.about');



startBtn.addEventListener('click', function(){
    if(dropDown.style.display === 'none'){
        dropDown.style.display = 'block';
    }
    else{
        dropDown.style.display = 'none'
    }
    
});

aboutBtn.addEventListener('click', function(){
    Infowindow.style.display = 'block';

    closeBtn.addEventListener('click', function(){

    alert('You are closing window: "'+ windowTitle.innerText+'"');
    Infowindow.style.display = 'none';
});
});




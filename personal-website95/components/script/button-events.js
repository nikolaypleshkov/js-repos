const closeBtn = document.getElementById('close');
const Infowindow = document.getElementById('draggable-elem');
const windowTitle = document.getElementById('title');

const startBtn = document.getElementById('start')
const dropDown = document.getElementById('dropdown-content');

const aboutBtn = document.getElementById('aboutBtn');
const aboutWin = document.querySelector('.about');

const text_data = "Hi, my name is Nikolay Pleshkov. I'm a passionate Java and JavaScript developer. Right now I'm a student in Plovdiv University, major at B.SE. I have experiance building web application's frontend with React.js + Next.js and Angular" +
" and the backend (server-side) with Java (Spring Boot, Spring Data JPA and Spring Security) + Hibernate. I have excellent knowledge of the OOP principles. Daily practising SOLID principles.I'm really into self-development. Looking forward for web/mobile developing.  "
const text = document.querySelector('.card-text');

text.textContent = text_data;


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




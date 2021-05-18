const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer: ",
        img: "./person-1.jpeg",
        text: "I'm web developer. I'm noob. I can only code vanilla javascript. All my friends are using React.js and Angular.",
    },
    {
        id: 2,
        name: "annah johnson",
        job: "java developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm the only 'real' developer here. All these suckers can't code. Even my grandmother can code in javascript.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "I can't even use Switch Statement without searching in stackoverflow",
    },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let current = 0;

window.addEventListener('DOMContentLoaded', function(){
    console.log("loaded");

    showPerson(current);
    
});

function showPerson(person){
    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
     current++;
     if(current > reviews.length-1){
        current = 0;
    }
    showPerson(current);
});

prevBtn.addEventListener('click', function(){
    current--;
    if(current < 0){
        current = reviews.length - 1;
    }
    showPerson(current);
});

function getRandomPerson(){
    return Math.floor(Math.random() * reviews.length);
}

randomBtn.addEventListener('click', function(){
    console.log(getRandomPerson());
    current = getRandomPerson();
    showPerson(current);
});





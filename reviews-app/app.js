const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer: ",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
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
        text: "I can't even use Case Statement without searching in stackoverflow",
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
});



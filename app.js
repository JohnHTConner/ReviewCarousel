// Data for reviews
const reviews = [
  {
    id: 1,
    name: 'Susan Smith',
    location: 'Derby, United Kingdom',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: '"Just snagged a pair of Happy Soles from this site, and my feet are in pure bliss. Comfort meets style in the best way possible. No regrets, just happy steps!"',
  },
  {
    id: 2,
    name: 'Anna Johnson',
    location: 'Slough, United Kingdom',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: '"The Stride Supreme sneakers are a revelation! Super comfy, incredibly durable, and the envy of all my friends. This purchase was a total win. Five stars without a doubt!"',
  },
  {
    id: 3,
    name: 'Peter Jones',
    location: 'Reading, United Kingdom',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: '"I found my sole mate with the Comfy Companion shoes. Its like my feet are getting a warm hug with every step. Customer service was top-notch too – quick and helpful. Happy customer here!"',
  },
  {
    id: 4,
    name: 'Bill Anderson',
    location: 'Ipswich, United Kingdom ',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: ' "Chic Strutters from this site are a wardrobe essential. The style is on point, and the comfort level is unmatched. Walking never felt this good. Thumbs up all the way!" ',
  },
];

// items from index
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const location2 = document.getElementById("location");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


// set starting point

let currentItem = 0;


// load intial item

window.addEventListener("DOMContentLoaded", function (){
  console.log('shake n bake')
  const item= reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  location2.textContent = item.location;
  info.textContent = item.text;
});

// show person based on item

function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  location2.textContent = item.location;
  info.textContent = item.text;
}


// Show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// Show previous person
prevBtn.addEventListener('click', function(){
  currentItem--;
  if (currentItem <0){
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});


//Show random person
randomBtn.addEventListener('click', function() {
  console.log("I work!");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});





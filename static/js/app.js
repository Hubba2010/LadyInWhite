const carouselSlide = document.querySelector('.carousel-slide');
const carouselImg = document.querySelectorAll('.carousel-slide img');

// PRZYCISKI

const prevBut = document.querySelector('#prevBut');
const nextBut = document.querySelector('#nextBut');

// LICZNIK

let counter = 1;
var size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// PRZYCISKI PO KLIKNIĘCIU

nextBut.addEventListener('click', () => {
    if (counter >= carouselImg.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


});

prevBut.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImg[counter].id === 'LastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImg[counter].id === 'FirstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }



})




"use strict";

// slider_ის ლოგიკა
// slider სურათების ერეი
const images = [
    "./assests/Images/usaid.webp",
    "./assests/Images/space.webp",
    "./assests/Images/tnt.webp",
    "./assests/Images/Tegeta.webp",
    "./assests/Images/spectre.webp",
    "./assests/Images/tbclizing.webp",
    "./assests/Images/ufc.webp",
    ,
  ];
  
  const slidesCont = document.getElementsByClassName("slidesContent")[0];
  // სურათბის წამოღება ერეიდან და ჩასმა htmlში (slidesContent დივში)
  const getSlides = () => {
    images.forEach((img) => {
      const sliderimgs = `   <figure class="slideImg">
                          <img src="${img}"/>
                        </figure>`;
      slidesCont.innerHTML += sliderimgs;
    });
  };
  
  getSlides();
  // კლასნეიმით ვწვდები ბუთონ ელემენტებს და ვინახავ ცვლადებში
  const nextBtn = document.getElementsByClassName("NextArrow")[0];
  const prevBtn = document.getElementsByClassName("PrevArrow")[0];
  // სურათბის კონტეინერის წამოღება დომიდან
  const slides = document.querySelectorAll(".slideImg");
  // სლაიდერის საწყისი ინდექსი
  let slideIndex = 0;
  let intervalId = null;
    // პირველი სამი სლაიდის ჩვენება ფორ ციკლით
      // ანუ პირველ სამ სლაიდს ვადებ კლასს  displaySlide  , 
      // რომელშიც ბლოკურს ვხდი 3 ფოტოს.
  const initializeSlider = () => {
    if (slides.length > 0) {
      for (let i = 0; i < 3; i++) {
        slides[i].classList.add("displaySlide");
      }
      intervalId = setInterval(nextSlide, 5000);
    }
  };
  
  document.addEventListener("DOMContentLoaded", initializeSlider);
  
  const showSlide = (index) => {
    clearInterval(intervalId);
    
    // წინა 3 ფოტოს დამალვა
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("displaySlide");
    }
  
      // შემდეგი 3 ის გამოჩენა
    for (let i = index; i < index + 3; i++) {
      if (i < slides.length) {
        slides[i].classList.add("displaySlide");
      }
    }
  // ავტომატურად გადასვლა სლაიდებზე 5 წამში
    intervalId = setInterval(nextSlide, 5000);
  };
  
  //  // უკანა ღილაკის ლოგიკა
  const prevSlide = () => {
    slideIndex -= 3;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
    clearInterval(intervalId);
  };
  // შემდეგი ღილაკის ლოგიკა
  const nextSlide = () => {
    slideIndex += 3;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  };
  
  
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
  
  // ვწვდები dot კონტეინერს და თითოეულ მათგანს
  const dotsContainer = document.querySelector(".dots");
  const dots = dotsContainer.querySelectorAll("span");
  
  // dot click handler ფუნქცია
  const dotClickHandler = (dotIndex) => {
    // შესაბამისი ინდექსის გამოთვლა
    const slideIndex = dotIndex * 3;
    showSlide(slideIndex);
  };
  
  // თითოეულ dotზე კლიკ ფუნქცია და ინდექსის შეცვლა
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      dotClickHandler(index);
    });
  });
  
  
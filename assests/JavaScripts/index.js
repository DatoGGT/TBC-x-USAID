"use strict";


// Create an array of data for each div/
// array სურათებისთვის, ტექსტისთვის და "კურსის დეტალები" ლინკისთვის

const ImgArray = [
    { imgUrl: './assests/Images/iOSImg.webp', title: 'iOS Development', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/ios-development' },
    { imgUrl: './assests/Images/ReactImg.webp', title: 'React', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/react' },
    { imgUrl: './assests/Images/phytonimg.webp', title: 'Intro to Phyton', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/python-basic' },
    { imgUrl: './assests/Images/advancedphyton.webp', title: 'Advanced Phyton', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/python-advance' },
    { imgUrl: './assests/Images/cyber.webp', title: 'Advanced Cybersecurity Course', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/information-security-advance' },
    { imgUrl: './assests/Images/ToT.webp', title: 'ToT - Training of Trainers', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/training-of-trainers' },
    { imgUrl: './assests/Images/Blockchain.webp', title: 'Blockchain', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/blockchain' },
    { imgUrl: './assests/Images/Devops.webp', title: 'DevOps', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/devops' },
    { imgUrl: './assests/Images/goverence.webp', title: 'Information Security Governance', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/information-security-basic' },
];

  // Get the container element where the divs will be appended
// ID_ით მომაქვს section კონტეინერი რომ შიგნით ჩავსვა დივები
const container = document.getElementById('Child-Container');
  // Use the map function to generate HTML for each div
// map ფუნქციას ვიყინებ ერეის დასამაპად და გამოსაჩენად viewportში
const divsInSection = ImgArray.map(({ imgUrl, title, text, link }) => `
    <article class="TbcCourses">
    <div class="TbcCourses-Text">
    <img src="${imgUrl}" alt="${title}">
    <h2>${title}</h2>
    <span>${text}</span>
    </div>
    <div class="TbcCourses-Link">
    <a href="${link}"> <img class="arrow" src="./assests/Images/arrow.png" alt="arrow">კურსის დეტალები </a>
    </div>
    </article>
`).join('');

  // Append the generated HTML to the container
//   ვუთითებ რომ containerში შიგნით გამოჩნდეს დამაპული divebi
container.innerHTML = divsInSection;

const answers = [
  {
    answers:`კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი: <br/><br/>
    I ეტაპი - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა. <br/><br/>

    II ეტაპი - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.<br/><br/>
    
    III ეტაპი - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.<br/><br/>
    
    IV ეტაპი - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.<br/><br/>
    
    
    * სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა. `
},
{
  answers:`TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.`
},
{
  answers:`პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.`
}
]


//  array of questions and their counts
// კითხვების ერეი თავის რანკით
const questions = [
  { question: 'როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?', answer:answers[0].answers, QuestionWasAsked:"30" },
  { question: 'შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?', answer: answers[1].answers, QuestionWasAsked:"27"},
  { question: 'რა ენაზე მიმდინარეობს სწავლება?', answer: 'lorem' ,QuestionWasAsked:"2"},
  { question: 'რა ღირს სწავლა პროგრამის ფარგლებში?', answer:answers[2].answers ,QuestionWasAsked:"10"},
  { question: 'შეხვედრები ფიზიკურად ტარდება თუ ონლაინ?', answer: 'lorem' ,QuestionWasAsked:"5"},
];

// Sort the questions in descending order based on QuestionAsked values
// sort ფუნქციით ვალაგებ ტოპ კითხვებს valueს მიხედვით
questions.sort((a, b) => parseInt(b.QuestionWasAsked, ) - parseInt(a.QuestionWasAsked, ));
// ვქმნი ცარიელ ერეის იმისთვის რომ ჩავყარო ტოპ 3 კითხვა
const RankedQuestions =[]

// Display the top 3 questions
// გამომაქვს ტოპ 3 კითხვა for ციკლით და ვეუბნები რომ 3 კითხვის მეტი არ გამოიტანოს
for (let i = 0; i < Math.min(3, questions.length); i++) {
  RankedQuestions.push(questions[i]);
}
// IDით ვწვდები დომში დივ ელემენტს
const Questioncontainer = document.getElementById('AskedQuestionsContainer');

// ვმაპავ ერეის რომელშიც მაქვს ტოპ 3 კითხვა და გამომაქვს viewport ში
RankedQuestions.map(({ question,answer}) => {
  Questioncontainer.innerHTML += `
<div class="accordion">
<div class="question">
<h3>${question}</h3>
<img src="./assests/Images/downarrow.png" alt="img" class="arrow">
</div>
<div class="answers">
<p>${answer}</p></div>
</div>
<div class="Underline"></div>
`
})
// ქვემოდან ზევით ასქროლვის ფუნქცია ისე როგორც თბც საიტზე
const ScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// სქროლზე ჰიდერის ფერის შეცვლა როგორც თბც საიტზე
// querySelector_ით ვწვდები ჰიდერ ელემენტს შემდეგ ვადარებ და თუ ვერტიკალური 
// სქროლი მეტია ნოლზე ამატებს class "scrolled" შემდეგ ვსტილავ cssში 
// header.scrolled
// სხვა შემთხვევაში თუ არ არის 0 ზე მეტი მაშინ წაშლის
document.addEventListener("scroll", ()=>{
  const header =document.querySelector("header")
  if(window.scrollY > 0){
    header.classList.add("scrolled")
  }else{
    header.classList.remove("scrolled")
  }
})
// slider_ის ლოგიკა
// slider სურათების ერეი
const images = [
  "./assests/Sliderimgs/usaid.webp",
  "./assests/Sliderimgs/space.webp",
  "./assests/Sliderimgs/tnt.webp",
  "./assests/Sliderimgs/Tegeta.webp",
  "./assests/Sliderimgs/spectre.webp",
  "./assests/Sliderimgs/tbclizing.webp",
  "./assests/Sliderimgs/ufc.webp",
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


// ხშირად დასმული კითხვების ფუნქციონალი
const accordions= document.querySelectorAll(".accordion");

accordions.forEach((accordion)=>{
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
  });
});



// burgerMenu ს ფუნქციონალი კლიკზე კლასის დადება და გამოჩენა მენიუში
const burgermenuDiv = document.querySelector(".BurgerMenu");
const TbcPagesDiv = document.querySelector(".TbcPages");
const Fline = document.querySelector(".F-line");
const Secline = document.querySelector(".Sec-line");
const Lastline = document.querySelector(".Last-line");

burgermenuDiv.addEventListener("click", () => {
  TbcPagesDiv.classList.toggle("activeMenu");

  // Check if activeMenu class is present
  // არის თუ არა activemenu
  const isActiveMenu = TbcPagesDiv.classList.contains("activeMenu");

  // Apply or remove styles based on the presence of activeMenu class
  // თუ activemenu გახდა კლიკის შემდგომ დივი ვადებ სტილებს
  const fLineDegree = isActiveMenu ? "54deg" : "0deg";
  const secLineDegree = isActiveMenu ? "144deg" : "0deg";
  const lastLineDegree = isActiveMenu ? "56deg" : "0deg";
  Fline.style.transition = "transform 0.5s ease"; 
  Fline.style.transform = `rotate(${fLineDegree})`;
  Fline.style.backgroundColor = isActiveMenu ? 'lightgray' : '';
  

  Secline.style.transition = "transform 0.5s ease";
  Secline.style.transform = `rotate(${secLineDegree})`;
  Secline.style.backgroundColor = isActiveMenu ? 'lightgray' : '';

  Lastline.style.transition = "transform 0.5s ease";
  Lastline.style.transform = `rotate(${lastLineDegree})`;
  Lastline.style.backgroundColor = isActiveMenu ? 'lightgray' : '';
})
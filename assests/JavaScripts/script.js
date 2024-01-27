"use strict"

// TBC COURSES

// Create an array of data for each div/
// array სურათებისთვის, ტექსტისთვის და "კურსის დეტალები" ლინკისთვის

const ImgArray = [
  { imgUrl: './assests/Images/ios.png', title: 'iOS Development', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/ios-development' },
  { imgUrl: './assests/Images/ReactImg.png', title: 'React', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/react' },
  { imgUrl: './assests/Images/phytonimg.png', title: 'Intro to Phyton', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/python-basic' },
  { imgUrl: './assests/Images/advancedphyton.png', title: 'Advanced Phyton', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/python-advance' },
  { imgUrl: './assests/Images/cyber.png', title: 'Advanced Cybersecurity Course', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/information-security-advance' },
  { imgUrl: './assests/Images/ToT.png', title: 'ToT - Training of Trainers', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/training-of-trainers' },
  { imgUrl: './assests/Images/Blockchain.png', title: 'Blockchain', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/blockchain' },
  { imgUrl: './assests/Images/Devops.png', title: 'DevOps', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/devops' },
  { imgUrl: './assests/Images/goverence.png', title: 'Information Security Governance', text: 'რეგისტრაცია დასრულებულია', link: 'https://www.tbcacademy.ge/usaid/information-security-basic' },
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

// ACCORDION

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
  
  // ხშირად დასმული კითხვების ფუნქციონალი
  const accordions= document.querySelectorAll(".accordion");
  accordions.forEach((accordion)=>{
      accordion.addEventListener("click", () => {
      accordion.classList.toggle("active");
      });
  });

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
"use strict"



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
"use strict"
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
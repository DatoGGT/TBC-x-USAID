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

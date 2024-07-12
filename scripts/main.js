//------------------ toggle item navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
console.log(navbar)

menuIcon.onclick=()=>{
    navbar.classList.toggle("active");
    
    menuIcon.classList.toggle("bx-x");
    console.log("_+_")
    
};
// -------------------Scroll section active links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = ()=>{
    sections.forEach(sec => {
        let Top = window.scrollY;
        let offset = sec.offsetTop-150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id')
        

        if ( Top >= offset && Top < offset + heigth){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+ id +']').classList.add('active')
            })
        }

    })
}


// STYCKY NAVBAR

let header=document.querySelector('header')
header.classList.toggle('sticky', window.scrollY > 100);


// REMOVETOGGLE ICON AND NAVBAR WHEN CLICK WHEN CLICK NAVBAR LINK (SCROLL)

menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')

//---------- SCROLL REVEAL

ScrollReveal({
    reset:true,
distance:"80px",
duration: 2000,
delay:200
})

ScrollReveal().reveal(".home-content, .heading", {origin:'top'})
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, Contact form", {origin:'bottom'})
ScrollReveal().reveal(".home-content h1, .About-img", {origin:'left'})
ScrollReveal().reveal(".home-content p, .About-content", {origin:'right'})



// multipleText


const typed=new Typed(".multiple-text", {
    strings:[
        'Frontend Engeneer',
        'Web Developer'
    ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
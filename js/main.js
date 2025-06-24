const button = document.querySelector("#toggle");
const nav = document.querySelector("nav");

button.onclick = () => {
    nav.classList.toggle("-translate-x-full")
    button.firstElementChild.classList.toggle("fa-xmark")
}
window.onresize = () => {
    if (window.innerWidth >= 400) {
        nav.classList.add("-translate-x-full")
        button.firstElementChild.classList.remove("fa-xmark")
    }
}

const typedText = document.querySelector("#typed-text")
const words = ['developer', 'freelancer', 'photographer']

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typing() {
    const currentWord = words[wordIndex]
    const currentChar = currentWord.substring(0, charIndex)
    typedText.textContent = currentChar

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typing, 300);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typing, 300)
    } else {
        isDeleting = !isDeleting
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex
        setTimeout(typing, 300)
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(words.length) setTimeout(typing, 300);
})


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin: 30,
    loop:true,
    autoplay: true,
    responsive: {
        0: {
            items:1
        },
        480: {
            items:2
        },
        900: {
            items:3
        }
    }
  });
});

const up = document.querySelector("#up")
up.onclick = () => {
    window.scrollTo(0,0);
}

window.onscroll = () => {
    if(window.scrollY >= 900) {
        up.classList.remove("hidden")
    } else {
        up.classList.add("hidden")
    }
}


const links = document.querySelectorAll('nav ul.menu a')
const sections = document.querySelectorAll('section')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            let activeLink = entry.target.getAttribute('id')
            links.forEach(link => link.classList.remove('active'));
            document.querySelector(`nav ul.menu a[href="#${activeLink}"]`).classList.add('active');
        }
    })
}, {threshold: 0.5})
sections.forEach(section => observer.observe(section))  


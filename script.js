const words = ["Web Developer", "Frontend Developer", "Future IT Engineer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    currentWord = words[i];


if(isDeleting) {
    document.getElementById("typing").textContent = currentWord.substring(0, j--);
} else {
    document.getElementById("typing").textContent = currentWord.substring(0, j++);
}

if(!isDeleting && j === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
}

if(isDeleting && j === 0)  {
    isDeleting = false;
    i = (i + 1) % words.length;
}

setTimeout(type, isDeleting ? 50 : 120);
}

type();

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.hidden').forEach(el => {
    observer.observe(el);
});
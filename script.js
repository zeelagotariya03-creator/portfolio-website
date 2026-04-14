const words = ["Full Stack Developer", "Creative Builder", "Future IT Engineer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    currentWord = words[i];

    document.getElementById("typing").textContent = currentWord.substring(0, j);

if(!isDeleting) {
   j++;
   if(j > currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
}
} else {
    j--;
    if(j===0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }
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

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

tsParticles.load("particles-js", {
    "particles": {
        "number": {
            "value": 60},
        "size": {
            "value": 2},
        "move": {enable: true, speed: 1},
        "links": {enable: true, distance: 140},
        "opacity": {value: 0.4}
    }
});
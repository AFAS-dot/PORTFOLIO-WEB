
const texts = ["Ahmad Farouk Ado", "A Web Developer", "A Lifelong Learner"];
let textIndex = 0;
let charIndex = 0;
const speed = 100;
const typedText = document.getElementById("typedText");

function type() {
    if (charIndex < texts[textIndex].length) {
        typedText.textContent += texts[textIndex].charAt(charIndex++);
        setTimeout(type, speed);
    } else {
        setTimeout(() => {
            typedText.textContent = "";
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
            type();
        }, 1500);
    }
}

window.addEventListener("load", type);


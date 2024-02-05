// Define the text options
const textOptions = ["Software Developer", "Web Developer", "UI & UX Designer"];
        
// Get the target element
const secTextElement = document.querySelector(".sec-text");

let currentIndex = 0;
let currentText = textOptions[currentIndex];
let charIndex = 0;
let isTyping = true;

//typing effect
function typeText() {
    secTextElement.textContent = currentText.substring(0, charIndex);
    charIndex++;

    if (charIndex > currentText.length) {
        isTyping = false;
        setTimeout(eraseText, 300);
    } else {
        setTimeout(typeText, 100);
    }
}

//erasing effect
function eraseText() {
    secTextElement.textContent = currentText.substring(0, charIndex);
    charIndex--;

    if (charIndex < 0) {
        isTyping = true;
        currentIndex = (currentIndex + 1) % textOptions.length;
        currentText = textOptions[currentIndex];
        setTimeout(typeText, 300);
    } else {
        setTimeout(eraseText, 100);
    }
}

// Start the typing animation
typeText();

// Dropdown menu
const dropdowns = document.querySelectorAll('.dropdown');

// Dropdown loop
dropdowns.forEach(dropdown => {
    const menuIcon = dropdown.querySelector('.menu-icon');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');

    // Click event
    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            menu.classList.remove('menu-open');

            options.forEach(opt => {
                opt.classList.remove('active');
            });

            option.classList.add('active');
        });
    });
});
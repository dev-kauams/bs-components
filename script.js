const allButtons = document.querySelectorAll('.nav-button');
const allSections = document.querySelectorAll('.component-section');

allButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetSelector = button.getAttribute('data-target');
        const targetElement = document.querySelector(targetSelector);

        const alreadyActive = targetElement.classList.contains('active');

        allSections.forEach(section => section.classList.remove('active'));

        targetElement.classList.add('active');
    });
});
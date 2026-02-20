const allButtons = document.querySelectorAll('.nav-button');
const allSections = document.querySelectorAll('.component-section');
const glider = document.querySelector('.glider');

allButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const targetSelector = button.getAttribute('data-target');
        const targetElement = document.querySelector(targetSelector);

        allButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');

        if (glider) {
            glider.style.transform = `translateX(${index * 100}%)`;
        }
        
        allSections.forEach(section => section.classList.remove('active'));
        if (targetElement) {
            targetElement.classList.add('active');
        }
    });
});

// atualiza imagem do modal com base no atributo data-img do botão
document.querySelectorAll('.btn-open-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const imgSrc = btn.getAttribute('data-img');
        const modalImg = document.getElementById('modalImage');
        if (modalImg && imgSrc) modalImg.src = imgSrc;
    });
});
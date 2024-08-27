document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'oceans20' && password === 'oceans20') {
            window.location.href = 'index.html';
            alert('Logado com sucesso. Clique em "ok" para voltar ao site.');
        } else {
            alert('Credenciais incorretas.');
        }
    });

    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let currentSlide = 0;

    function updateCarousel() {
        const newTransform = `translateX(-${currentSlide * 100}%)`;
        document.querySelector('.carousel-container').style.transform = newTransform;
    }

    prevButton.addEventListener('click', function() {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function() {
        currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
        updateCarousel();
    });

    updateCarousel();
});

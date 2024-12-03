let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Muda automaticamente para o próximo slide a cada 10 segundos
setInterval(nextSlide, 10000);

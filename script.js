let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
    });

    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

function currentSlide(index) {
    showSlide(index - 1);
}
showSlide(currentIndex);

setInterval(nextSlide, 5000); // Change image every 5 seconds

// Additional animation effect
slides.forEach(slide => {
    slide.addEventListener('mouseenter', () => {
        slide.style.transform = 'scale(1.05)';
        slide.style.transition = 'transform 0.3s ease';
    });

    slide.addEventListener('mouseleave', () => {
        slide.style.transform = 'scale(1)';
    });
});

function downloadApp() {
    alert('Please wait the page will show click okay to go to the page')
}
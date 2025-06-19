const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]; //Замените на имена ваших изображений
let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const imageNumber = document.getElementById("image-number");

function updateImage() {
    sliderImage.src = images[currentIndex];
    imageNumber.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

updateImage(); // Инициализация

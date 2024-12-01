const image = document.getElementById('image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next'); 1 
const imageArray = ['ss1.png', 'ss1b.png', 'ss2.png' , 'ss2b.png','ss3.png','ss3b.png']; // Replace with your image paths
let currentImageIndex = 0;

function showImage(index) {
    image.src = imageArray[index];
}

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + imageArray.length) % imageArray.length;
    showImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % imageArray.length;
    showImage(currentImageIndex);
});

showImage(currentImageIndex);
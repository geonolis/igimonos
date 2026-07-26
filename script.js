// Image Array matching exact requested order
const galleryImages = [
    { src: './0-κατοψη.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/0-κατοψη.jpg', title: '0 - Κάτοψη Διαμερίσματος' },
    { src: './1-IMG_20260725_192051.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/1-IMG_20260725_192051.jpg', title: '1 - Φωτογραφία Διαμερίσματος' },
    { src: './1.5-IMG_20260725_183235.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/1.5-IMG_20260725_183235', title: '1.5 - Φωτογραφία Διαμερίσματος' },
    { src: './2-IMG_20260725_191949.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/2-IMG_20260725_191949.jpg', title: '2 - Φωτογραφία Διαμερίσματος' },
    { src: './3-IMG_20260725_182928.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/3-IMG_20260725_182928.jpg', title: '3 - Φωτογραφία Διαμερίσματος' },
    { src: './4-IMG_20260725_182855.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/4-IMG_20260725_182855.jpg', title: '4 - Φωτογραφία Διαμερίσματος' },
    { src: './5-IMG_20260725_182642.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/5-IMG_20260725_182642.jpg', title: '5 - Φωτογραφία Διαμερίσματος' },
    { src: './6-IMG_20260725_193302.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/6-IMG_20260725_193302.jpg', title: '6 - Φωτογραφία Διαμερίσματος' },
    { src: './7-IMG_20260725_182818.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/7-IMG_20260725_182818.jpg', title: '7 - Φωτογραφία Διαμερίσματος' },
    { src: './8-IMG_20260725_184943 copy.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/8-IMG_20260725_184943%20copy.jpg', title: '8 - Φωτογραφία Διαμερίσματος' },
    { src: './9-IMG_20260725_193232.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/9-IMG_20260725_193232.jpg', title: '9 - Φωτογραφία Διαμερίσματος' },
    { src: './10-IMG_20260725_193343.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/10-IMG_20260725_193343.jpg', title: '10 - Φωτογραφία Διαμερίσματος' },
    { src: './11-IMG_20260725_183829.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/11-IMG_20260725_183829.jpg', title: '11 - Φωτογραφία Διαμερίσματος' },
    { src: './12-IMG_20260725_183841.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/12-IMG_20260725_183841.jpg', title: '12 - Φωτογραφία Διαμερίσματος' },
    { src: './13-IMG_20260725_184014.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/13-IMG_20260725_184014.jpg', title: '13 - Φωτογραφία Διαμερίσματος' },
    { src: './14-IMG_20260725_183924.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/14-IMG_20260725_183924.jpg', title: '14 - Φωτογραφία Διαμερίσματος' },
    { src: './15-IMG_20260725_183801.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/15-IMG_20260725_183801.jpg', title: '15 - Φωτογραφία Διαμερίσματος' },
    { src: './16-IMG_20260725_183613.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/16-IMG_20260725_183613.jpg', title: '16 - Φωτογραφία Διαμερίσματος' },
    { src: './17-IMG_20260725_183731.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/17-IMG_20260725_183731.jpg', title: '17 - Φωτογραφία Διαμερίσματος' },
    { src: './18-IMG_20260725_183542.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/18-IMG_20260725_183542.jpg', title: '18 - Φωτογραφία Διαμερίσματος' },
    { src: './19-IMG_20260725_183507.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/19-IMG_20260725_183507.jpg', title: '19 - Φωτογραφία Διαμερίσματος' },
    { src: './20-IMG_20260725_183353.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/20-IMG_20260725_183353.jpg', title: '20 - Φωτογραφία Διαμερίσματος' },
    { src: './21-IMG_20260725_183010.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/21-IMG_20260725_183010.jpg', title: '21 - Φωτογραφία Διαμερίσματος' },
    { src: './22-IMG_20260725_184753.jpg', fallback: 'https://woocommerce-1520420-5854700.cloudwaysapps.com/tmp/pht/22-IMG_20260725_184753.jpg', title: '22 - Φωτογραφία Διαμερίσματος' }
];

let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const item = galleryImages[currentImageIndex];

    lightboxImg.src = item.src;
    lightboxImg.onerror = () => {
        lightboxImg.src = item.fallback;
    };
    lightboxCaption.textContent = `${item.title} (${currentImageIndex + 1} / ${galleryImages.length})`;
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
});

// Form Submission Handler
function handleFormSubmit(event) {
    event.preventDefault();
    const successMsg = document.getElementById('successMsg');
    successMsg.style.display = 'block';
    event.target.reset();

    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 6000);
}

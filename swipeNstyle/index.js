// Navigation scroll behavior
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.style.transform = 'translateY(-100%)';
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Product data
const products = [
    { name: 'Street Smart Hoodie', price: '$20.00', description: 'Urban Sweat Shirt', image: 'media/3.png' },
    { name: 'City of Shirts', price: '$25.00', description: 'Classic Streetwear', image: 'media/5.png' },
    { name: 'Speed Tee', price: '$30.00', description: 'Minimal Y2K Style', image: 'media/4.png' },
    { name: 'Grunge Denim', price: '$45.00', description: 'Vintage Wash', image: 'media/6.png' },
  ];
// Generate product cards
const productsContainer = document.getElementById('products');
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className   
 = 'product-card';
    productCard.innerHTML = `
        <div class="product-image">

            <img src="${product.image}" alt="${product.name}" class="product-image">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <p>${product.description}</p>
        </div>
    `;
    productsContainer.appendChild(productCard);
});

// Swipe functionality for products
let startX;
let scrollLeft;
const slider = document.querySelector('.products-container');

// Handle mouse and touch events for swiping
slider.addEventListener('mousedown', (e) => {
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    startX = null;
});

slider.addEventListener('mouseup', () => {
    startX = null;
});

slider.addEventListener('mousemove', (e) => {
    if (!startX) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile swipe
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchmove', (e) => {
    if (!startX) return;
    e.preventDefault();
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('touchend', () => {
    startX = null;
});

// Handle two-finger scroll and mouse wheel scrolling
slider.addEventListener('wheel', (e) => {
    e.preventDefault();
    slider.scrollLeft += e.deltaX * 2; // Adjust the multiplier as needed
});

// Scroll-to-top button functionality
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

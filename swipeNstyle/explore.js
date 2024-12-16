const products = [
    { name: 'Street Smart Hoodie', price: 2000, description: 'Urban Sweat Shirt', image: 'media/3.png' },
    { name: 'City of Shirts', price: 2500, description: 'Classic Streetwear', image: 'media/4.png' },
    { name: 'Speed Tee', price: 3000, description: 'Minimal Y2K Style', image: 'media/5.png' },
    { name: 'Speed Tee', price: 1000, description: 'Minimal Y2K Style', image: 'media/7.png' },
    { name: 'Speed Tee', price: 9000, description: 'Minimal Y2K Style', image: 'media/8.png' },
    { name: 'Speed Tee', price: 34000, description: 'Minimal Y2K Style', image: 'media/9.png' },
];

let currentProductIndex = 0;
let totalCost = 0;

const productImage = document.getElementById('product-image');
const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const productDescription = document.getElementById('product-description');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

function updateProduct() {
    const product = products[currentProductIndex];
    productImage.src = product.image;
    productName.textContent = product.name;
    productPrice.textContent = `₹${product.price}`;
    productDescription.textContent = product.description;
}

function swipe(action) {
    if (action === 'accept') {
        const product = products[currentProductIndex];
        totalCost += product.price;

        const cartItem = document.createElement('div');
        cartItem.textContent = `${product.name} - ₹${product.price}`;
        cartItems.appendChild(cartItem);

        cartTotal.textContent = `Total: ₹${totalCost}`;
    }

    // Move to next product
    currentProductIndex = (currentProductIndex + 1) % products.length;
    updateProduct();
}

// Event listeners
document.getElementById('swipe-left').addEventListener('click', () => swipe('reject'));
document.getElementById('swipe-right').addEventListener('click', () => swipe('accept'));

// Initialize first product
updateProduct();

// Cart Toggle Functionality
const cartSection = document.querySelector('.cart-section');
const cartNavButton = document.querySelector('a[href="#cart"]');

let isCartVisible = true; // State to track cart visibility

cartNavButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    isCartVisible = !isCartVisible; // Toggle visibility state
    cartSection.style.display = isCartVisible ? 'block' : 'none'; // Show or hide the cart
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

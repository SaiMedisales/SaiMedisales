document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Use async/await for cleaner code and better error handling
    async function fetchProducts() {
        try {
            const response = await fetch('products.json');
            // Check if the network request was successful
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const products = await response.json();
            displayProducts(products);
            setupFilter(products);
        } catch (error) {
            console.error('Failed to fetch products:', error);
            productsContainer.innerHTML = '<p>Sorry, could not load products at this time.</p>';
        }
    }

    function displayProducts(products) {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            // Create elements programmatically instead of using innerHTML
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.dataset.category = product.category;

            const productName = document.createElement('h3');
            productName.textContent = product.name;

            const productDescription = document.createElement('p');
            productDescription.textContent = product.description;

            productCard.appendChild(productName);
            productCard.appendChild(productDescription);
            productsContainer.appendChild(productCard);
        });
    }

    function setupFilter(products) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;
                const filteredProducts = products.filter(product => {
                    return category === 'all' || product.category === category;
                });
                displayProducts(filteredProducts);
            });
        });
    }

    fetchProducts();
});

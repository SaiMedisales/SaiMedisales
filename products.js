document.addEventListener('DOMContentLoaded', () => {
    const productListDiv = document.getElementById('product-list');
    const filterButtons = document.querySelectorAll('.filter-btn'); // Select all filter buttons
    let allProducts = []; // To store all products fetched from JSON

    // Function to fetch products from products.json
    async function fetchProducts() {
        try {
            const response = await fetch('products.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            allProducts = await response.json();
            displayProducts(allProducts); // Display all products initially
        } catch (error) {
            console.error('Error fetching products:', error);
            productListDiv.innerHTML = '<p class="text-red-400 text-center text-xl">Failed to load products. Please try again later.</p>';
        }
    }

    // Function to create and display product cards
    function displayProducts(productsToDisplay) {
        productListDiv.innerHTML = ''; // Clear existing products

        if (productsToDisplay.length === 0) {
            productListDiv.innerHTML = '<p class="text-muted text-center text-lg col-span-full">No products found for this category.</p>';
            return;
        }

        productsToDisplay.forEach(product => {
            const productCard = `
                <div class="product-card p-4 rounded-xl shadow-lg section-card text-center">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-md mb-4">
                    <h3 class="text-xl font-semibold section-heading mb-2">${product.name}</h3>
                    <p class="text-muted text-sm mb-2">${product.category}</p>
                    <p class="text-light text-md mb-4">${product.description}</p>
                    <div class="text-accent text-2xl font-bold mb-4">${product.price}</div>
                    <p class="text-muted text-sm mb-4">Availability: ${product.availability}</p>
                    ${product.brand ? `<p class="text-muted text-xs mb-2">Brand: ${product.brand}</p>` : ''}

                    ${product.details ? `
                        <div class="product-details text-muted text-sm mt-4">
                            ${Object.entries(product.details).map(([key, value]) => `
                                <p><strong>${key.replace(/_/g, ' ')}:</strong> ${Array.isArray(value) ? value.join(', ') : value}</p>
                            `).join('')}
                        </div>
                    ` : ''}

                    <button class="btn btn-primary w-full mt-4">View Details</button>
                </div>
            `;
            productListDiv.innerHTML += productCard; // Add product card to the list
        });
    }

    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active-filter'));
            // Add 'active' class to the clicked button
            event.target.classList.add('active-filter');

            const category = event.target.dataset.category; // Get category from data-category attribute

            let filteredProducts = [];
            if (category === 'All Products') {
                filteredProducts = allProducts;
            } else {
                filteredProducts = allProducts.filter(product => product.category === category);
            }
            displayProducts(filteredProducts);
        });
    });

    // Fetch products when the page loads
    fetchProducts();
});
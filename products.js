// products.js
document.addEventListener('DOMContentLoaded', () => {

    const products = [
        {
            name: "Veterinary Medicine 1",
            description: "A highly effective veterinary medicine for common animal ailments.",
            category: "veterinary",
            imageUrl: "https://via.placeholder.com/300x200.png?text=Veterinary+Medicine+1"
        },
        {
            name: "Dairy Nutrition Supplement",
            description: "A premium supplement to improve the health and milk yield of dairy animals.",
            category: "dairy",
            imageUrl: "https://via.placeholder.com/300x200.png?text=Dairy+Nutrition"
        },
        {
            name: "Poultry Feed Additive",
            description: "An additive that promotes healthy growth and egg production in poultry.",
            category: "poultry",
            imageUrl: "https://via.placeholder.com/300x200.png?text=Poultry+Product"
        },
        {
            name: "Pet Care Shampoo",
            description: "A gentle, pH-balanced shampoo for dogs and cats.",
            category: "pet",
            imageUrl: "https://via.placeholder.com/300x200.png?text=Pet+Care+Product"
        },
        {
            name: "Veterinary Antibiotic",
            description: "A broad-spectrum antibiotic for treating bacterial infections in livestock.",
            category: "veterinary",
            imageUrl: "https://via.placeholder.com/300x200.png?text=Veterinary+Medicine+2"
        },
        {
            name: "Dairy Calcium Gel",
            description: "An oral calcium gel to prevent milk fever in cows.",
            category: "dairy",
            imageUrl: "https://via.placeholder.com/300x200.png?text=Dairy+Nutrition+2"
        },
        {
            name: "Poultry Vaccine",
            description: "Essential vaccine for preventing common poultry diseases.",
            category: "poultry",
            imageUrl: "https://via.placeholder.com/300x200.png?text=Poultry+Product+2"
        },
        {
            name: "Pet Food for Puppies",
            description: "Nutritious dry food specially formulated for the growth of puppies.",
            category: "pet",
            imageUrl: "https://via.placeholder.com/300x200.png?text=Pet+Care+Product+2"
        }
    ];

    const productsContainer = document.getElementById('products-container');
    const filterButtons = document.getElementById('filter-buttons');

    function renderProducts(filteredProducts) {
        productsContainer.innerHTML = ''; // Clear existing products
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card bg-white rounded-xl shadow-lg overflow-hidden fade-in card-hover';
            productCard.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold font-poppins text-gray-800 mb-2">${product.name}</h3>
                    <p class="text-gray-600 mb-4">${product.description}</p>
                    <a href="#" class="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Learn More
                    </a>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });
    }

    // Initial render of all products
    renderProducts(products);

    // Event listener for filter buttons
    filterButtons.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active', 'bg-blue-600', 'text-white');
                btn.classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-300');
            });

            // Add active class to the clicked button
            e.target.classList.add('active', 'bg-blue-600', 'text-white');
            e.target.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-300');

            const category = e.target.dataset.category;

            if (category === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(product => product.category === category);
                renderProducts(filtered);
            }
        }
    });

    // Fade-in animation on scroll
    const handleScrollAnimations = () => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('load', handleScrollAnimations);
});

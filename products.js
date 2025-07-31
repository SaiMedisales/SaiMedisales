document.addEventListener('DOMContentLoaded', function() {
    const productsData = [
        // Example Products - Add your 4000 products here
        {
            id: 1,
            name: "Bovine Multi-Vitamin Supplement",
            description: "Essential vitamins and minerals for optimal cattle health and productivity. Promotes growth and immunity.",
            imageUrl: "https://placehold.co/400x300/1a202c/D4AF37?text=Cattle+Sup", // Replace with your image
            detailUrl: "#" // Link to a product detail page if you create one
        },
        {
            id: 2,
            name: "Poultry Growth Booster",
            description: "Formulated to enhance rapid growth and improve feed conversion in broiler chickens. Supports bone development.",
            imageUrl: "https://placehold.co/400x300/1a202c/D4AF37?text=Poultry+Boost", // Replace with your image
            detailUrl: "#"
        },
        {
            id: 3,
            name: "Canine Joint Care Chews",
            description: "Delicious chews supporting hip and joint health for dogs of all ages. Contains glucosamine and chondroitin.",
            imageUrl: "https://placehold.co/400x300/1a202c/D4AF37?text=Dog+Joint", // Replace with your image
            detailUrl: "#"
        },
        {
            id: 4,
            name: "Equine Digestive Aid",
            description: "Natural blend to support healthy digestion and gut flora in horses. Reduces colic risk.",
            imageUrl: "https://placehold.co/400x300/1a202c/D4AF37?text=Horse+Digestion", // Replace with your image
            detailUrl: "#"
        },
        {
            id: 5,
            name: "Feline Dental Treats",
            description: "Crunchy treats designed to reduce plaque and tartar buildup in cats, promoting fresher breath.",
            imageUrl: "https://placehold.co/400x300/1a202c/D4AF37?text=Cat+Dental", // Replace with your image
            detailUrl: "#"
        },
        {
            id: 6,
            name: "Dairy Cattle Probiotic",
            description: "Improves milk production and prevents digestive upsets in dairy cows. Enhances nutrient absorption.",
            imageUrl: "https://placehold.co/400x300/1a202c/D4AF37?text=Dairy+Probiotic", // Replace with your image
            detailUrl: "#"
        },
        // ... Add more products following this structure ...
        // Example for adding more products (copy-paste and modify):
        /*
        {
            id: 7,
            name: "New Product Name",
            description: "Description of your new product.",
            imageUrl: "path/to/your/image.jpg",
            detailUrl: "#"
        },
        */
    ];

    const productListContainer = document.getElementById('product-list');

    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card'; // This class is defined in style.css

        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="product-card-title">${product.name}</h3>
                <p class="product-card-description">${product.description}</p>
                <a href="${product.detailUrl}" class="product-card-button">View Details</a>
            </div>
        `;
        return productCard;
    }

    // Function to render all products
    function renderProducts() {
        if (productListContainer) {
            productListContainer.innerHTML = ''; // Clear existing content
            productsData.forEach(product => {
                const card = createProductCard(product);
                productListContainer.appendChild(card);
            });
        }
    }

    // Call renderProducts when the page loads
    renderProducts();
});
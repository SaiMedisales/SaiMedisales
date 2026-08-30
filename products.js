const categoryConfig = {
    veterinary: {
        label: 'Veterinary Medicines',
        icon: 'fa-cow',
        color: 'bg-blue-600',
        categories: ['Large Animal Medicines']
    },
    dairy: {
        label: 'Dairy Nutrition',
        icon: 'fa-leaf',
        color: 'bg-green-600',
        categories: ['Dairy Nutrition']
    },
    poultry: {
        label: 'Poultry Products',
        icon: 'fa-feather',
        color: 'bg-amber-500',
        categories: ['Poultry & Birds']
    },
    pet: {
        label: 'Pet Care',
        icon: 'fa-paw',
        color: 'bg-purple-600',
        categories: ['Pet Food', 'Pet Medicines & Accessories']
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    const productsContainer = document.getElementById('products-container');
    const filterButtons = document.getElementById('filter-buttons');
    const productsSummary = document.getElementById('products-summary');

    if (!productsContainer || !filterButtons || !productsSummary) return;

    let products = [];
    let selectedCategory = getRequestedCategory();

    function getRequestedCategory() {
        const requested = new URLSearchParams(window.location.search).get('category');
        return requested && categoryConfig[requested] ? requested : 'all';
    }

    function getProductCategory(product) {
        return Object.entries(categoryConfig).find(([, config]) =>
            config.categories.includes(product.category)
        )?.[0] || 'veterinary';
    }

    function formatDetailKey(key) {
        return key
            .replace(/_/g, ' ')
            .replace(/\b\w/g, character => character.toUpperCase());
    }

    function createProductFallback(product, category) {
        const fallback = document.createElement('div');
        fallback.className = `product-fallback ${category.color} text-white flex flex-col items-center justify-center p-6 text-center`;

        const icon = document.createElement('i');
        icon.className = `fas ${category.icon} text-5xl mb-3`;
        icon.setAttribute('aria-hidden', 'true');

        const text = document.createElement('span');
        text.className = 'font-semibold';
        text.textContent = `${product.category} product`;

        fallback.append(icon, text);
        return fallback;
    }

    function createProductVisual(product, category) {
        const visual = document.createElement('div');
        visual.className = 'product-visual bg-slate-100';
        if (product.image) {
            const image = document.createElement('img');
            image.src = product.image;
            image.alt = product.name;
            image.loading = 'lazy';
            image.addEventListener('error', () => {
                visual.replaceChildren(createProductFallback(product, category));
            }, { once: true });
            visual.append(image);
        } else {
            visual.append(createProductFallback(product, category));
        }

        return visual;
    }

    function createProductCard(product) {
        const categoryKey = getProductCategory(product);
        const category = categoryConfig[categoryKey];
        const card = document.createElement('article');
        card.className = 'product-card bg-white rounded-xl shadow-lg overflow-hidden card-hover fade-in visible';

        const body = document.createElement('div');
        body.className = 'p-6';

        const categoryLabel = document.createElement('p');
        categoryLabel.className = 'text-sm font-semibold text-blue-700 mb-2';
        categoryLabel.textContent = category.label;

        const name = document.createElement('h3');
        name.className = 'text-xl font-bold font-poppins text-gray-800 mb-2';
        name.textContent = product.name;

        const description = document.createElement('p');
        description.className = 'text-gray-600 mb-4';
        description.textContent = product.description;

        const productMeta = document.createElement('div');
        productMeta.className = 'flex flex-wrap items-center justify-between gap-3 mb-4';

        const price = document.createElement('span');
        price.className = 'text-lg font-bold text-blue-700';
        price.textContent = product.price;

        const availability = document.createElement('span');
        availability.className = 'rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800';
        availability.textContent = product.availability;
        productMeta.append(price, availability);

        const details = document.createElement('details');
        details.className = 'mb-5 rounded-lg bg-slate-50 p-3 text-sm text-gray-700';
        const summary = document.createElement('summary');
        summary.className = 'cursor-pointer font-semibold text-blue-700';
        summary.textContent = 'Product information';
        details.append(summary);

        const detailList = document.createElement('dl');
        detailList.className = 'mt-3 space-y-2';
        Object.entries(product.details || {}).forEach(([key, value]) => {
            const group = document.createElement('div');
            const label = document.createElement('dt');
            label.className = 'font-medium text-gray-800';
            label.textContent = formatDetailKey(key);
            const detail = document.createElement('dd');
            detail.textContent = Array.isArray(value) ? value.join(', ') : value;
            group.append(label, detail);
            detailList.append(group);
        });
        details.append(detailList);

        const enquiry = document.createElement('a');
        enquiry.className = 'inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors';
        enquiry.href = `https://wa.me/919822514631?text=${encodeURIComponent(`Hello Sai Medisales, I would like information about ${product.name}.`)}`;
        enquiry.target = '_blank';
        enquiry.rel = 'noopener';
        enquiry.textContent = 'Ask about this product';

        body.append(categoryLabel, name, description, productMeta, details, enquiry);
        card.append(createProductVisual(product, category), body);
        return card;
    }

    function getFilteredProducts() {
        return selectedCategory === 'all'
            ? products
            : products.filter(product => getProductCategory(product) === selectedCategory);
    }

    function updateFilterButtons() {
        filterButtons.querySelectorAll('.filter-btn').forEach(button => {
            const isActive = button.dataset.category === selectedCategory;
            button.setAttribute('aria-pressed', String(isActive));
            button.classList.toggle('active', isActive);
            button.classList.toggle('bg-blue-600', isActive);
            button.classList.toggle('text-white', isActive);
            button.classList.toggle('bg-white', !isActive);
            button.classList.toggle('text-gray-700', !isActive);
            button.classList.toggle('border', !isActive);
            button.classList.toggle('border-gray-300', !isActive);
        });
    }

    function updateUrl() {
        const url = new URL(window.location.href);
        if (selectedCategory === 'all') {
            url.searchParams.delete('category');
        } else {
            url.searchParams.set('category', selectedCategory);
        }
        window.history.replaceState({}, '', url);
    }

    function renderProducts() {
        const filteredProducts = getFilteredProducts();
        productsContainer.replaceChildren(...filteredProducts.map(createProductCard));
        const label = selectedCategory === 'all' ? 'all categories' : categoryConfig[selectedCategory].label;
        productsSummary.textContent = `${filteredProducts.length} product${filteredProducts.length === 1 ? '' : 's'} shown for ${label}.`;
        updateFilterButtons();
    }

    filterButtons.addEventListener('click', event => {
        const button = event.target.closest('.filter-btn');
        if (!button || !filterButtons.contains(button)) return;
        selectedCategory = button.dataset.category;
        updateUrl();
        renderProducts();
    });

    try {
        const response = await fetch('products.json');
        if (!response.ok) throw new Error(`Unable to load products: ${response.status}`);
        const data = await response.json();
        if (!Array.isArray(data)) throw new Error('Invalid product catalogue data.');
        products = data;
        renderProducts();
    } catch (error) {
        console.error('Product catalogue error:', error);
        productsContainer.replaceChildren();
        const message = document.createElement('p');
        message.className = 'col-span-full rounded-lg bg-red-50 p-5 text-center text-red-700';
        message.textContent = 'The product catalogue is temporarily unavailable. Please contact us for product information.';
        productsContainer.append(message);
        productsSummary.textContent = 'The product catalogue is temporarily unavailable.';
    }
});

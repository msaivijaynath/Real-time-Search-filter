// ============================================
// DUMMY DATA — Your products as JS objects
// ============================================
const products = [
    {
        id: 1,
        name: "Wireless Noise-Cancelling Headphones",
        description: "Premium over-ear headphones with 40-hour battery life and deep bass.",
        price: 249.99,
        category: "Electronics",
        rating: 4.8,
        emoji: "🎧"
    },
    {
        id: 2,
        name: "Minimalist Leather Backpack",
        description: "Handcrafted genuine leather backpack with laptop compartment.",
        price: 129.00,
        category: "Fashion",
        rating: 4.5,
        emoji: "🎒"
    },
    {
        id: 3,
        name: "Smart Home Speaker",
        description: "Voice-controlled speaker with surround sound and smart assistant.",
        price: 179.99,
        category: "Electronics",
        rating: 4.6,
        emoji: "🔊"
    },
    {
        id: 4,
        name: "Ceramic Pour-Over Coffee Set",
        description: "Artisan ceramic dripper with double-wall glass carafe.",
        price: 64.50,
        category: "Home",
        rating: 4.9,
        emoji: "☕"
    },
    {
        id: 5,
        name: "Running Shoes Ultra Boost",
        description: "Lightweight responsive running shoes with cloud-like cushioning.",
        price: 189.00,
        category: "Sports",
        rating: 4.7,
        emoji: "👟"
    },
    {
        id: 6,
        name: "The Art of Programming",
        description: "A comprehensive guide to writing clean, elegant, and efficient code.",
        price: 42.99,
        category: "Books",
        rating: 4.9,
        emoji: "📘"
    },
    {
        id: 7,
        name: "Organic Matcha Powder",
        description: "Ceremonial-grade Japanese green tea powder, stone-ground.",
        price: 34.00,
        category: "Food",
        rating: 4.4,
        emoji: "🍵"
    },
    {
        id: 8,
        name: "Mechanical Keyboard RGB",
        description: "Hot-swappable switches, per-key RGB, gasket-mount design.",
        price: 159.99,
        category: "Electronics",
        rating: 4.8,
        emoji: "⌨️"
    },
    {
        id: 9,
        name: "Yoga Mat Premium",
        description: "Non-slip extra thick mat with alignment lines for all levels.",
        price: 55.00,
        category: "Sports",
        rating: 4.6,
        emoji: "🧘"
    },
    {
        id: 10,
        name: "Scented Soy Candle Set",
        description: "Hand-poured soy candles in lavender, vanilla, and cedar scents.",
        price: 38.00,
        category: "Home",
        rating: 4.3,
        emoji: "🕯️"
    },
    {
        id: 11,
        name: "Vintage Denim Jacket",
        description: "Classic oversized wash denim jacket with distressed details.",
        price: 98.00,
        category: "Fashion",
        rating: 4.5,
        emoji: "🧥"
    },
    {
        id: 12,
        name: "Dark Chocolate Truffle Box",
        description: "Luxury Belgian dark chocolate truffles, assorted 24 pieces.",
        price: 29.99,
        category: "Food",
        rating: 4.7,
        emoji: "🍫"
    }
];

const cards = document.getElementById('cardsGrid');
const emptyState = document.querySelector('#emptyState');
const input = document.querySelector('#searchInput');
const resultCount = document.querySelector('#resultCount');
const clearBtn = document.querySelector('#clearBtn');

function displayCards(productsToDisplay) {
    cards.innerHTML = '';

    productsToDisplay.forEach((product) => {
        const div = document.createElement('div');
        div.classList.add('product-card');

        div.innerHTML = `
            <div class="card-top">
                <div class="card-emoji">${product.emoji}</div>
                <span class="card-category" data-category="${product.category}">
                    ${product.category}
                </span>
            </div>

            <h3 class="card-title">${product.name}</h3>
            <p class="card-description">${product.description}</p>

            <div class="card-footer">
                <span class="card-price">$${product.price.toFixed(2)}</span>
                <span class="card-rating">⭐ ${product.rating}</span>
            </div>
        `;

        cards.appendChild(div);
    });

    cards.classList.toggle('hidden', productsToDisplay.length === 0);
    emptyState.classList.toggle('hidden', productsToDisplay.length > 0);
    resultCount.textContent = productsToDisplay.length
        ? `Showing ${productsToDisplay.length} item${productsToDisplay.length === 1 ? '' : 's'}`
        : 'No items found';
}

function filterProducts() {
    const query = input.value.trim().toLowerCase();

    const filteredProducts = products.filter((product) => {
        return (
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
    });

    clearBtn.classList.toggle('visible', query.length > 0);
    displayCards(filteredProducts);
}

input.addEventListener('input', filterProducts);

clearBtn.addEventListener('click', () => {
    input.value = '';
    filterProducts();
    input.focus();
});

displayCards(products);
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Tab functionality for pages like quality.html
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    if (tabButtons.length > 0 && tabPanes.length > 0) {
        // Hide all but the first tab content initially
        tabPanes.forEach((pane, index) => {
            if(index !== 0) pane.style.display = 'none';
            else pane.style.display = 'grid'; // Or 'block' depending on layout
        });

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                tabPanes.forEach(pane => {
                    pane.style.display = 'none';
                });
                const activePane = document.getElementById(`${button.dataset.tab}-content`);
                if (activePane) {
                    activePane.style.display = 'grid'; // Or 'block'
                }
            });
        });
    }

    // Product rendering for collections.html and index.html
    const productsGrid = document.getElementById('products-grid');
    const productsGridTeaser = document.getElementById('products-grid-teaser');
    const seriesTabs = document.querySelectorAll('.series-tab');

    const createProductCard = (product) => {
        // Determine the correct path for the image based on the current page
        const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
        
        let imagePath;
        if (product.image.startsWith('http')) {
            imagePath = product.image;
        } else {
            imagePath = isIndex ? product.image : `../${product.image}`;
        }

        const productLink = isIndex ? `./pages/product.html?id=${product.id}` : `./product.html?id=${product.id}`;

        return `
            <a href="${productLink}" class="block product-card bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 section-fade-in" data-series="${product.series}">
                <img src="${imagePath}" alt="${product.name}" class="w-full h-96 object-cover">
                <div class="p-6 text-center">
                    <p class="text-sm font-semibold uppercase tracking-wider text-brass">${product.series} Series</p>
                    <h3 class="text-2xl font-playfair font-bold mt-2 text-charcoal">${product.name}</h3>
                    <p class="text-lg font-semibold text-charcoal mt-2">${product.price}</p>
                </div>
            </a>
        `;
    };

    const renderProducts = (grid, filter = 'all', limit = 0) => {
        if (!grid) return;
        grid.innerHTML = '';
        let productsToRender = filter === 'all' 
            ? allProducts 
            : allProducts.filter(p => p.series === filter);

        if (limit > 0) {
            productsToRender = productsToRender.slice(0, limit);
        }
        
        productsToRender.forEach(product => {
            grid.innerHTML += createProductCard(product);
        });
        // Re-observe new elements for fade-in
        const newCards = grid.querySelectorAll('.product-card');
         newCards.forEach(card => {
            observer.observe(card);
        });
    };

    // For collections.html
    if (productsGrid && seriesTabs.length > 0) {
        const urlParams = new URLSearchParams(window.location.search);
        const seriesFilter = urlParams.get('series') || 'all';

        seriesTabs.forEach(tab => {
            if (tab.dataset.series === seriesFilter) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        renderProducts(productsGrid, seriesFilter);

        seriesTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                seriesTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                renderProducts(productsGrid, tab.dataset.series);
                // Update URL without reloading
                const newUrl = window.location.pathname + '?series=' + tab.dataset.series;
                window.history.pushState({path:newUrl},'',newUrl);
            });
        });
    }

    // For index.html teaser
    if (productsGridTeaser) {
        renderProducts(productsGridTeaser, 'all', 3); // Show 3 products on the homepage
    }

    // For product.html
    const productDetailContainer = document.getElementById('product-detail-container');
    if (productDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        const product = allProducts.find(p => p.id === productId);

        if (product) {
            document.title = `${product.name} - TRU Vanity`; // Update page title
            
            let imagePath;
            if (product.image.startsWith('http')) {
                imagePath = product.image;
            } else {
                imagePath = `../${product.image}`;
            }

            productDetailContainer.innerHTML = `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <!-- Product Image Gallery -->
                    <div>
                        <img id="main-product-image" src="${imagePath}" alt="${product.name}" class="w-full rounded-lg shadow-lg object-cover mb-4">
                        <!-- Thumbnails could go here if multiple images -->
                    </div>

                    <!-- Product Info -->
                    <div>
                        <p class="text-sm font-semibold uppercase tracking-wider text-brass">${product.series} Series</p>
                        <h1 class="text-4xl md:text-5xl font-playfair font-bold text-charcoal mt-2">${product.name}</h1>
                        <p class="text-2xl font-semibold text-charcoal mt-4">${product.price}</p>
                        
                        <div class="mt-6 pt-6 border-t border-stone-200">
                            <h2 class="text-xl font-bold mb-4">Description</h2>
                            <p class="text-stone-600 leading-relaxed">${product.description}</p>
                        </div>

                        <div class="mt-6">
                            <h2 class="text-xl font-bold mb-4">Specifications</h2>
                            <ul class="list-disc list-inside text-stone-600 space-y-2">
                                ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="mt-6">
                            <h2 class="text-xl font-bold mb-4">Available Colors</h2>
                            <div class="flex flex-wrap gap-2">
                                ${product.colors.map(colorName => `
                                    <span class="bg-stone-200 text-stone-700 text-sm font-medium px-3 py-1 rounded-full">${colorName}</span>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="mt-8">
                            <button id="product-find-dealer-btn" class="w-full bg-amber-500 hover:bg-amber-600 text-stone-900 font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
                                Find a Dealer
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else {
            productDetailContainer.innerHTML = `
                <div class="text-center py-24">
                    <h1 class="text-4xl font-playfair font-bold">Product Not Found</h1>
                    <p class="mt-4 text-lg">We couldn't find the product you're looking for.</p>
                    <a href="./collections.html" class="mt-8 inline-block bg-amber-500 text-stone-900 font-bold py-3 px-6 rounded-lg">Back to Collections</a>
                </div>
            `;
        }
    }

    // --- Dealer Modal Logic ---
    const dealerModal = document.getElementById('dealer-modal');
    const dealerModalContent = document.getElementById('dealer-modal-content');
    const closeModalButton = document.getElementById('close-modal-button');
    const dealerLeadForm = document.getElementById('dealer-lead-form');
    const successMessage = document.getElementById('form-success-message');
    const dealerLinks = document.querySelectorAll('a[href*="dealers.html"]');

    const openModal = () => {
        if (!dealerModal) return;
        dealerModal.classList.remove('hidden');
        dealerModal.classList.add('flex');
        setTimeout(() => { // Start transition
            dealerModal.classList.add('opacity-100');
            if(dealerModalContent) {
                dealerModalContent.classList.remove('scale-95');
                dealerModalContent.classList.add('scale-100');
            }
        }, 10);
    };

    const closeModal = () => {
        if (!dealerModal) return;
        dealerModal.classList.remove('opacity-100');
        if(dealerModalContent) {
            dealerModalContent.classList.remove('scale-100');
            dealerModalContent.classList.add('scale-95');
        }
        setTimeout(() => { // Wait for transition to finish
            dealerModal.classList.add('hidden');
            dealerModal.classList.remove('flex');
            // Reset form for next time
            if(dealerLeadForm) dealerLeadForm.classList.remove('hidden');
            if(successMessage) successMessage.classList.add('hidden');
        }, 300);
    };

    // Open modal when any "Find a Dealer" link is clicked
    dealerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    // Special handling for the dynamically generated button on product.html
    // We use event delegation on the body
    document.body.addEventListener('click', function(event) {
        if (event.target.id === 'product-find-dealer-btn') {
            openModal();
        }
    });

    // Close modal events
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }
    if (dealerModal) {
        dealerModal.addEventListener('click', (e) => {
            if (e.target === dealerModal) {
                closeModal();
            }
        });
    }

    // Handle form submission
    if (dealerLeadForm) {
        dealerLeadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would handle the form data (e.g., send to ERPNext/email)
            console.log('Form submitted');
            dealerLeadForm.classList.add('hidden');
            successMessage.classList.remove('hidden');

            // Optional: Close modal after a delay
            setTimeout(closeModal, 3000);
        });
    }
});

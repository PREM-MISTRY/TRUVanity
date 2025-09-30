const allProducts = [
    // Value Series
    { 
        id: 1, 
        name: 'The Aston 36', 
        series: 'Value', 
        price: '₹18,990', 
        image: './assets/The artisan collection.png', 
        description: 'A compact and highly durable vanity, perfect for modern apartments and guest bathrooms. Built on our TRU-Core™ foundation for lasting quality.', 
        specs: ['Size: 36 inch', 'Finish: Classic White Oak', 'Sink: Ceramic Undermount'],
        colors: ['White Oak', 'Grey Ash'],
        options: ['Vanity Only', 'Full Set with Faucet & Mirror']
    },
    { 
        id: 2, 
        name: 'The Brio 42', 
        series: 'Value', 
        price: '₹24,500', 
        image: './assets/The apex collection.png', 
        description: 'Functional design meets robust construction. The Brio offers ample storage with a clean, minimalist aesthetic for everyday elegance.', 
        specs: ['Size: 42 inch', 'Finish: Walnut Finish', 'Faucet: Chrome Plated'],
        colors: ['Natural Walnut', 'Dark Walnut'],
        options: ['Vanity Only', 'Full Set with Faucet & Mirror']
    },
    { 
        id: 10, 
        name: 'The Crest 30', 
        series: 'Value', 
        price: '₹16,500', 
        image: './assets/The atelier collection.png', 
        description: 'Our most accessible vanity, the Crest 30 is perfect for powder rooms and small bathrooms without compromising on the TRU Standard.', 
        specs: ['Size: 30 inch', 'Finish: Light Grey', 'Sink: Integrated Ceramic'],
        colors: ['Light Grey', 'Espresso'],
        options: ['Vanity Only', 'Full Set with Faucet & Mirror']
    },

    // Designer Series
    { 
        id: 3, 
        name: 'The Orson 48', 
        series: 'Designer', 
        price: '₹42,000', 
        image: './assets/The classic collection.png', 
        description: 'Our bestseller, the Orson 48 features a fluted wood finish and sleek lines, bringing a touch of sophisticated, contemporary design to your space.', 
        specs: ['Size: 48 inch', 'Finish: Fluted Oak HPL', 'Hardware: Hettich Soft-Close'],
        colors: ['Natural Oak', 'Black Oak', 'Teak'],
        options: ['Vanity Only', 'Full Set with Faucet & Mirror', 'Add LED Mirror']
    },
    { 
        id: 4, 
        name: 'The Cade 60', 
        series: 'Designer', 
        price: '₹58,900', 
        image: './assets/The core collection.png', 
        description: 'A statement piece for the master bathroom, the Cade 60 offers a double vanity configuration with a premium quartz countertop and designer fittings.', 
        specs: ['Size: 60 inch', 'Top: Calacatta Quartz', 'Sink: Dual Ceramic Basins'],
        colors: ['White', 'Charcoal Grey'],
        options: ['Vanity Only', 'Full Set with Faucets & Mirrors']
    },
    { 
        id: 7, 
        name: 'The Elara 54', 
        series: 'Designer', 
        price: '₹49,500', 
        image: './assets/The essentials collection.png', 
        description: 'Featuring a unique curved front and integrated handles, the Elara brings a soft, organic feel to the modern bathroom.', 
        specs: ['Size: 54 inch', 'Finish: Matte White', 'Hardware: Blum Soft-Close'],
        colors: ['Matte White', 'Matte Sage Green'],
        options: ['Vanity Only', 'Full Set with Faucet & Mirror']
    },
    { 
        id: 8, 
        name: 'The Rhys 40', 
        series: 'Designer', 
        price: '₹38,000', 
        image: './assets/The estate collection.png', 
        description: 'Industrial chic meets refined elegance. The Rhys combines a metal frame with solid wood drawers for a bold, urban look.', 
        specs: ['Size: 40 inch', 'Frame: Matte Black Steel', 'Wood: Solid Acacia'],
        colors: ['Natural Acacia'],
        options: ['Vanity Only', 'Full Set with Faucet & Mirror']
    },

    // Luxe Series
    { 
        id: 5, 
        name: 'The Apex 72', 
        series: 'Luxe', 
        price: '₹95,000', 
        image: './assets/The forma collection.png', 
        description: 'The pinnacle of our collection. The Apex features a super-matte FENIX™ laminate surface, integrated LED lighting, and premium Blum hardware throughout.', 
        specs: ['Size: 72 inch', 'Finish: FENIX™ Super-Matte', 'Lighting: Integrated LED'],
        colors: ['Nero Ingo (Black)', 'Grigio Londra (Grey)'],
        options: ['Full Set with Premium Faucets & Mirrors']
    },
    { 
        id: 6, 
        name: 'The Sanctum 54', 
        series: 'Luxe', 
        price: '₹78,000', 
        image: './assets/The insignia collection.png', 
        description: 'A floating vanity design that creates a sense of space and serenity. Features a solid surface countertop and PVD coated faucets for ultimate durability.', 
        specs: ['Size: 54 inch', 'Mount: Wall-Hung', 'Faucet: PVD Matte Black'],
        colors: ['Glacier White Solid Surface'],
        options: ['Full Set with Premium Faucet & Mirror']
    },
    { 
        id: 9, 
        name: 'The Sovereign 80', 
        series: 'Luxe', 
        price: '₹1,25,000', 
        image: './assets/The signature collection.png', 
        description: 'An ode to classic luxury. The Sovereign is crafted from solid mahogany with a marble top, intricate carvings, and gold-leaf accents.', 
        specs: ['Size: 80 inch', 'Material: Solid Mahogany', 'Top: Italian Marble'],
        colors: ['Royal Burgundy'],
        options: ['Complete Set with Ornate Mirror and Faucet']
    }
];

const products = [
    {
        name: "OPPO",
        image: "image/1.jpg",
        description: "OPPO F21s Pro 5G (Dawnlight Gold, 8GB RAM, 128 Storage) with No Cost EMI/Additional Exchange Offers",
        price: "Rs:15000"
    },
    {
        name: "Smart Watch",
        image: "image/2.jpg",
        description: "WRISTIO HD, Bluetooth Calling Smart Watch, 15 days battery life.",
        price: "Rs:2000"
    },
    {
        name: "Laptop i3",
        image: "image/3.jpg",
        description: " Dell Inspiron 3511 Laptop, Intel i3-1115G4, 8GB, 512GB",
        price: "Rs:40000"
    },
    {
        name: "Bluetooth",
        image: "image/4.jpg",
        description: "PTron Newly Launched Tangent Sports, 60Hrs Playtime ",
        price: "Rs:3000"
    },
    {
        name: "Shoes",
        image: "image/5.jpg",
        description: "Campus Men's Maxico Running Shoes ",
        price: "Rs:1000"
    },
    {
        name: "Laptop i5",
        image: "image/6.jpg",
        description: "Dell Inspiron 3511 Laptop, Intel i3-1115G4, 8GB, 512GB",
        price: "Rs:50000"
    },
    {
        name: "Laptop i2",
        image: "image/7.jpg",
        description: "Dell Inspiron 3511 Laptop, Intel i3-1115G4, 8GB, 512GB  ",
        price: "Rs:39000"
    }
   
    // Add more products here
];

function searchProduct() {
    const searchInput = document.getElementById('productSearch').value.toLowerCase();
    const productDisplay = document.getElementById('productDisplay');
    productDisplay.innerHTML = ''; // Clear previous results

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}<h2>
                <p>${product.description}</p>
                <h4>${product.price}</h4>
                <button>Add to cart</button>
            `;

            productDisplay.appendChild(productDiv);
        });
    } else {
        productDisplay.innerHTML = '<p>No products found</p>';
    }
}

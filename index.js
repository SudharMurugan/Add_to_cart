// Array of product details
const products = [
    { title: "Product 1", image: "https://via.placeholder.com/150", description: "Description of Product 1" },
    { title: "Product 2", image: "https://via.placeholder.com/150", description: "Description of Product 2" },
    { title: "Product 3", image: "https://via.placeholder.com/150", description: "Description of Product 3" },
    { title: "Product 4", image: "https://via.placeholder.com/150", description: "Description of Product 4" },
    { title: "Product 5", image: "https://via.placeholder.com/150", description: "Description of Product 5" },
    { title: "Product 6", image: "https://via.placeholder.com/150", description: "Description of Product 6" },
    { title: "Product 7", image: "https://via.placeholder.com/150", description: "Description of Product 7" },
    { title: "Product 8", image: "https://via.placeholder.com/150", description: "Description of Product 8" },
    { title: "Product 9", image: "https://via.placeholder.com/150", description: "Description of Product 9" },
    { title: "Product 10", image: "https://via.placeholder.com/150", description: "Description of Product 10" },
    { title: "Product 11", image: "https://via.placeholder.com/150", description: "Description of Product 11" },
    { title: "Product 12", image: "https://via.placeholder.com/150", description: "Description of Product 12" },
    { title: "Product 13", image: "https://via.placeholder.com/150", description: "Description of Product 13" },
    { title: "Product 14", image: "https://via.placeholder.com/150", description: "Description of Product 14" }
];


const cardContainer = document.getElementById("card-container");


products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <button id="cartbtn">Add to Cart</button>
    `;

    // Append the card to the container
    cardContainer.appendChild(card);
});

let count = 0;
const countvalue = document.getElementById('count');
const buttons = document.querySelectorAll('button#cartbtn');
buttons.forEach(button => {
    button.addEventListener("click", () => {
        count++;
        countvalue.textContent = count;
    });
});

// Sample menu data
const menuItems = [
    { name: "Burger", price: 5.99 },
    { name: "Pizza", price: 10.99 },
    // Add more menu items here
];

const cart = [];

const addToCart = (itemName, itemPrice) => {
    cart.push({ name: itemName, price: itemPrice });
};

const updateCart = () => {
    const cartElement = document.getElementById("cart");
    cartElement.innerHTML = "";
    cart.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartElement.appendChild(itemElement);
    });
};

const calculateTotalAmount = () => {
    const totalAmountElement = document.getElementById("total-amount");
    const totalAmount = cart.reduce((total, item) => total + item.price, 0);
    totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
};

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    menuItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.className = "item";
        itemElement.innerHTML = `
            <span class="name">${item.name}</span>
            <span class="price">$${item.price.toFixed(2)}</span>
            <button class="add-to-cart">Add to Cart</button>
        `;
        const addToCartButton = itemElement.querySelector(".add-to-cart");
        addToCartButton.addEventListener("click", () => {
            addToCart(item.name, item.price);
            updateCart();
            calculateTotalAmount();
        });
        menu.appendChild(itemElement);
    });

    const checkoutButton = document.getElementById("checkout");
    checkoutButton.addEventListener("click", () => {
        const paymentOption = document.getElementById("payment-options").value;
        alert(`Total Amount: $${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}\nPayment Option: ${paymentOption}`);
    });
});
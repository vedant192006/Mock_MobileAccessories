const products = [
  { id: 1, name: "Phone Case", price: 299, img: "https://t4.ftcdn.net/jpg/03/68/09/49/360_F_368094934_RLbGLbrs68hPicpZd1vg7rn9njFgZRCr.jpg" },
  { id: 2, name: "Wireless Earbuds", price: 1299, img: "https://hips.hearstapps.com/hmg-prod/images/wireless-earbuds-001-6792869accae0.jpg?crop=0.583xw:0.776xh;0.194xw,0.179xh&resize=1200:*" },
  { id: 3, name: "Fast Charger", price: 499, img: "https://makmobile.in/cdn/shop/files/Untitleddesign_89.png?v=1723811285" },
  { id: 4, name: "Power Bank", price: 999, img: "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-power-bank-20000/inm/f37b15155bb77e1d8df8529f4435a5a8.jpg" }
];

let cart = [];

function displayProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;

  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price;
    cartItems.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
  });

  document.getElementById("total").innerText = total;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
}

function checkout() {
  alert("Checkout feature coming soon!");
}

displayProducts();
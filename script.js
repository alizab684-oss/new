//  nav link



const links = document.querySelectorAll("nav a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Booking form 



const form = document.getElementById("bookingForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert(" Booking Confirmed! Thank you for choosing FoodieHub.");
    form.reset();
  });
}



// menu cards



 let products = [
  {
    name: "Loaded Burger",
    description: "Juicy beef burger with double cheese, lettuce, and tomato.",
    image: "burger img.jpeg"
  },
  {
    name: "White Sauce Pasta",
    description: "Creamy pasta cooked with white sauce and Italian herbs.",
    image: "pastaaa.jpg"
  },
  {
    name: "Grilled Steak",
    description: "Perfectly grilled steak served with vegetables and pepper sauce.",
    image: "steak.jpg"
  }
];

let grid = document.getElementById("menucards");

products.forEach(pro => {
  let card = document.createElement("div");
  card.classList.add("menu-card");

  card.innerHTML = `
    <img src="${pro.image}" alt="${pro.name}">
    <h3>${pro.name}</h3>
    <p>${pro.description}</p>
    <button class="addtocard">Order Now</button>
  `;

  grid.appendChild(card);
});



//  let card = document.getElementById("menu-card");
// products.forEach(item => {
//   let card = document.createElement("div");
//   card.className = "menu-card";
// card.innerHTML=`
// <img src="${pro.image}" alt="${pro.name}">
// <h3>${pro.name}</h3>
// <p>${pro.price}{/p}

// `

//   let btn = document.createElement("button");
//   btn.textContent = "Order Now";

//   container.appendChild(card);
// });
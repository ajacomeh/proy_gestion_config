const products = [
{name:'Camiseta Premium',cat:'ropa',price:19.99,img:'img/camiseta.jpg'},
{name:'Auriculares Pro',cat:'tech',price:59.99,img:'img/auriculares.jpg'},
{name:'Lámpara LED',cat:'hogar',price:24.99,img:'img/lampara.jpg'},
{name:'Sudadera Urban',cat:'ropa',price:34.99,img:'img/sudadera.jpg'},
{name:'Smartwatch X',cat:'tech',price:89.99,img:'img/smartwatch.jpg'},
{name:'Silla Minimalista',cat:'hogar',price:74.99,img:'img/silla.jpg'}
];

const grid = document.getElementById("productGrid");
const buttons = document.querySelectorAll(".filters button");

function renderProducts(list){
  grid.innerHTML = "";

  list.forEach(product => {
    grid.innerHTML += `
      <div class="card">
        <div class="thumb"></div>
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <small>${product.category}</small>
      </div>
    `;
  });
}

renderProducts(products);

buttons.forEach(button => {
  button.addEventListener("click", () => {

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    if(filter === "all"){
      renderProducts(products);
    }else{
      const filtered = products.filter(
        product => product.category === filter
      );
      renderProducts(filtered);
    }

  });
});
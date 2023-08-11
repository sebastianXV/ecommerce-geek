import { products } from "../services/products-services.js";


//

const newProduct = (url, category, nombre, price, id) => {

    const star = document.querySelector("#star-wars .container");
    const consolas = document.querySelector("#consolas .container");
    const diversos = document.querySelector("#diversos .container");

    let container;

    if (category === "star-wars") {
        container = star;
    } else if (category === "consolas") {
        container = consolas;
    } else if (category === "diverso") {
        container = diversos;
    }

    const line = document.createElement("div");
    line.classList.add("card");
    const content =
        `
        <div class="card_img_container">
           <img class="card_img" src=${url} alt="star-wars-product">
        </div>
        <h1 class="card_tittle">${nombre}</h1>
        <p class="card_precio">$${price}</p>
        <a href="" class="card_link hvr-wobble-bottom">Ver producto</a>`;

    line.innerHTML = content;
    container.appendChild(line);
};


//Recuperar
products.productList()
    .then((data) => {
        data.forEach(({ url, category, nombre, price, description }) => {
            newProduct(url, category, nombre, price, description);
        });
    });



//Tomar el valor de lo que el usuario digite
const searchInput = document.querySelector(".nav_search");

searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value;
    applyFilter(searchTerm);
});


//Recibe el valor y lo compara en cada card
const applyFilter = (term) => {
    const allCards = document.querySelectorAll(".card");

    allCards.forEach(card => {
        const productName = card.querySelector(".card_tittle").textContent.toLowerCase();

        if (productName.includes(term.toLowerCase())) {
            card.style.display = "flex";
        } else {
            card.style.display = "none"; 
        }
    });
};




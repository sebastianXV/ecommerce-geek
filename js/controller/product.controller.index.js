import { products } from "../services/products-services.js";


const newProduct = (url, category, nombre, price, description, id) => {

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

    // Contenido de la tarjeta (imagen, título, precio, etc.)
    const content = `
    
        <div class="card_img_container">
            <img class="card_img" src=${url} alt="star-wars-product">
        </div>
        <h1 class="card_tittle">${nombre}</h1>
        <p class="card_precio">$${price}</p>
        <a href="/search_product.html?id=${id}" class="card_link hvr-wobble-bottom">Ver producto</a>
    `;

    line.innerHTML = content;
    container.appendChild(line);

};

//Recuperar
products.productList()
    .then((data) => {
        data.forEach(({ url, category, nombre, price, description, id }) => {
            newProduct(url, category, nombre, price, description, id);
        });
    });







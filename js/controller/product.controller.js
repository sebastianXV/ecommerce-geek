import { products } from "../services/products-services.js"

const newProduct = (url, nombre, price, description, id) => {

    const line = document.createElement("div");
    line.classList.add("card")
    const content =
        ` <div class="card_img_container">
        <span class="edit_icon"><img class="icon" src="../../img/iconos/editar.png" alt=""></span>
        <span class="delete_icon" id=${id}><img class="icon" src="../../img/iconos/eliminar.png" alt=""></span>
        <img src="${url}" alt="" class="card_img">
        </div>
    <h1 class="card_tittle">${nombre}</h1>
    <p class="card_precio">$${price}</p>
    <a href="" class="card_link">Ver producto</a>`;

    line.innerHTML = content


    //Redirigir a la vista editar
    const edit = line.querySelector(".edit_icon")
    edit.addEventListener('click', () => {
        window.location.href = `./edit.html?id=${id}`
    })

    //Eliminar producto
    const btn = line.querySelector(".delete_icon")
    btn.addEventListener("click", () => {
        const id = btn.id
        products.deleteProduct(id).then(response => {
            alert("Se eliminó el producto")
        })
    });

    return line;
};



const table = document.querySelector(".container");
products.productList()
    .then((data) => {
        data.forEach(({ url, nombre, price, description, id }) => {
            const newLine = newProduct(url, nombre, price, description, id);
            table.appendChild(newLine);
        });
    })




export const Product = newProduct











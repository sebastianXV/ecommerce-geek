import { products } from "../services/products-services.js";

const showProduct = () => {

    const uri = new URL(window.location)
    const id = uri.searchParams.get("id");
    console.log(id)

    if (id === null) {
        window.location.href = "error.html"
    }

    const url = document.querySelector("[data-url]")
    const nombre = document.querySelector("[data-product]")
    const price = document.querySelector("[data-price]")
    const description = document.querySelector("[data-description]")

    products.detailProduct(id).then((products)=>{
        url.src = products.url;
        nombre.innerHTML = products.nombre
        price.innerHTML = `$${products.price}`;
        description.innerHTML = products.description;
    })
}


showProduct()
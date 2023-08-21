import { products } from "../services/products-services.js";


const form = document.querySelector("[data-form]")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const url = document.querySelector("[data-url]").value
    const category = document.querySelector("[data-category]").value
    const nombre = document.querySelector("[data-product]").value
    const price = document.querySelector("[data-price]").value
    const description = document.querySelector("[data-description]").value

    products.createProduct(url, category, nombre, price, description).then(response => {
        console.log(response)
        window.location.href = "new_succesfull.html"
    })
        .catch(err => console.log(err))
});




import { products } from "../services/products-services.js"

const form = document.querySelector("[data-form]")

const getInfo = () => {

    const uri = new URL(window.location)
    const id = uri.searchParams.get("id");

    if (id === null) {
        window.location.href = "error.html"
    }
    const url = document.querySelector("[data-url]")
    const category = document.querySelector("[data-category]")
    const nombre = document.querySelector("[data-product]")
    const price = document.querySelector("[data-price]")
    const description = document.querySelector("[data-description]")

    products.detailProduct(id).then((products) => {
        url.value = products.url
        category.value = products.category
        nombre.value = products.nombre
        price.value = products.price;
        description.value = products.description;
    })
}

getInfo();


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const uri = new URL(window.location)
    const id = uri.searchParams.get("id");

    const url = document.querySelector("[data-url]").value
    const category = document.querySelector("[data-category]").value
    const nombre = document.querySelector("[data-product]").value
    const price = document.querySelector("[data-price]").value
    const description = document.querySelector("[data-description]").value

    products.updateProduct(url,category,nombre,price,description,id).then(()=>{
        window.location.href= "edit_sucesfull.html"
    })
})
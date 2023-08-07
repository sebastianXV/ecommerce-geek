// import { products } from "./Api/products-services.js";
// import { Product } from "./controller/product.controller.js";





document.querySelector("[data-form-footer]").addEventListener('submit', function(e){
    e.preventDefault();

    const form = document.querySelector("[data-form-footer]")
    const span = document.getElementById("span")

    span.classList.toggle("active")
    form.reset();

});









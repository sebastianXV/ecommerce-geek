const productList = () =>{
    return fetch("http://localhost:3000/products").then(response => {
        return response.json();
    });
};


const createProduct = (url, category, nombre, price, description) =>{ 
   return fetch("http://localhost:3000/products", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url,category,nombre, price, description, id:uuid.v4()})
    });
};

const deleteProduct = (id) => { 
    console.log("eliminar a", id)
    return fetch(`http://localhost:3000/products/${id}`,{
         method:"DELETE"
     });
 };

export const products = {
    productList,
    createProduct,
    deleteProduct
}
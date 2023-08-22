const productList = () => {
    return fetch("https://ecommerce-geek.onrender.com/products").then(response => {
        return response.json();
    });
};

const createProduct = (url, category, nombre, price, description) => {
    return fetch("https://ecommerce-geek.onrender.com/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url, category, nombre, price, description, id: uuid.v4() })
    });
};

const deleteProduct = (id) => {
    console.log("eliminar a", id)
    return fetch(`https://ecommerce-geek.onrender.com/products/${id}`, {
        method: "DELETE"
    });
};

const detailProduct = (id) => {
    return fetch(`https://ecommerce-geek.onrender.com/products/${id}`).then(response =>
        response.json())
}

const updateProduct = (url, category, nombre, price, description, id) => {
    return fetch(`https://ecommerce-geek.onrender.com/products/${id}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ url, category, nombre, price, description }),
    })
        .then((response) => response)
        .catch((err) => console.log(err));
};


export const products = {
    productList,
    createProduct,
    deleteProduct,
    detailProduct,
    updateProduct
}
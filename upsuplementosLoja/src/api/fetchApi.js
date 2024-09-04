const getProducts = async (produto) => {
    if(produto) {
        const response = await fetch(`http://localhost:3311/sherProducts/${produto}`);
        return response.json(); 
    } else {
        const response = await fetch(`http://localhost:3311/getProducts`);
        return response.json();
    }
}

const getProductsId = async (id) => {
    const response = await fetch(`http://localhost:3311/getProducts/${id}`);
    return response.json();
}

export default {
    getProducts,
    getProductsId,
};

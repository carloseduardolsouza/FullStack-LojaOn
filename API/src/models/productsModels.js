const connection = require('./connection')

const getProducts = async () => {
    const query = `SELECT * FROM products`
    const [products] = await connection.execute(query)
    return products
}

const getProductsId = async (id) => {
    const query = `SELECT * FROM products WHERE id = ${id}`
    const [produto] = await connection.execute(query)
    return produto
}

const sherProducts = async (product) => {
    const query = `SELECT * FROM products WHERE produto LIKE '%${product}%'`
    const [produto] = await connection.execute(query)
    return produto
}

module.exports = {
    getProducts,
    getProductsId,
    sherProducts
}
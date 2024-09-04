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

const cadastrarProduto = async (dados , imagens) => {
    const {
        produto,
        valor,
        descricao,
        sabores,
    } = dados

    const query = 'INSERT INTO products (produto , valor , descricao , sabores , imagem) VALUES (?,?,?,?,?)'
    const values = [produto , valor , descricao , sabores , imagens]

    const cadastrarClientes = await connection.execute(query , values)
}

module.exports = {
    getProducts,
    getProductsId,
    sherProducts,
    cadastrarProduto
}
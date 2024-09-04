// Importa o modelo de produtos
const productsModels = require('../models/productsModels');

const path = require('path');
const fs = require('fs');
require('dotenv').config();

// Define a função assíncrona getProducts
const getProducts = async (req, res) => {
    const products = await productsModels.getProducts()
    return res.status(200).json(products)
};

const getProductsId = async (req, res) => {
    const {id} = req.params
    const product = await productsModels.getProductsId(id)
    return res.status(200).json(product)
}

const proverImagens = async (req, res) => {
    const { nomeImagem } = req.params;
    const imagePath = path.join(process.env.IMAGENS_PATH, 'upload', nomeImagem);

    try {
        if (fs.existsSync(imagePath)) {
            const ext = path.extname(nomeImagem).toLowerCase();
            let contentType = 'image/jpeg'; // Default

            if (ext === '.png') contentType = 'image/png';
            if (ext === '.gif') contentType = 'image/gif';
            if (ext === '.webp') contentType = 'image/webp';

            res.setHeader('Content-Type', contentType);

            fs.createReadStream(imagePath).pipe(res);
        } else {
            res.status(404).json({ error: 'Imagem não encontrada' });
        }
    } catch (error) {
        console.error('Erro ao prover imagem:', error);
        res.status(500).json({ error: 'Erro ao prover imagem' });
    }
};

const sherProducts = async (req , res) => {
    const {produto} = req.params
    const product = await productsModels.sherProducts(produto)
    return res.status(200).json(product)
}


// Exporta a função getProducts para ser usada em outras partes da aplicação
module.exports = {
    getProducts,
    getProductsId,
    proverImagens,
    sherProducts
};

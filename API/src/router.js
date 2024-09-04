//criar as rotas da api
const express = require("express");
const router = express.Router();

const productsControllers = require('./controllers/productsControllers')

router.get('/imagens/:nomeImagem', productsControllers.proverImagens);

router.get("/getProducts" , productsControllers.getProducts)
router.get("/getProducts/:id" , productsControllers.getProductsId)
router.get("/sherProducts/:produto" , productsControllers.sherProducts)

module.exports = router;
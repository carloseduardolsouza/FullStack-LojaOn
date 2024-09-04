//criar as rotas da api
const express = require("express");
const router = express.Router();

const multer = require("multer");
const {storage} = require("./multerConfig.js")
const upload = multer({storage: storage})

const productsControllers = require('./controllers/productsControllers')

router.get('/imagens/:nomeImagem', productsControllers.proverImagens);

router.get("/getProducts" , productsControllers.getProducts)
router.get("/getProducts/:id" , productsControllers.getProductsId)
router.get("/sherProducts/:produto" , productsControllers.sherProducts)

router.post("/cadastrarProduto" , upload.array('image') , productsControllers.cadastrarProduto)

module.exports = router;
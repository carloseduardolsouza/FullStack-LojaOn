const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Objeto para armazenar os nomes de arquivos correspondentes a cada item
const nomesPorItem = {};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        // Verifique se a pasta "upload" existe, senão, crie ela
        const uploadDir = path.resolve("./upload");
        if (!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir);
        }
        callback(null, uploadDir);
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime();
        const nameImage = `${time}_${file.originalname}`
        callback(null, nameImage);

        // Verifica se já existe um array de nomes para este item
        if (!req.file || !req.file.timestamp) {
            req.file = req.file || {};
            req.file.timestamp = []; // Inicia um novo array se não existir
        }

        // Adiciona o nome do arquivo ao array de nomes para este item
        req.file.timestamp.push(nameImage);

        // Armazena os nomes de arquivos por item em nomesPorItem
        const itemName = req.body.itemName; // Supondo que você tenha um campo chamado itemName no seu formulário
        if (!nomesPorItem[itemName]) {
            nomesPorItem[itemName] = [];
        }
        nomesPorItem[itemName].push(nameImage);
    }
});

module.exports = { storage, nomesPorItem };

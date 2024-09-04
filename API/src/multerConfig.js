const multer = require("multer");
const path = require("path");
const fs = require("fs");

const nomesPorItem = {};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const uploadDir = path.resolve("./upload");
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        callback(null, uploadDir);
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime();
        const nameImage = `${time}_${file.originalname}`;
        callback(null, nameImage);

        if (!req.file) {
            req.file = {}; // Garante que req.file exista
        }

        if (!req.file.timestamp) {
            req.file.timestamp = []; // Garante que req.file.timestamp seja um array
        }

        req.file.timestamp.push(nameImage);

        // Remove as aspas do itemName, se existirem
        let itemName = req.body.itemName;
        if (itemName) {
            itemName = itemName.replace(/['"]/g, ''); // Remove aspas simples e duplas
        }

        if (!nomesPorItem[itemName]) {
            nomesPorItem[itemName] = [];
        }
        nomesPorItem[itemName].push(nameImage);
    }
});

module.exports = { storage, nomesPorItem };

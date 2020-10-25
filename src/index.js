const express = require("express");
const dev = express();

dev.use(express.json());
dev.use(express.urlencoded({ extended: false }));

dev.use(require("./routes/index"));

dev.listen(3000);
console.log("Server on port 3000");

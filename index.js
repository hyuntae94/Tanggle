const express = require("express");
const app = express();

const router = require("./router");

const PORT = 1111;

app.use('/', router);

app.listen(1111, () => console.log(`Listening on : https://localhost:${PORT}`));
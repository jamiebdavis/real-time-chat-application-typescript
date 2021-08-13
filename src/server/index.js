const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = 5000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

import express from "express";
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});
app.listen(port, () => {
    console.log("server is running on port");
});

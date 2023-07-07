const express = require('express');
const app = express();

const port = 3000;

app.get("/" , (req,res) => {
    res.send("Hello from the get route /");
})

app.listen(port, (req,res) =>{
    console.log("listening on port ${port}")
})
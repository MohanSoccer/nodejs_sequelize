const express = require('express');
const app = express();


const PORT = 3500;


app.use(express.json());

app.get('/',(req,res) => {
    res.json("API new Running");
})


app.listen(PORT, (err) => {
    if (!err) {
        console.log("Server started on " + PORT);
    }
})
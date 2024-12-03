// Imposto framework express 
const express = require("express");
const app = express();
const port = 3001;

// creo assets aperto per le immagini
app.use(express.static("public"));

// creo rotta base 
app.get("/", (req, res) => {
    res.send("Server del mio blog");
});



// creo rotta di apertura server
app.listen(port,() =>{
    console.log("Server pronto!");
    
    });
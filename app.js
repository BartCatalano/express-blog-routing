// Imposto framework express 
const express = require("express");
const app = express();
const port = 3001;

// creo assets aperto per le immagini
app.use(express.static("public"));

// richiamo le route
const postsRouters = require("./routers/posts");

app.use("/posts",postsRouters);






// creo rotta base 
app.get("/", (req, res) => {
    res.send("Server momentaneo");
});



// creo rotta di apertura server
app.listen(port,() =>{
    console.log("Server pronto!");
    
    });
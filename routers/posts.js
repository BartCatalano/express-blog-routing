// importo express su posts
const express = require("express");
const router = express.Router();

// importo js con lista 
const bacheca = require("../data");

//  CREO OPERAZIONI REST API


// creo Crug index
router.get(`/`, (req, res)=>{
res.json(bacheca);
});

// creo crug show
router.get(`/:id`,(req,res)=>{
const curPost = req.params.id;
res.json(`leggiamo un dato specifico e il suo ` + curPost);
});

// creo Crug Create
router.post(`/`, (req, res)=>{
    res.json("qui creo un nuovo elemento");
    });

    // creo crug MODIFY
router.put(`/:id`,(req,res)=>{
    const curPost = req.params.id;
    res.json(`qui modifichiamo tutto l'elemento a questo` + curPost);
    });

    // creo crug modify specifico
router.patch(`/:id`,(req,res)=>{
    const curPost = req.params.id;
    res.json(`modifichiamo elemento in modo specifico a questo id  ` + curPost);
    });

    // creo crug Delete
router.delete(`/:id`,(req,res)=>{
    const curPost = req.params.id;
    res.json(`eliminiamo elemento a questo ` + curPost);
    });



module.exports = router;



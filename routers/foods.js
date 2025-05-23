import express from "express";
import foodPosts from "../data.js";

const router = express.Router();

//INDEX
router.get("/", (req, res) => {
    res.json({
        data: "Mi aspetto la lista di tutti i dati"
    });
});

//SHOW
router.get("/:id", (req, res) => {
    const foodId = req.params.id;
    res.json({
        data: `mi aspetto il singolo elemento dei dati con id ${foodId}`
    }); 
});

//STORE
router.post("/", (req, res) => {
    res.json({
        data: "creo un nuovo post food"
    })
})

//UPDATE
router.put("/:id", (req, res) => {
    const foodId = req.params.id;
    res.json({
        data: `modifico l'elemento con id ${foodId}`
    });
});

//DESTROY
router.delete("/:id", (req, res) => {
    const foodId = req.params.id;
    res.json({
        data: `elimino l'elemento con id ${foodId}`
    });
});


export default router;
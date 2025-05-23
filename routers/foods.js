import express from "express";
import foodPosts from "../data.js";

const router = express.Router();

//INDEX
router.get("/", (req, res) => {
    res.json({
        data: foodPosts,
        count: foodPosts.length
    });
});

//SHOW
router.get("/:id", (req, res) => {
    const foodId = req.params.id;
    const food = foodPosts.find(curFood => curFood.id === parseInt(foodId));
    res.json({
        data: food
    });
});

//STORE
router.post("/", (req, res) => {
    
    res.json({
        data: "Creo un nuovo post food"
    });
});

//UPDATE
router.put("/:id", (req, res) => {
    const foodId = req.params.id;
    console.log(updateFood);
    
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
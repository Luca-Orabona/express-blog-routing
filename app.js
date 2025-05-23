import express from "express";
import foodPosts from "./data.js";

const app = express();
const port = 3000;



app.listen(port, () => {
    console.log("sono in ascolto");
    
})
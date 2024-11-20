import express from "express";
import path from "path";
import rootpath from "../util/rootpath.js";

const router = express.Router()

router.get("/",(req,res)=>{
    res.sendFile(path.join(rootpath,"public","index.html"))
})

export default router
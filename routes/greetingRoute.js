import express from "express";

const router = express.Router()

router.get("/",(req,res)=>{
    res.send( "Hello,  Bognár Kevin " )
})

export default router
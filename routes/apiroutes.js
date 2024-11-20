import express from "express";
import  path  from "path";
import  rootpath  from "../util/rootpath.js";
import { url } from "inspector";


const router = express.Router()
let users = [
    { id: "1",  name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Sam Johnson" },
  ];


router.get("/users",(req,res)=>{
    res.send(users)
    res.status(200)
    
})

router.get("/users/:id",(req,res)=>{
    let id = (req.params.id)
    res.send(users.find(x=>x.id ==id))
    res.status(200)
    
})

router.post("/users",(req,res)=>{
    let newUser = {
        id:req.id,
        name:req.name
    }
    users.push(newUser)
    res.send(newUser)
    res.status(201)

})
router.delete("/users/:id",(req,res)=>{
    let id = (req.params.id)

    let index = users.find(x=>x.id ==id)

    users.splice(index,1)
    res.send("törölve")
    
    res.status(204)
})

router.patch("/users/:id",(req,res)=>{
    let id = (req.params.id)

    let newUser = {
        id:id,
        name:req.name
    }
    
    res.send(newUser)

    users.find(x=>x.id ==id) = newUser
    res.status(200)

})

export default router
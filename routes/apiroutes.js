import express from "express";

const router = express.Router()
let users = [
    { id: "1",  name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Sam Johnson" },
  ];
  let allusers = ""
  users.forEach(user => {
    allusers +=(user.id + " " + user.name + "<br>")
});
router.get("/users",(req,res)=>{
    res.send(allusers)
    
})

router.get("/users:",(req,res)=>{
    res.send(users)
    
})

export default router
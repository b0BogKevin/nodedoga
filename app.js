import express from "express"
import expressRoute from "./routes/expressRoute.js"
import nodejsRoute from "./routes/nodejsRoute.js"
import greetingRoute from "./routes/greetingRoute.js"
import homeRoute from "./routes/homeRoute.js"
import apiRoutes from "./routes/apiroutes.js"
const app = express()

const port = 3000;

app.use("/",homeRoute)
app.use("/express",expressRoute)
app.use("/greeting",greetingRoute)
app.use("/nodejs",nodejsRoute)
app.use("/api",apiRoutes)




app.listen(port,()=>{console.log("Hi, there!")})
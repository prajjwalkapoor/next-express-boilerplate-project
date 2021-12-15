const express = require("express");
const cors = require("cors")
const route1 = require("./routes/route1")
const app = express();

// middlewares

app.use(cors());

// mount routers
app.use("/api/", route1)

const PORT = 4000;

app.get('/api', (req,res)=>{
    res.send({status: true ,message: "Server is running"})
})

app.listen(PORT, ()=> console.log("server is running"));
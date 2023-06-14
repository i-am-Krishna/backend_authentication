const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000 ;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Backend Authentication");
})

app.listen(port,()=>{
    console.log(`Backend runs on Port Number ${port}`)
})
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", function(request, response){
    response.send("something...")
})
const port = 8000
app.listen(8000, ()=>{
    console.log(`server is up and running on port` + port)
})

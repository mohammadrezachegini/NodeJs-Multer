const express = require("express")
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/upload", (req,res,next) => {
    console.log(req.body);
    res.send(req.body)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
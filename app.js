const express = require("express")
const app = express()

const {uploadFile} = require("./middleware/multer")


app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use("upl oads",express.static("uploads"))

app.post("/upload", uploadFile.single("image") ,(req,res,next) => {
    console.log(req.body);
    res.send(req.file)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
const express = require("express")
const app = express()
const {ErrorHandler,NotFoundError} = require("./util/errorHandler")
const {uploadFile} = require("./middleware/multer")


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.post("/upload", uploadFile.single("image") ,(req,res,next) => {
    console.log(req.body);
    res.send(req.file)
})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
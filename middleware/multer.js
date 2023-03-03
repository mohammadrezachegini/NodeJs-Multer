const multer = require("multer")
const path = require("path")
const fs = require("fs")
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        fs.mkdirSync("public/upload", {recursive: true})
        cb(null, "public/upload")
    },
    filename: function (req,file,cb){
        const ext = path.extname(file.originalname);
        const mimetype = path.extname(file.mimetype);
        console.log(mimetype);
        const whiteLisstFormat = ['.png','.jpg','.jpeg']
        const whiteLisstMimType = ['image/png','image/jpg','image/jpeg']
        if(whiteLisstFormat.includes(ext)){
            const fileName = Date.now() + ext
            cb(null, fileName)
        }else {
            cb(new Error("the file is invalid"))
        }
        
    }
});

const uploadFile = multer({
    storage: storage
})

module.exports = {
    uploadFile
}
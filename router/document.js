
module.exports = app => {
  const document = require("../controller/document");
  var router = require("express").Router();
    
  
    router.post("/add",document.create);
    router.put("/Update/:id",document.Update);
    router.get("/",document.FindALL);
    router.get("/find/:id",document.FindOne);
    router.delete("/Delet/:id",document.DeletOne);
    router.delete("/Delet",document.DeletALL);
  
    app.use("/Document", router);
    
};
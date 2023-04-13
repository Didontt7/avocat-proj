const db = require("../models");
const Document = db.Document;

exports.create = (req, res) => {
   

      const  title= req.body.title;
      const Descrption= req.body.Descrption;
      const idClient= req.body.idClient;
      const  idLawyar = req.body.idLawyar;
  
    const document = new Document({
      title,
      Descrption,
      idClient,
      idLawyar,
    });
  
    document.save((err, document) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
  
      res.send({ message: "Document created successfully", document });
    });
  };

  
  exports.FindALL = (req, res) => {

    Document.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Docment."
        });
      });
    
  };

  
  exports.FindOne = (req, res) => {
    Document.findById(req.params.id)
    .then(Case => res.json(Case))
    .catch(err => res.status(400).json('Error: ' + err));

    
  };


  exports.DeletOne = (req, res) => {

    Document.findByIdAndDelete(req.params.id)
    .then(() => res.json('Document deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
    
  };



  
  exports.DeletALL = (req, res) => {
    Document.deleteMany({})
    .then(data => {
     res.send({
       message: `${data.deletedCount} Document were deleted successfully!`
     });
     })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while removing all Docments."
     });
     });
 
   };


   exports.Update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Document.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Document with id=${id}. Maybe Document was not found!`
          });
        } else res.send({ message: "Document was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Docment with id=" + id
        });
      });
  };
  

/*
   exports.Update = (req, res) => {
    Document.findById(req.params.id)
  
    .then(doc => {
  
        Document.title= req.body.title;
        Document.Descrption= req.body.Descrption;
        Document.idClient= req.body.idClient;
        Document.idLawyar = req.body.idLawyar;
  
        doc.save()
        .then(() => res.json('Document updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
  
    .catch(err => res.status(400).json('Error: ' + err));
    };*/
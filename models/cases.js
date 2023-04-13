const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const caseeSchema = new Schema({
  Name: String,
        Number: String,
        Price: String,
        opponent :String,
        Location:String,
        Gugement :String,
        GDate : { "type": Date, "default": Date.now },
        Descrption:String,
        idClient:{type:mongoose.Types.ObjectId , ref:"client"},
        idLawyar:{type:mongoose.Types.ObjectId  , ref:"lawyer"}
}, {
  timestamps: true,
});

const Cases = mongoose.model('Cases', caseeSchema);

module.exports = Cases;
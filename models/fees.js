const { Types } = require("mongoose");

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        isReceved :Boolean,
        idcase:{type:Types.ObjectId , ref:"case"}
        
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Fee = mongoose.model("Fee", schema);
    return Fee;
  };
  
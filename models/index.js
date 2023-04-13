const mongoose = require('mongoose');
mongoose.Promise= global.Promise

const db ={};

db.mongoose =mongoose;

db.User =require("./users");
db.role =require("./Role");
db.Cases = require("./cases");
db.contact =require("./contact");
db.Document = require("./document")(mongoose);
db.fees = require("./fees");
db.law = require("./law");
db.task = require("./task");
db.timeline = require("./timeline");

db.ROLES =["user" , "Lawyer","Employe"] ;
module.exports = db;
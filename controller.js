var userdb = require('../model/model');
var Userdb = require('../model/AddStudent');
var Userdbs = require('../model/AddTeachers');
// var
// const controller = require('');

// Create a new user
exports.create = (req, res) => {
  // Check if the request body exists
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }

  // Create a new user instance
  const user = new Userdb({
    name: req.body.name,
    fathername: req.body.fathername,
    email: req.body.email,
    address: req.body.address,
    semester:req.body.semester,
    rollnumber:req.body.rollnumber,
    gender:req.body.gender,
    category:req.body.category,
    dateofbirth:req.body.dateofbirth,
    number:req.body.number,
    branch:req.body.branch
  });

  // Save the user in the database
  user
    .save()
    .then((data) => {
      // res.send(data);
      res.redirect('/AddStudent');
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user",
      });
    });
};
// ======================================create new teacher========================================================
  
// Create a new teacher
exports.creates = (req, res) => {
  // Check if the request body exists
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }

  // Create a new user instance
  const teacher = new Userdbs({ 
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
  });

  // Save the user in the database
  teacher
    .save()
    .then((data) => {
      // res.send(data);
      res.redirect('/AddTeachers');
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user",
      });
    });
};







// ==============================================================================================
// Retrieve and return all users
exports.find = (req, res) => {
  // Implement the logic to retrieve and return all users
  if(req.query.id){
    const id=req.query.id;
    Userdb.findById(id)
    .then(data=>{
      if(!data){
        res.status(404).send({message:"Not found user id"+id})
      }else{
        res.send(data)
      }
    })
    .catch(err =>{
      res.status(500).send({message:"errro fatching with user id"+id})
    })
  }else{
    Userdb.find()
    .then(user=>{
      res.send(user)
  
    })
    .catch(err=>{
      res.status(500).send({message:err.message||"error occure while retriving user information "})
    })
    
  }
 
};

// Update a user's information
exports.update = (req, res) => {
  // Implement the logic to update a user's information
};
// module.exports = controller;

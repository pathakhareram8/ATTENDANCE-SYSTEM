const express = require('express');



const route = express.Router();
const controller = require('../controller/controller');
const exios = require('axios');
const { default: axios } = require('axios');
const attendance = require('../model/attendance');



route.post('/api/AddStudent', controller.create);
route.post('/api/AddTeachers',controller.creates);
route.post('/api/attendance',controller.creates);

// / Routes
route.get('/', function(request, response) {
  // Render login template
  response.render('login');
});

// Admin page
route.post("/Admin", (req, res) => {
  res.render('Admin');
});

route.get("/AddTeachers", (req, res) => {
  res.render('AddTeachers');
  
});

route.get("/AddStudent", (req, res) => {
  res.render("AddStudent.ejs");
});

route.get("/TeacherDetale", (req, res) => {
  res.render("TeacherDetale.ejs");
});



route.get("/AdStudent", (req, res) => {
  res.render('AdStudent');
});

route.get("/StudentDetail6Sem", (req, res) => {
  // make a get request to api users
  axios.get('http://localhost:3000/api/users')
  .then(function(response){
    console.log(response.data)
    res.render("StudentDetail6Sem.ejs",{users:response.data});

  })
  .catch(err=>{
    res.send(err);
  })
  
});

route.get('/PickClas', function(req, res) {
  axios.get('http://localhost:3000/api/users')
  .then(function(response){
    console.log(response.data)
    res.render("pickClas",{users:response.data,username:req.session.username});

  })
  .catch(err=>{
    res.send(err);
  })
});

route.post('/add_attendance',function(req,res){
  const add_attendance = new attendance({ 
    dated: req.body.dated,
    roll_no: req.body.roll_no,
    present_flag: req.body.present_flag,
    user_name: req.body.user_name,
  });

  add_attendance
    .save()
    .then((data) => {
      // res.send(data);
      res.json({'msg':'record_added'});
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user",
      });
    });  
})


route.get('/shivanshDetalePage', function(req, res) {
  res.render('shivanshDetalePage.ejs');
});

// API
route.post('/api/users', controller.create);
route.post('/api/user', controller.creates);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
// route.post('/api/users', controller.create);

module.exports = route

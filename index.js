const express=require('express');
const bodyparser=require('body-parser');

const {mongoose}=require('./db.js');
var student_ctl=require('./controller/StudentController.js');

var app=express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.listen(3000,()=>console.log('server started at port :3000'));

app.use('/StudentDB',student_ctl);

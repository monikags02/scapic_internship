const express=require('express');
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;
var{Student}=require('../model/Studentmod.js');
//localhost:3000/StudentDB/
//displayall
router.get('/',(req,res)=>{
    Student.find((err,docs)=>{
      if(!err){
      res.send(docs);}
      else
      console.log('Error in retriving respond of Student'+JSON.stringify(err,undefined,2));
    });
});
//localhost:3000/StudentDB/<id>
//displayspecific id
router.get('/:id',(req,res)=>{
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record found for:'+req.params.id);
  Student.findById(req.params.id,(err,doc)=>{
    if(!err)
      res.send(doc);
    else
      console.log('Error while retriving Student id',JSON.stringify(err,undefined,2));
  });

});
//update
router.post('/:id',(req,res)=>{
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record found for:'+req.params.id);

    var sud={
      Name:req.body.name,
      Rollno:req.body.rollno,
      Class:req.body.class,
      Phy:req.body.phy,
      Chem:req.body.chem,
      Math:req.body.math,
      cutoff:req.body.cutoff
    };

    Student.findByIdAndUpdate(req.params.id,{$set:sud},{new:true},(err,doc)=>
  {
    if(!err)
      res.send(doc);
    else
      console.log('Error while updatig Student id',JSON.stringify(err,undefined,2));
  });
});
//deleting
router.get('/remove/:id',(req,res)=>{
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record found for:'+req.params.id);
  Student.findByIdAndRemove(req.params.id,(err,doc)=>{
    if(!err)
      res.send(doc);
    else
      console.log('Error while deleting Student id',JSON.stringify(err,undefined,2));
  });
});
//insert
router.post('/',(req,res)=>{
  var sud =new Student({
    Name:req.body.name,
    Rollno:req.body.rollno,
    Class:req.body.class,
    Phy:req.body.phy,
    Chem:req.body.chem,
    Math:req.body.math,
    cutoff:req.body.cutoff
  });
  sud.save((errr,doc)=>
{
if(!errr)
res.send(doc);
else
console.log('ERROR in retriving the post data '+JSON.stringify(errr,undefined,2));
});
});

module.exports=router;

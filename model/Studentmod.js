const mongoose=require('mongoose')

var Student=mongoose.model('School_atd',{
  Name:{type:String},
  Rollno:{type:Number},
  Class:{type:Number},
  Phy:{type:Number},
  Chem:{type:Number},
  Math:{type:Number},
  cutoff:{type:Number}//cutoff=(mat+phy+chem)/3
});

module.exports = {Student};

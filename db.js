const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/scapic_intern', (error_msg) => {
  if(!error_msg)
    console.log('Mongodb Connected Successfully');
  else
    console.log("ERROR____"+JSON.stringify(error_msg, undefined, 2));
});

module.exports=mongoose;

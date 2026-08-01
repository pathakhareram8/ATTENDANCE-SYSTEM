const  mongoose = require('mongoose');

const schema_new_attendance  = new mongoose.Schema({
    // user_name,roll_no,present_flag,date  
    roll_no: {
        type: String,
        required: true
      },
    present_flag: {
        type: String,
        required: true
      },
      
    user_name: {
        type: String,
        required: true
      },

      dated: {
        type: String,
        required: true
      } 
})

const attendance=new mongoose.model("attendance",schema_new_attendance)

module.exports=attendance
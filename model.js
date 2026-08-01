mongoose = require('mongoose');

const schema  = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
        
    }
        
})

const userdb = mongoose.model('userdb',schema);

const collection=new mongoose.model("userdbs",schema)

module.exports=collection
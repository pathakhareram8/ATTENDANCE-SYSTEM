mongoose = require('mongoose');

const schemaa  = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    fathername:{
        type:String,
        require:true,
        
    },
    email:{
        type:String,
        require:true,
        
        
    },
    address:{
        type:String,
        require:true,
        
    },

    semester:{
        type:String,
        require:true,
        
    },

    rollnumber:{
        type:String,
        require:true,
        
    },

    number:{
        type:String,
        require:true,
        
    },

    category:{
        type:String,
        require:true,
        
    },

    gender:{
        type:String,
        require:true,
        
    },
    dateofbirth:{
        type:String,
        require:true,
        
    },

    

        
})  

const Userdb = mongoose.model('Studentdb',schemaa);

// const collection=new mongoose.model("Studentdb",schema)

module.exports= Userdb;
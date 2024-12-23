const mongoose=require('mongoose');
const Todoschema=new mongoose.Schema({
    todo:{
        type:String,
        required:true,
    },
    user_:{
        type:String,
        required: true,
        default: "default_user",
          },
    done:{
        type:String,
        required: true,
        default: "0"
    }

});

module.exports=new mongoose.model("Todo",Todoschema);

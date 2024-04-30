const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/project")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }



})


const contact=mongoose.model("contactus",contactSchema)

module.exports=contact
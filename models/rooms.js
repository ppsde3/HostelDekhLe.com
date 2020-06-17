const mongoose=require('mongoose');
const roomschema=new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true,'Please add a name'],
            trim:true,
            maxlength: [50,'not more than 50']
        },
        type:{
            type:String,
            required:true,
            enum:[
                'Family Type',
                'Student',
                '1BHk',
                '2BHk',
                'Others'
            ]
        },
        description:{
            type: String,
            required:true
        },
        rent:{
            type:Number,
            required:true
        },
        photo:
        {
            type:String,
            default:'image.jpg'
        },
        mobileno:{
            type: String,
            required:true,
            length:10
        },
        address:{
            type:String,
            required:true,
        }
        
    }
);
module.exports=mongoose.model('rooms',roomschema);
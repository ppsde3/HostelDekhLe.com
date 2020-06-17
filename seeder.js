const fs=require('fs');
const momgoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'./configiruation/config.env'});
const dir=require('./models/rooms');
const { compile } = require('morgan');
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
});
const rooms=JSON.parse(fs.readFileSync('${_dirname}/_data/rooms.json','utf-8'));
const importData=async()=>
{
    try{
        await rooms.create(rooms);
        console.log('Data Imported');
        process.exit();
    }
    catch(err)
    {
        console.log(err);
    }
}
const deleteData=async()=>
{
    try{
        await rooms.deleteMany();
        console.log('Data Destroyed');
        process.exit();
    }
    catch(err)
    {
        console.log(err);
    }
}
if(process.argv[2]==='-i')
{
    importData();
}
else if(process.argv[2]==='d')
{
    deleteData();
}

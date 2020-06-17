const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const errorHandler=require('./middlewear/error');
const dir=require('./routes/dir.js');
dotenv.config({path:'./configuration/config.env'});
const app=express();
app.use('/hostel',dir);
app.use(express.json());
app.use(errorHandler);
if(process.env.NODE_ENV=='devlopment')
{
    app.use(morgan('dev'));
}
const PORT=process.env.PORT|| 5000;
app.listen(PORT,()=>
{
    console.log('server is running');
});
process.on('unhanndledRejection',(err,promise)=>
{
    console.log('Error');
server.close(()=>process.exit(1));
});

const ErrorResponse = require("../utility/errorResponse");
const errorHandler=(err,req,res,next)=>
{
    let error={...err}
    error.message=err.message;
    console.log(err.stack.red);
    if(err.name==='CastError')
    {
        const message='Room not found with given id ${err.value}';
        error=new ErrorResponse(message,404);
    }
    res.status(err.stausCode || 500).json({
        success: false,
        error:err.message ||' server error'
    });
};
module.exports=errorHandler;
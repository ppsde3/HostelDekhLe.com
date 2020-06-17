const geocoder=require('../utility/geocoder')
const rooms=require('../models/rooms.js');
const ErrorResponse = require('../utility/errorResponse.js');
exports.getrooms=async (req,res,next)=>
{
   try{
    const dir= await dir.find();
    res.status(200).json({ data: dir, success:true});
   }
   catch(err)
   {
    res.status(500).json({ success:false});
   }
};
exports.getroom=async (req,res,next)=>
{
    try{
        const dir= await dir.findbyID(req.params.id);
        if(!dir)
        {
            return next(new ErrorResponse('Room not found with given id ${req.params.id}',404));
        }
        res.status(200).json({sucess:true,data:dir});
        }
        catch(err){
            next(new ErrorResponse('Room not found with id ${req.pars.id}',404));
        }
}; 
exports.insertroom= async (req,res,next)=>
{
    try{
    const dir= await dir.create(req.body)
    res.status(201).json({ data: dir, success:true});
    }
    catch(err){
        res.status(500).json({ success:false});
    }
};
exports.deleteroom=(req,res,next)=>
{
    res.status(200).json({ msg: 'Delete room ${id}', success:'true'});
};
exports.getroomin=asyncHandler(async (req,res,next)=>
{
    const {zipcode,distance}=req.params;
    const loc=await  geocoder.geocod(zipcode);
    const lat=loc[0].latitude;
    const lng=loc[0].longitude;
    const radius=distance/6378;
    const dir= await rooms.find({
        location:{$geoWithin :{$centerSphere:[[lng,lat],radius]}}
    });
    res.status(200).json({sucess:true,count: dir.length});
});
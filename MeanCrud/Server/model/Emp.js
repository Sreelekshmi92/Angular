var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var EmpSchema=new Schema(
    {
        id:{type:Number},
        Name:{type:String},
        Age:{type:Number}
    },

    {
        collection: 'employee'
    }
)
module.exports=mongoose.model("employee",EmpSchema);
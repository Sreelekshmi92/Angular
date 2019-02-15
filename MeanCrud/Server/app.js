var express=require('express')
var app=express();

var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());

var mongoose=require('mongoose')

var db="mongodb://localhost/Empdb"
mongoose.connect(db,function(err){  //opening conection to database
    console.log(err);
})

var emp=require("./model/Emp");

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:4200/");
    res.header("Access-Control-Allow-Origin","*");

    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");

    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");

    next();
})


app.get("/data",function(req,res){
    res.header("Access-Control-Allow-Origin","http://localhost:4200/");
    res.header("Access-Control-Allow-Origin","*");

    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");

    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    
    emp.find({},function(err,result){
        if(err){res.send(err)}
        else{
          res.send(result);
            console.log(result);
        }
    })
  
})

app.get("/msg",function(req,res){

    
     res.send({"msg":"success"});
})

app.post("/insert",function(req,res){
   
    var e1=new emp();
    e1.id=req.body.Employee.id;
    e1.Name=req.body.Employee.Name;
    e1.Age=req.body.Employee.Age;
    e1.save(function(err,result){
        if(err){res.send(err)}
        else{
            res.send("Data inserted");
        }
    })
})

app.listen(8000,function(req,res){
    console.log("Server started listening");
})
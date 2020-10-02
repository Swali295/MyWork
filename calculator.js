const express = require('express');
const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(request, response){
    response.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator",function(request,response){
    var W=Number(request.body.w);
    var H=Number(request.body.h);

    var r=W/(H*H);
    response.send("Your BMI is"+ r);
});

app.get("/", function(request, response){
    response.sendFile(__dirname+"/.html");
});

app.post("/",function(request,response){
    var num1=Number(request.body.num1);
    var num2=Number(request.body.num2);

    var r=num1+num2;
    response.send("The result of calculation is"+ r);
});


app.listen(3000, function(){
    console.log("server started on port 3000");
});
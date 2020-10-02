const express = require('express');
const app=express();

app.get("/", function(request, response){
    response.send("<h1>Hello world!</h1>");
});

app.get("/contact", function(request, response){
    response.send("Contact me: swalisaxena6@gmail.com");
});

app.get("/about", function(request, response){
    response.send("My name is swali saxena");
});

app.get("/hobbies", function(request, response){
    response.send("My hobby is dancing");
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});
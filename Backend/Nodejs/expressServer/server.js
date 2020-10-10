//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response){
	response.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res){
	res.send("Contact me at jschirad@student.com");
});

app.get("/about", function(req, res){
	res.send("Hello! I'm Facu. I'm a Software Developer.")
});

app.listen(3000, function(){
	console.log("Server started on port 3000");
});

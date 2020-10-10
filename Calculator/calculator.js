//jshint	esversion:6

const	express = require("express");

const app = express();

app.get("/", function(req, res){
	res.send("<h1>< Hello World! /> </h1>");
});

app.listen(3000, function(){
	console.log("App started on port 3000");
});
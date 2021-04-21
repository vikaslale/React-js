const express = require("express");
 const bodyParser = require("body-Parser")
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.send("<h1>Welcome to my Channel Vikas:)</h1>")
})
app.listen(4000, function(req, res){
    console.log("server is running");
});
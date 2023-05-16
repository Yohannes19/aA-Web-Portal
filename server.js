const express =require('express');
const path = require('path');
const cors=require('cors');
const app= express();

//const pool=require('./database/db');

//middle
 app.use(express.json())
 app.use(cors())

 app.use(express.static(`${__dirname}/public`)); 
//app.use(express.static(path.join(__dirname, 'assets'))); 
//app.use( express.static(path.join(__dirname + '/node_modules/ol')));



// Redirect
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
    //__dirname : It will resolve to your project folder.
  });
app.get('/twodimension',function(req,res){
    res.sendFile(__dirname + '/public/twodimension.html');
  });
app.get('/threedimension',function(req,res){
    res.sendFile(__dirname + '/public/threedimension.html');
  }); 
  app.get('/services',function(req,res){
    res.sendFile(__dirname + '/public/services.html');
  }); 
  //teams  
  app.get('/teams',function(req,res){
    res.sendFile(__dirname + '/public/teams.html');
  });
  //about
  app.get('/about',function(req,res){
    res.sendFile(__dirname + '/public/about.html');
  });
  
//routes
//app.use("/data",require("./routes/routes"))

app.listen(9000,()=>{
    console.log("server started  on port 9000");
});
// Error handling middleware
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

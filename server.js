const express = require('express');
const routes = require('./routes/routes');
const app = express();


app.use('/api', routes ,(req, res)=>{
    res.write({"data": data});
});

app.listen('8002',(req,res)=> console.log("server started on 8002"));
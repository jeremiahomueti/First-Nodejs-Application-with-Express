const express = require('express')
const app=express();
const port=8080;

app.get('/Learning', (req,res)=>{
    res.send("My Very First Nodejs with Express Project *grins* ")
})

app.listen(port, ()=>{
    console.log('Server Started, Port', port)
})
const express = require('express')
const app = express()

app.get('/getData', (req,res)=>{
    res.json({
        "statuscode":200,"statusmessage":"successs"
    })
})

app.listen(3000,(req,res)=>{
    console.log("express is listening at port 3000");
} )
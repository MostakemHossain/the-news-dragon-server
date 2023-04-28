const express= require('express');

const app= express();
const port= process.env.PORT  || 4000

const catagories= require('./data/catagories.json')

app.get('/catagories',(req,res)=>{
    res.send(catagories);
})
app.get('/',(req,res)=>{
    res.send('Dragon Is comming')
})

app.listen(port,()=>{
    console.log(`Dragon API is running onport : ${port}`)
})
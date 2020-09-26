const express = require('express');
const app = express();
const cros=require('cors');
const user=['ami','tmi','se','amra','amader','hi']

app.use(cros());
app.get('/',(req,res)=>{
    res.send('thanks for call me');
})
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.post('/adduser',(req,res)=>{
    const user=req.body;
    user.id=55;
    res.send(user);
    
})
app.get('/user/:id',(req,res)=>{
    const id=req.params.id;
    const name=user[id];
    res.send({name,id});
})

app.listen(5000,()=>console.log('listening to port 5000'));



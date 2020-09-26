const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('thanks for call me');
})
app.listen(50000,()=>console.log('listening to port 5000'));



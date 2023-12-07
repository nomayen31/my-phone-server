const express = require('express');
const cors = require('cors')
const phone = require('./phone.json')
const app = express()
const port = 8000;
app.use(cors())

app.get('/', (req , res)=>{
    res.send('This is Root file')
})

app.get('/phone',(req, res)=>{
    res.send(phone)
})
app.get('/phone/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    const singlePhone = phone.find(singlePhone => singlePhone.id === id) || {};
    res.send(singlePhone)
    
})

app.get('/ohin', (req, res)=>{
    res.send('This is Ohin ')
})


app.listen(port , ()=>{
    console.log(`server started on ${port}`);
})
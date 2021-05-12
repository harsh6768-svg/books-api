const express = require('express')
const MongoClient = require('mongodb').MongoClient
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://system:harshso@cluster0.gkjxj.mongodb.net/testdb?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })
const app = express()
app.use(express.json())
var db
app.get('/',(req,resp) =>{
    resp.send('Welcome to the world of mongodb')
  
  
  })
  
app.get('/api/books',(req,resp)=>{
    db.collection('user').find({}).toArray((err,result) => {
        if(err) throw err
        
   resp.send(result)
    })
 
})
  app.listen(8000,() =>{
    const uri = 'mongodb+srv://system:harshso@cluster0.gkjxj.mongodb.net/testdb?retryWrites=true&w=majority';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
      const collection = client.db("test").collection("services");
      // perform actions on the collection object
      client.close();
        console.log("Connection Sucessful!")
    });
  })

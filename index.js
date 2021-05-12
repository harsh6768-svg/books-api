const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()
app.use(express.json())
const books = [
  {title:'java Programming', id:1},
  {title:'C # Programming', id:2},
  {title:'C++ Programming', id:3}
]
const details = [
    {title:'Is the Best Programming Language', id:4},
    {title:'Is the Toughest Language', id:5},
    {title:'Is the most use language', id:6}
  ]
app.get('/',(req,resp) =>{
  resp.send('Welcome to automation in java programming')


})
app.get('/api/books',(req,resp)=>{
    resp.send(books)
 
})
app.get('/api/books/:id',(req,resp)=>{
    const book=books.find(v => v.id=== parseInt(req.params.id))
    if(!book)resp.status(404).send('Book Not Found')
    resp.send(book)
    

})
app.post('/api/books/addBook',(req,resp)=>{
  const book={
      id:books.length+1,
      title:req.body.title
  }
  books.push(book)
  resp.send(book)
 
})
app.put('/api/books/:id',(req,resp)=>{
    const book=books.find(v => v.id=== parseInt(req.params.id))
    if(!book)resp.status(404).send('Book Not Found')
   book.title = req.body.title
   resp.send(book)
    

})
app.get('/api/details',(req,resp)=>{
    resp.send(details)

})
app.delete('/api/books/:id',(req,resp)=>{
    const book=books.find(v => v.id=== parseInt(req.params.id))
    if(!book)resp.status(404).send('Book Not Found')
  const index=books.indexOf(book)
  books.splice(index,1)
   resp.send(book)
    

})
app.listen(8000)
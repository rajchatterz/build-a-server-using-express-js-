const express = require('express')
const app = express()
const port = 8001
const hostname = "localhost"
app.get('/',(req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    res.end("I am homepage")
})
app.get('/about',(req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    res.end("I am about page")
})
app.get('/contact',(req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    res.end("I am contact page")
})

app.listen(port,()=>{
    console.log(`server running at ${port} and ${hostname}`)
})
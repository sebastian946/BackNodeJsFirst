var express = require('express')
var app = express()

var port = process.env.port || 8080 //Open the port

app.get('/', function(req, res){
    res.json({mensaje: 'Hola mundo'})
})

app.get('/cervezas',function(req,res){
    res.json({mensaje: 'envio cervezas'})
})

app.post('/', function(req,res){
    res.json({mensaje: 'Metodo post'})
})

app.delete('/', function(req,res){
    res.json({mensaje: 'Metodo delete'})
})

// Inicio el servidor

app.listen(port)
console.log('Api escuchando en el puerto: '+ port)
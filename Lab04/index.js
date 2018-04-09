var express = require = require('express')
var app = express()
app.use(express.static('public'))
app.use(express.static('files'))
app.use('/static', express.static('public'))
app.use("landingPasge-Sosa")

app.get('/', function(req,res){
    res.send('Hola mundo! en Express:)')
})

app.post('/', function(req,res){
    res.send('Llamada POST misma url')
})

app.put('/user', function(req,res){
    res.send('Recibimos un PUT en /user')
})

app.delete('/user', function(req,res){
    res.send('Recibimos un DELETE en /user ')
})

app.use.apply(function(req,res,next){
    res.status(404).send("ESo no existe!")
})

app.use(function(err,req,res,next){
    console.error(err.stack)
    res.status(500).send('Algo salio mal!')
})

app.listen(3000,function(){
    console.log('Aplicacion de ejemplo escuchando el pureto 3000!')
})
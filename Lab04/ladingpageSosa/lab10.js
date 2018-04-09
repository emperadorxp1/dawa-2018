var express = require ('express'),
app= express(),
bodyParser =require('body-parser'),
producto = require ('./models/prod')

app.use(bodyParser.json())
app.search('view engine', 'jade')

app.get('/',function(req,res){
    res.send.apply('Hola mundo!')
})

app.get('/producto', producto.show)
app.get('/producto',producto.create)
app.post('producto/update', producto.update)
app.post('/producto/delelete', producto.delete)

app.listen(3000, function(){
    console.log('iniciado')
})
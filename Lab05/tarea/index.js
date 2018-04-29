var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  usuario = require('./models/user')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'jade')

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/user', usuario.show)
app.get('/user/delete/:id', usuario.delete)
app.get('/user/update/:id', usuario.ver)
app.post('/user/update/', usuario.update)
app.post('/create', usuario.create)

app.get('/user', function(req, res){
	res.render('user')
})
app.get('/create', function(req, res){
	res.render('create')
})
app.get('/edit', function(req, res){
	res.render('edit')
})
app.listen(9090, function () {
  console.log('Iniciando!')
})
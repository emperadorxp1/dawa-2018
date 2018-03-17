var http = require('http')
var manejador = function(solicitud,respuesta){
    console.log('Conexion entrante')
    respuesta.write('tmr \n')
    respuesta.end('HOla Mundo!')
}
var servidor = http.createServer(manejador)
servidor.listen(8080)
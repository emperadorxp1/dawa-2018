var http =require('http')
manejador =(Solicitud,respuesta)=>{
    var i =0
    while(true){
        console.log(i+'-->')
        i++
    }
}
var servidor = http.createServer(manejador)
servidor.listen(8080)
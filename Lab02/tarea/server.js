var http = require('http');
var url = require('url');
	fs = require('fs');
var ope = require('./index.js');


var o = ope.operaciones,
	datos = ope.variable;


http.createServer(function(solicitud,respuesta){
	const objURL = url.parse(solicitud.url);
	let ruta = '.'+objURL.pathname;
	
	if (ruta=='./') {
		ruta = './index.html';
	}
	
	fs.stat(ruta,error => {
		if(!error){
			fs.readFile(ruta,(error,html)=>{
				
				if(error){
					respuesta.write('Error Interno');
					respuesta.end();
				} else {

					var html_string = html.toString(),
						dato = datos(solicitud),
						res = o(dato[0], dato[1], dato[2]);
					html_string = html_string.replace('{res}', res);
					respuesta.write(html_string);
					console.log(dato);
					respuesta.end();
				}
			});
		} else {
			respuesta.write("Pagina no encontrada");
			respuesta.end();
		}
	});
}).listen(8080);
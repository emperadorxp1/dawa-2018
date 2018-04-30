var http = require('http');
var dt = require('./date.js');
fs = require('fs');

var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    var dd = fecha.getDate();
	var mm = fecha.getMonth()+1;
	var yyyy = fecha.getFullYear();

	var mostrar_fecha = mm+'/'+dd+'/'+yyyy;
    var mostrar = hora +":"+minutos+":"+segundos;
    var form = fecha.toUTCString();
    console.log(mostrar ,"\n" + mostrar_fecha, "\n" + form);

http.createServer(function (req, res) {
	fs.readFile('./dateform.html',function(err,html){
		var html_string = html.toString();

		html_string = html_string.replace('{formato1}',mostrar);
		html_string = html_string.replace('{formato2}',mostrar_fecha);
		html_string = html_string.replace('{formato3}',form);
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html_string);
    res.end();
});
}).listen(8080);
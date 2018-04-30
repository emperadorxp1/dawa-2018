function tiempo(req) {
    
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
    return {
    	mostrar: mostrar,
    	mostrar_fecha: mostrar_fecha,
    	form: form
    } 
    
};
module.exports.tiempo =	tiempo;
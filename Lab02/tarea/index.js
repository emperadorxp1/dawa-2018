function operaciones (num1,num2,operacion){
	var numero1 = parseInt(num1),
		numero2 = parseInt(num2),
		ope = operacion,
		res=0;

		switch (ope){
			case "sumar":
				res = numero1+numero2;
				break
			case "restar":
				res = numero1-numero2;
				break
			case "multiplicar":
				res = numero1*numero2;
				break;
			case "division":
				if(numero2 != 0){
					res = numero1/numero2;	
				}else{
					res = "No se puede divir entre cero";
				}
				break
		}
	return res;
	console.log(res);
}

function variable(req){
	var valores = [];
	if(req.url.indexOf('?')>0){
		var url_data = req.url.split('?');
		var arreglo_parametros = url_data[1].split('&');
		for (var i = 0 ; i < arreglo_parametros.length; i++) {
			var parametro = arreglo_parametros[i];
			var param_data = parametro.split('=');		
			valores[i] = param_data[1];
		}
	} else {
		valores = [0, 0, 0];
	}
	return	valores;
}
module.exports.operaciones = operaciones;
module.exports.variable = variable;
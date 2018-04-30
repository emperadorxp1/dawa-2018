var param_replacer = require('./node_modules/replace');
var _ = require('underscore');

var integers = [1, 27, 91, 32, 86, 12, 8, 68, 97, 72];
var integerLimit = 50;
var topIntegers = _.filter(integers, function (aInteger){ 
    return aInteger > integerLimit;

});
console.log(topIntegers);

var objetivo = "%hello% %world%! -- %world% %hello%!";
var idioma = "es";
var reemplazos = {
	"en":{
		"hello": "Hello",
		"world": "World"
	},
	"es":{
		"hello": "Hola",
		"world": "Mundo"
	}
} ;

var resultado = param_replacer.replace(objetivo, reemplazos[idioma]);
console.log(resultado);
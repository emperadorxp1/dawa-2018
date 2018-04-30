function navidad(){
    var navidad = new Date('12/25/2018');
    var dia_actual = new Date();
    var tiempo_faltante = navidad - dia_actual;
    return ("Faltan " +Math.round(tiempo_faltante/100000000) + "dias para navidad");
    }
    navidad()
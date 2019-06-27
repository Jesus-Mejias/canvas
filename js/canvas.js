// (|:
$(document).ready(function () {

	// ]: Obtiene el elemento canvas
	var canvas = $("#skCanvas");
	// ]: ctxo para renderizado en dos dimenciones
	var ctx = canvas[0].getContext("2d");
	// ]: Estado del boton del raton	
	var pulsado;
	// ]: Controla el color de la linea
	var color = "#000000";
	var size = 5;
	// ]: Posicion del cursor
	var x = 0;
	var y = 0;

	/* -------------------------------------------
	*  |~> Acciones del raton
	*  -------------------------------------------
	*/ 

	// ]: Boton del raton pulsado
	$("#skCanvas").mousedown(function (e) {
		pulsado = true;
		[x, y] = [e.offsetX, e.offsetY];
	});

	// ]: Movimiento del raton
	$('#skCanvas').mousemove(function(e){

		if (pulsado) {
			ctx.strokeStyle = color;
			ctx.lineJoin = 'round';
			ctx.lineCap = 'round';
			ctx.lineWidth = size;
			ctx.beginPath();
			ctx.moveTo(x, y);
			ctx.lineTo(e.offsetX, e.offsetY);
			ctx.stroke();
			[x, y] = [e.offsetX, e.offsetY];
		}
    });
 	
 	// ]: Boton del raton sin pulsar
    $('#skCanvas').mouseup(function(e){
        pulsado = false;
    });
 	
 	// ]: Raton fuera del canvas
    $('#skCanvas').mouseleave(function(e){
        pulsado = false;
    });

    /* -------------------------------------------
	*  |~> Botones que sirven como herramientas 
	*  	   para interactuar con el canvas.	
	*  -------------------------------------------
	*/ 

	// ]: Limpia lo que se dibuje en el canvas
    $("#clear").on('click', function () {

		// ]: Borra todo el contenido del canvas
		ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);
	});

	// ]: Boton con funcion de lapiz
	$("#pencil").on('click', function () {

	});

	// ]: Boton con funcion de brocha
	$("#brush").on('click', function () {

	});

	// ]: Boton con funcion de dibujar rectangulo
	$("#rectangle").on('click', function () {

	});

	// ]: Boton con funcion de dibujar circulo
	$("#circle").on('click', function () {

	});

	// ]: Boton con funcion de cambiar color
	$("#color").on('change', function () {

	});

	// ]: Boton con funcion de borrador
	$("#rubber").on('click', function () {

	});

	// ]: Boton con funcion de efecto espejo
	$("#mirror").on('click', function () {

	});

	// ]: Boton con funcion de arcoiris
	$("#rainbow").on('click', function () {

	});

	// ]: Boton con funcion de cargar imagen
	$("#image").on('click', function () {

	});

});

// ]>~
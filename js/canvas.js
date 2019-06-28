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
	var posicion;
	// ]: Tipo de trazo
	var trazo = 'pencil';

	/* -------------------------------------------
	*  |~> Acciones del raton
	*  -------------------------------------------
	*/ 

	// ]: Boton del raton pulsado
	$("#skCanvas").mousedown(function (e) {
		pulsado = true;
		posicion = { x:e.offsetX, y:e.offsetY};
	});

	// ]: Movimiento del raton
	$('#skCanvas').mousemove(function(e){

		if (!pulsado) return;

		if (trazo == 'pencil') {

			ctx.strokeStyle = color;
			ctx.lineJoin = 'round';
			ctx.lineCap = 'round';
			ctx.lineWidth = size;
			ctx.beginPath();
			ctx.moveTo(posicion.x, posicion.y);
			ctx.lineTo(e.offsetX, e.offsetY);
			ctx.stroke();
			posicion = { x:e.offsetX, y:e.offsetY};

		}else if (trazo == 'brush') {

			ctx.strokeStyle = color;
			ctx.beginPath();
  
			ctx.globalAlpha = 1;
			ctx.moveTo(posicion.x, posicion.y);
			ctx.lineTo(e.offsetX, e.offsetY);
			ctx.stroke();
			  
			ctx.moveTo(posicion.x - 4, posicion.y - 4);
			ctx.lineTo(e.offsetX - 4, e.offsetY - 4);
			ctx.stroke();
			
			ctx.moveTo(posicion.x - 2, posicion.y - 2);
			ctx.lineTo(e.offsetX - 2, e.offsetY - 2);
			ctx.stroke();
			
			ctx.moveTo(posicion.x + 2, posicion.y + 2);
			ctx.lineTo(e.offsetX + 2, e.offsetY + 2);
			ctx.stroke();
			
			ctx.moveTo(posicion.x + 4, posicion.y + 4);
			ctx.lineTo(e.offsetX + 4, e.offsetY + 4);
			ctx.stroke();
			
			posicion = { x: e.offsetX, y: e.offsetY };

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
		color = $("#color").val();
		$("#color").prop('disabled', false);
		size = 5;
		trazo = 'pencil';
	});

	// ]: Boton con funcion de brocha
	$("#brush").on('click', function () {
		color = $("#color").val();
		$("#color").prop('disabled', false);
		trazo = 'brush';
	});

	// ]: Boton con funcion de dibujar rectangulo
	$("#rectangle").on('click', function () {

	});

	// ]: Boton con funcion de dibujar circulo
	$("#circle").on('click', function () {

	});

	// ]: Boton con funcion de cambiar color
	$("#color").on('change', function () {
		color = $("#color").val();
	});

	// ]: Boton con funcion de borrador
	$("#rubber").on('click', function () {
		color = "#ffffff";
		$("#color").prop('disabled', true);
		size = 20;	
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
// (|:
// |~> Variables globales
var movimientos = new Array(); // ]: Guarda la posicion del raton
var pulsado;				   // ]: Estado del boton del raton	

$(document).ready(function () {

	// ]: Obtiene el elemento canvas
	var canvas = $("#skCanvas");
	// ]: Contexto para renderizado en dos dimenciones
	var ctx = canvas[0].getContext("2d");
	// ]: Puntos medios
	var centerX = canvas[0].width / 2;
	var centerY = canvas[0].height / 2;

	// ]: Boton para dibujo basico
	$("#basic").on('click', function () {
		
		$("skCanvas").mousedown(function (e) {
			pulsado = true;
			movimientos.push([e.pageX - this.offsetLeft, e.pageY - this.offsetTop, flase]);
			repinta();
		})

		
	})

	// ]: Boton para limpiar el canvas
	$("#clear").on('click', function () {

		// ]: Borra todo el contenido del canvas
		ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);
	})

});
// ]>~
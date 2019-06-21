// (|:
$(document).ready(function () {

	// ]: Obtiene el elemento canvas
	var canvas = $("#skCanvas");
	// ]: Contexto para renderizado en dos dimenciones
	var ctx = canvas[0].getContext("2d");
	// ]: Puntos medios
	var centerX = canvas[0].width / 2;
	var centerY = canvas[0].height / 2;

	// ]: Boton para dibujos basicos
	$("#basic").on('click', function () {

		// ]: Borra todo el contenido del canvas
		ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);

		// ]: Dibuja el titulo en el canvas
		ctx.textAlign = "center";
		ctx.font = "30pt Verdana";
		ctx.fillText("Basic Drawing", centerX, 35);

		// ]: Dibuja linea debajo del titulo
		ctx.translate(0, 0.8);
		ctx.beginPath();
		ctx.moveTo(15, 45);
		ctx.lineTo(815, 45);
		ctx.stroke();

		// ]: Dibuja un rectangulo relleno
		ctx.fillRect(55, 55, 80, 40);
		// ]: Dibuja el contorno de un rectangulo
		ctx.strokeRect(55, 105, 80, 40);

		// |~> Trazos
		// ]: Dibuja un circulo
		ctx.beginPath();
		ctx.arc(95, 185, 30, 0, 2 * Math.PI);
		ctx.stroke();

		// ]: Dibuja un triangulo
		ctx.beginPath();
		ctx.moveTo(65, 255);
		ctx.lineTo(130, 270);
		ctx.lineTo(130, 230);
		ctx.closePath();
		ctx.fill();

	})

	// ]: Boton para limpiar el canvas
	$("#clear").on('click', function () {

		// ]: Borra todo el contenido del canvas
		ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);
	})

});
// ]>~
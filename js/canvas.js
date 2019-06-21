
$(document).ready(function () {

	// ]: Obtiene el elemento canvas
	var canvas = $("#skCanvas");
	// ]: Contexto para renderizado en dos dimenciones
	var ctx = canvas[0].getContext("2d");

	// ]: Boton para dibujos basicos
	$("#basic").on('click', function () {

		// ]: Borra todo el contenido del canvas
		ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);

		// ]: Dibuja un rectangulo relleno
		ctx.fillRect(25, 25, 40, 20);
		// ]: Dibuja el contorno de un rectangulo
		ctx.strokeRect(25, 50, 40, 20);

		// |~> Trazos
		// ]: Dibuja un circulo
		ctx.beginPath();
		ctx.arc(45, 90, 15, 0, 2 * Math.PI);
		ctx.stroke();

		// ]: Dibuja un triangulo
		ctx.beginPath();
		ctx.moveTo(30, 125);
		ctx.lineTo(60, 140);
		ctx.lineTo(60, 110);
		ctx.closePath();
		ctx.fill();

	})

	// ]: Boton para limpiar el canvas
	$("#clear").on('click', function () {

		// ]: Borra todo el contenido del canvas
		ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);
	})

});

// (|:
$(document).ready(function () {

	// ]: Obtiene el elemento canvas
	var canvas = $("#skCanvas");
	// ]: Contexto para renderizado en dos dimenciones
	var ctx = canvas[0].getContext("2d");
	// ]: Puntos medios
	var centerX = canvas[0].width / 2;
	var centerY = canvas[0].height / 2;

	// |~> Boton para dibujos basicos
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
		ctx.lineTo(735, 45);
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

		// |~> Lineas
		// ]: Continuas
		ctx.lineWidth = 15;
		ctx.beginPath();
		ctx.lineCap = "butt";
		ctx.moveTo(180, 85);
		ctx.lineTo(380, 85);
		ctx.stroke();

		ctx.beginPath();
		ctx.lineCap = "round";
		ctx.moveTo(180, 110);
		ctx.lineTo(380, 110);
		ctx.stroke();

		ctx.beginPath();
		ctx.lineCap = "square";
		ctx.moveTo(180, 135);
		ctx.lineTo(380, 135);
		ctx.stroke();

		// ]: Discontiuas
		ctx.lineWidth = 4
		ctx.setLineDash([4, 14]);
		ctx.beginPath();
		ctx.lineCap = "square";
		ctx.moveTo(180, 185);
		ctx.lineTo(380, 185);
		ctx.stroke();

		ctx.setLineDash([4, 14, 18]);
		ctx.beginPath();
		ctx.lineCap = "square";
		ctx.moveTo(180, 205);
		ctx.lineTo(380, 205);
		ctx.stroke();

		ctx.setLineDash([8, 14, 1, 16]);
		ctx.beginPath();
		ctx.lineCap = "square";
		ctx.moveTo(180, 225);
		ctx.lineTo(380, 225);
		ctx.stroke();

		// |~> Espiral
		a = 1;
		b = 4;

		ctx.setLineDash([]);
		ctx.beginPath();
		ctx.moveTo(550, centerY);
		for (var i = 0; i < 230; i++) {
			angulo = 0.1 * i;
			x = 550 + (a + b * angulo) * Math.cos(angulo);
			y = centerY + (a + b * angulo) * Math.sin(angulo);

			ctx.lineTo(x, y);
		}
		ctx.stroke();
	})

	// |~> Boton para seleccionar color
	$("#color").on('click', function () {
		// ]: Borra todo el contenido del canvas
		ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);

		// ]: Dibuja el titulo en el canvas
		ctx.textAlign = "center";
		ctx.font = "30pt Verdana";
		ctx.fillText("Color Switching", centerX, 35);

		// ]: Dibuja linea debajo del titulo
		ctx.translate(0, 0.8);
		ctx.beginPath();
		ctx.moveTo(15, 45);
		ctx.lineTo(735, 45);
		ctx.stroke();
	}) 

	// |~> Boton para seleccionar dibujo con pincel
	$("#brush").on('click', function () {
		// ]: Borra todo el contenido del canvas
		ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);

		// ]: Dibuja el titulo en el canvas
		ctx.textAlign = "center";
		ctx.font = "30pt Verdana";
		ctx.fillText("Brush Size", centerX, 35);

		// ]: Dibuja linea debajo del titulo
		ctx.translate(0, 0.8);
		ctx.beginPath();
		ctx.moveTo(15, 45);
		ctx.lineTo(735, 45);
		ctx.stroke();
	})

	// |~> Boton para seleccionar color
	$("#color").on('click', function () {
		// ]: Borra todo el contenido del canvas
		ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);

		// ]: Dibuja el titulo en el canvas
		ctx.textAlign = "center";
		ctx.font = "30pt Verdana";
		ctx.fillText("Color Switching", centerX, 35);

		// ]: Dibuja linea debajo del titulo
		ctx.translate(0, 0.8);
		ctx.beginPath();
		ctx.moveTo(15, 45);
		ctx.lineTo(735, 45);
		ctx.stroke();
	})

	// |~> Boton para seleccionar color
	$("#color").on('click', function () {
		// ]: Borra todo el contenido del canvas
		ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);

		// ]: Dibuja el titulo en el canvas
		ctx.textAlign = "center";
		ctx.font = "30pt Verdana";
		ctx.fillText("Color Switching", centerX, 35);

		// ]: Dibuja linea debajo del titulo
		ctx.translate(0, 0.8);
		ctx.beginPath();
		ctx.moveTo(15, 45);
		ctx.lineTo(735, 45);
		ctx.stroke();
	})

	// |~> Boton para seleccionar color
	$("#color").on('click', function () {
		// ]: Borra todo el contenido del canvas
		ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);

		// ]: Dibuja el titulo en el canvas
		ctx.textAlign = "center";
		ctx.font = "30pt Verdana";
		ctx.fillText("Color Switching", centerX, 35);

		// ]: Dibuja linea debajo del titulo
		ctx.translate(0, 0.8);
		ctx.beginPath();
		ctx.moveTo(15, 45);
		ctx.lineTo(735, 45);
		ctx.stroke();
	})

	// |~> Boton para seleccionar color
	$("#color").on('click', function () {
		// ]: Borra todo el contenido del canvas
		ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);

		// ]: Dibuja el titulo en el canvas
		ctx.textAlign = "center";
		ctx.font = "30pt Verdana";
		ctx.fillText("Color Switching", centerX, 35);

		// ]: Dibuja linea debajo del titulo
		ctx.translate(0, 0.8);
		ctx.beginPath();
		ctx.moveTo(15, 45);
		ctx.lineTo(735, 45);
		ctx.stroke();
	})

	// |~> Boton para seleccionar color
	$("#color").on('click', function () {
		// ]: Borra todo el contenido del canvas
		ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);

		// ]: Dibuja el titulo en el canvas
		ctx.textAlign = "center";
		ctx.font = "30pt Verdana";
		ctx.fillText("Color Switching", centerX, 35);

		// ]: Dibuja linea debajo del titulo
		ctx.translate(0, 0.8);
		ctx.beginPath();
		ctx.moveTo(15, 45);
		ctx.lineTo(735, 45);
		ctx.stroke();
	})

	// |~> Boton para seleccionar color
	$("#color").on('click', function () {
		// ]: Borra todo el contenido del canvas
		ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);

		// ]: Dibuja el titulo en el canvas
		ctx.textAlign = "center";
		ctx.font = "30pt Verdana";
		ctx.fillText("Color Switching", centerX, 35);

		// ]: Dibuja linea debajo del titulo
		ctx.translate(0, 0.8);
		ctx.beginPath();
		ctx.moveTo(15, 45);
		ctx.lineTo(735, 45);
		ctx.stroke();
	})

	// |~> Boton para limpiar el canvas
	$("#clear").on('click', function () {

		// ]: Borra todo el contenido del canvas
		ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);
	})

});
// ]>~
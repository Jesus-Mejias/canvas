// (|:
// |~> Variables globales
var movimientos = new Array(); // ]: Guarda la posicion del raton
var pulsado;				   // ]: Estado del boton del raton	

$(document).ready(function () {

	// ]: Obtiene el elemento canvas
	var canvas = $("#skCanvas");
	// ]: ctxo para renderizado en dos dimenciones
	var ctx = canvas[0].getContext("2d");
	// ]: Puntos medios
	var centerX = canvas[0].width / 2;
	var centerY = canvas[0].height / 2;

<<<<<<< HEAD
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
=======
	// ]: Boton para dibujo basico
	$("skCanvas").mousedown(function (e) {
		pulsado = true;
		movimientos.push([e.pageX - this.offsetLeft, e.pageY - this.offsetTop, flase]);
		repinta(ctx);
	});

	$('#skCanvas').mousemove(function(e){
          if(pulsado){
              movimientos.push([e.pageX - this.offsetLeft,
                  e.pageY - this.offsetTop,
                  true]);
            repinta(ctx);
          }
    });
 
        $('#skCanvas').mouseup(function(e){
          pulsado = false;
        });
 
        $('#skCanvas').mouseleave(function(e){
          pulsado = false;
        });
        repinta(ctx);
>>>>>>> 4af10a6f85fd93962bc8b135e03657cbf1290a3e


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

function repinta(ctx) {
	console.log('dentro de la funcion');
	
	ctx.strokeStyle = "#0000a0";
  ctx.lineJoin = "round";
  ctx.lineWidth = 6;
 
  for(var i=0; i < movimientos.length; i++)
  {     
    ctx.beginPath();
    if(movimientos[i][2] && i){
      ctx.moveTo(movimientos[i-1][0], movimientos[i-1][1]);
     }else{
      ctx.moveTo(movimientos[i][0], movimientos[i][1]);
     }
     ctx.lineTo(movimientos[i][0], movimientos[i][1]);
     ctx.closePath();
     ctx.stroke();
  }
}
// ]>~
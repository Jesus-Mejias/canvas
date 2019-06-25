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


	// ]: Boton para limpiar el canvas
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
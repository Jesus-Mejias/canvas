
$(document).ready(function () {

	var canvas = $("#skCanvas");
	var ctx = canvas[0].getContext("2d");

	$("#basic").on('click', function () {
		basic(ctx);
	})

});

function basic(ctx) {
	ctx.beginPath();
	ctx.arc(95, 50, 40, 0, 2 * Math.PI);
	ctx.stroke();
}
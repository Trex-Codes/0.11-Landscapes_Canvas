var canvas = document.getElementById('CanvasJS');
var ctx = canvas.getContext("2d");

ctx.beginPath();
var gradient = ctx.createLinearGradient(0, 150, 0, 730);
gradient.addColorStop(0,"rgba(28, 130, 226)");
gradient.addColorStop(1,"white");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.closePath();

// -----------------------------------------------
// -----------------------------------------------

// MONTAÑAS (1)

// (1)
ctx.beginPath();
ctx.strokeStyle = "grey";
// ctx.fillStyle = "rgb(124, 75, 231)";
ctx.fillStyle = "rgba(124, 75, 231)";
ctx.moveTo(0, 546);
ctx.lineTo(317, 182);
ctx.lineTo(632, 546);
ctx.lineTo(0, 546);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (2)
ctx.beginPath();
// ctx.fillStyle = "rgb(83, 14, 235)";
ctx.fillStyle = "rgba(83, 14, 235)";
ctx.moveTo(317, 546);
ctx.lineTo(632, 182);
ctx.lineTo(948, 546);
ctx.lineTo(317, 546);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (3)
ctx.beginPath();
// ctx.fillStyle = "rgb(83, 14, 235)";
ctx.fillStyle = "rgba(83, 14, 235)";
ctx.moveTo(948, 546);
ctx.lineTo(1264, 182);
ctx.lineTo(1585, 546);
ctx.lineTo(948, 546);
ctx.stroke();	
ctx.fill();	
ctx.closePath();	


// (4)
ctx.beginPath();
ctx.strokeStyle = "grey";
// ctx.fillStyle = "rgb(124, 75, 231)";
ctx.fillStyle = "rgba(124, 75, 231)";
ctx.moveTo(632, 546);
ctx.lineTo(948, 182);
ctx.lineTo(1264, 546);
ctx.lineTo(632, 546);
ctx.stroke();
ctx.fill();
ctx.closePath();


// -----------------------------------------------
// -----------------------------------------------

// TRIANGULOS MEDIOS (MOUNTAINS)

		// (1)
		ctx.beginPath();	
		ctx.fillStyle = "rgba(251, 252, 253)";
		ctx.strokeStyle = "rgba(251, 252, 253)";
		ctx.moveTo(237, 274);
		ctx.lineTo(317, 455);
		ctx.lineTo(317, 182);
		ctx.lineTo(237, 274);
		ctx.stroke();
		ctx.fill();
		ctx.closePath();

			// (1.1)
			ctx.beginPath();
			ctx.fillStyle = "rgba(211, 222, 232)";
			ctx.strokeStyle = "rgba(211, 222, 232)";
			ctx.moveTo(317, 455);
			ctx.lineTo(395, 274);
			ctx.lineTo(317, 182);
			ctx.lineTo(317, 364);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();


		// (2)
		ctx.beginPath();	
		ctx.fillStyle = "rgba(251, 252, 253)";
		ctx.strokeStyle = "rgba(251, 252, 253)";
		ctx.moveTo(553, 274);
		ctx.lineTo(632, 455);
		ctx.lineTo(711, 274);
		ctx.lineTo(632, 182);
		ctx.lineTo(553, 274);
		ctx.stroke();
		ctx.fill();
		ctx.closePath();

			// (2.2)
			ctx.beginPath();
			ctx.fillStyle = "rgba(211, 222, 232)";
			ctx.strokeStyle = "rgba(211, 222, 232)";
			ctx.moveTo(632, 455);
			ctx.lineTo(711, 274);
			ctx.lineTo(632, 182);
			ctx.lineTo(632, 364);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();

		// (3)
		ctx.beginPath();	
		ctx.fillStyle = "rgba(251, 252, 253)";
		ctx.strokeStyle = "rgba(251, 252, 253)";
		ctx.moveTo(869, 274);
		ctx.lineTo(948, 455);
		ctx.lineTo(948, 182);
		ctx.lineTo(869, 274);
		ctx.stroke();
		ctx.fill();
		ctx.closePath();

			// (3.3)
			ctx.beginPath();
			ctx.fillStyle = "rgba(211, 222, 232)";
			ctx.strokeStyle = "rgba(211, 222, 232)";
			ctx.moveTo(948, 455)
			ctx.lineTo(1027, 274);
			ctx.lineTo(948, 182);
			ctx.lineTo(948, 455);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();

		// (4)
		ctx.beginPath();	
		ctx.fillStyle = "rgba(251, 252, 253)";
		ctx.strokeStyle = "rgba(251, 252, 253)";
		ctx.moveTo(1185, 274);
		ctx.lineTo(1264, 455);
		ctx.lineTo(1264, 182);
		ctx.lineTo(1185, 274);
		ctx.stroke();
		ctx.fill();
		ctx.closePath();

			// (4.4)
			ctx.beginPath();
			ctx.fillStyle = "rgba(211, 222, 232)";
			ctx.strokeStyle = "rgba(211, 222, 232)";
			ctx.moveTo(1264, 455);
			ctx.lineTo(1343, 274);
			ctx.lineTo(1264, 182);
			ctx.lineTo(1264, 364);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();


// -----------------------------------------------
// -----------------------------------------------

// LAGO 
ctx.beginPath();
ctx.fillStyle = "rgba(75, 192, 254)";
ctx.strokeStyle = "black";
ctx.moveTo(1106, 638);
ctx.lineTo(948, 546);
ctx.lineTo(632, 546);
ctx.lineTo(158, 638);
ctx.lineTo(158, 730);
ctx.lineTo(1106, 730);
ctx.lineTo(1106, 638);
ctx.stroke();
ctx.fill();
ctx.closePath();

// -----------------------------------------------
// -----------------------------------------------

// FGURAS LATERALES 

// (Derecha) (1)
ctx.beginPath();
ctx.fillStyle = "rgb(0, 19, 127)";
ctx.moveTo(317, 455);
ctx.lineTo(632, 546);
ctx.lineTo(317, 607);
ctx.stroke();
ctx.fill();
ctx.closePath();

	// (Derecha) (1.1)
	ctx.beginPath();
	ctx.fillStyle = "rgba(32, 20, 178)";
	ctx.moveTo(158, 638);
	ctx.lineTo(158, 546);
	ctx.lineTo(317, 455);
	ctx.lineTo(317, 608);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

// (izquierda) (2)
ctx.beginPath();
ctx.fillStyle = "rgba(32, 20, 178)";
ctx.lineTo(948, 546);
ctx.lineTo(1264, 455);
ctx.lineTo(1264, 638);
ctx.lineTo(1106, 638);
ctx.stroke();
ctx.fill();
ctx.closePath();

	// (Izquierda) (2.2)
	ctx.beginPath();
	ctx.fillStyle = "rgb(0, 19, 127)";
	ctx.moveTo(1264, 455);
	ctx.lineTo(1422, 500);
	ctx.lineTo(1264, 545);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

// -----------------------------------------------
// -----------------------------------------------

// ARBOLES
// (1)
ctx.beginPath();
ctx.fillStyle = "rgb(138, 60, 29)";
ctx.fillRect(1422, 420, 25, 95);
ctx.stroke();
ctx.closePath();

			// RAMA 1
			ctx.beginPath();
			ctx.fillStyle = "rgba(24, 61, 1)";
			ctx.strokeStyle = "rgba(24, 61, 1)";
			ctx.lineTo(1422, 421);
			ctx.lineTo(1343, 421);
			ctx.lineTo(1371, 365);
			ctx.lineTo(1473, 365);
			ctx.lineTo(1503, 421);
			ctx.lineTo(1422, 421);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();

			// RAMA 2
			ctx.beginPath();
			ctx.fillStyle = "rgba(42, 96, 2)";
			ctx.strokeStyle = "rgba(42, 96, 2)";
			ctx.moveTo(1422, 365);
			ctx.lineTo(1343, 365);
			ctx.lineTo(1371, 309);
			ctx.lineTo(1473, 309);
			ctx.lineTo(1503, 365);
			ctx.lineTo(1422, 365);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();

			// RAMA FINAL (3)
			ctx.beginPath();
			ctx.fillStyle = "rgba(55, 138, 1)";
			ctx.strokeStyle = "rgba(55, 138, 1)";
			ctx.moveTo(1422, 309);
			ctx.lineTo(1343, 309);
			ctx.lineTo(1422, 182);
			ctx.lineTo(1503, 309);
			ctx.lineTo(1422, 309);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();

// (2)
ctx.beginPath();
ctx.fillStyle = "rgb(138, 60, 29)";
ctx.fillRect(158, 420, 25, 95);
ctx.stroke();
ctx.closePath();

	
	// rama circular posterior izquierda
	ctx.beginPath();
	ctx.fillStyle = "rgba(55, 138, 1)";
	ctx.strokeStyle = "rgba(55, 138, 1)";
	ctx.arc(115, 335, 60, 0, (Math.PI/180)*360);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// rama circular posterior derecha
	ctx.beginPath();
	ctx.fillStyle = "rgba(55, 138, 1)";
	ctx.strokeStyle = "rgba(55, 138, 1)";
	ctx.arc(200, 315, 65, 0, (Math.PI/180)*360);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// rama circular (PRIMARIA)
	ctx.beginPath();
	ctx.fillStyle = "rgba(42, 96, 2)";
	ctx.strokeStyle = "rgba(42, 96, 2)";
	ctx.arc(155, 350, 85, 0, (Math.PI/180)*360);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

	// rama circular Inferorior 
	ctx.beginPath();
	ctx.fillStyle = "rgba(24, 61, 1)";
	ctx.fillStyle = "rgba(24, 61, 1)";
	ctx.arc(190, 400, 45, 0, (Math.PI/180)*360);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

// -----------------------------------------------
// -----------------------------------------------

// MONTAÑAS CURVAS 
// (1)
ctx.beginPath();
ctx.fillStyle = "rgba(56, 171, 40)";
ctx.strokeStyle = "black";
ctx.arc(65, 730, 280, 0, (Math.PI/180)*360);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "rgba(42, 96, 2)";
ctx.strokeStyle = "black";
ctx.arc(1410, 900, 400, 0, (Math.PI/180)*360);
ctx.stroke();
ctx.fill();
ctx.closePath();

// -----------------------------------------------
// -----------------------------------------------

// Mini-Montañas CURVAS
// IZQ - DER
// (1)
ctx.beginPath();
ctx.fillStyle = "darkgreen";
ctx.arc(35, 730, 35, 0, (Math.PI/180)*360);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (2)
ctx.beginPath();
ctx.fillStyle = "darkgreen";
ctx.arc(104, 730, 35, 0, (Math.PI/180)*360);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (3)
ctx.beginPath();
ctx.fillStyle = "darkgreen";
ctx.arc(173, 730, 35, 0, (Math.PI/180)*360);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (4)
ctx.beginPath();
ctx.fillStyle = "darkgreen";
ctx.arc(242, 730, 35, 0, (Math.PI/180)*360);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (4)
ctx.beginPath();
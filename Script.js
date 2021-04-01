var canvasJs = document.getElementById('CanvasAll');
var ctx = canvasJs.getContext("2d");

var gradient1 = ctx.createLinearGradient(0, 85, 0, 680);
gradient1.addColorStop(0,"rgba(60, 24, 239, 0.8)");
gradient1.addColorStop(1,"rgba(234, 237, 238, 0.5)");
ctx.fillStyle = gradient1;
ctx.fillRect(0, 0, 1585, 546);

// -----------------------------------------------
// -----------------------------------------------

// MONTAÑAS (1)

// (1)
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.fillStyle = "rgba(124, 75, 231, 0.7)";
ctx.moveTo(0, 546);
ctx.lineTo(317, 182);
ctx.lineTo(632, 546);
ctx.lineTo(0, 546);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (2)
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.fillStyle = "rgba(124, 75, 231, 0.7)";
ctx.moveTo(632, 546);
ctx.lineTo(948, 182);
ctx.lineTo(1264, 546);
ctx.lineTo(632, 546);
ctx.stroke();
ctx.fill();
ctx.closePath();

// MONTAÑAS (2)

// (1)
ctx.beginPath();
ctx.fillStyle = "rgba(83, 14, 235, 0.7)";
ctx.moveTo(317, 546);
ctx.lineTo(632, 182);
ctx.lineTo(948, 546);
ctx.lineTo(317, 546);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (2)
ctx.beginPath();
ctx.fillStyle = "rgba(83, 14, 235, 0.7)";
ctx.moveTo(948, 546);
ctx.lineTo(1264, 182);
ctx.lineTo(1585, 546);
ctx.lineTo(948, 546);
ctx.stroke();	
ctx.fill();	
ctx.closePath();	

// -----------------------------------------------
// -----------------------------------------------

// // Linea medio triangulos
// ctx.beginPath();
// ctx.strokeStyle = "purple";
// ctx.moveTo(0, 274);
// ctx.lineTo(1585, 274);
// ctx.stroke();
// ctx.closePath();

// -----------------------------------------------
// -----------------------------------------------

		// (1)
		ctx.beginPath();	
		ctx.fillStyle = "rgba(208, 189, 249)";
		ctx.strokeStyle = "rgba(184, 161, 234)";
		ctx.moveTo(237, 274);
		ctx.lineTo(317, 364);
		ctx.lineTo(317, 182);
		ctx.lineTo(237, 274);
		ctx.stroke();
		ctx.fill();
		ctx.closePath();

			// (1.1)
			ctx.beginPath();
			ctx.fillStyle = "rgba(184, 161, 234)";
			ctx.strokeStyle = "rgba(184, 161, 234)";
			ctx.moveTo(317, 364);
			ctx.lineTo(395, 274);
			ctx.lineTo(317, 182);
			ctx.lineTo(317, 364);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();


		// (2)
		ctx.beginPath();	
		ctx.fillStyle = "rgba(208, 189, 249)";
		ctx.strokeStyle = "rgba(184, 161, 234)";
		ctx.moveTo(553, 274);
		ctx.lineTo(632, 364);
		// ctx.lineTo(711, 274);
		ctx.lineTo(632, 182);
		ctx.lineTo(553, 274);
		ctx.stroke();
		ctx.fill();
		ctx.closePath();

			// (2.2)
			ctx.beginPath();
			ctx.fillStyle = "rgba(184, 161, 234)";
			ctx.strokeStyle = "rgba(184, 161, 234)";
			ctx.moveTo(632, 364);
			ctx.lineTo(711, 274);
			ctx.lineTo(632, 182);
			ctx.lineTo(632, 364);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();

		// (3)
		ctx.beginPath();	
		ctx.fillStyle = "rgba(208, 189, 249)";
		ctx.strokeStyle = "rgba(184, 161, 234)";
		ctx.moveTo(869, 274);
		ctx.lineTo(948, 364);
		ctx.lineTo(948, 182);
		ctx.lineTo(869, 274);
		ctx.stroke();
		ctx.fill();
		ctx.closePath();

			// (3.3)
			ctx.beginPath();
			ctx.fillStyle = "rgba(184, 161, 234)";
			ctx.strokeStyle = "rgba(184, 161, 234)";
			ctx.moveTo(948, 364)
			ctx.lineTo(1027, 274);
			ctx.lineTo(948, 182);
			ctx.lineTo(948, 364);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();

		// (4)
		ctx.beginPath();	
		ctx.fillStyle = "rgba(208, 189, 249)";
		ctx.strokeStyle = "rgba(184, 161, 234)";
		ctx.moveTo(1185, 274);
		ctx.lineTo(1264, 364);
		ctx.lineTo(1264, 182);
		ctx.lineTo(1185, 274);
		ctx.stroke();
		ctx.fill();
		ctx.closePath();

			// (4.4)
			ctx.beginPath();
			ctx.fillStyle = "rgba(184, 161, 234)";
			ctx.strokeStyle = "rgba(184, 161, 234)";
			ctx.moveTo(1264, 364);
			ctx.lineTo(1343, 274);
			ctx.lineTo(1264, 182);
			ctx.lineTo(1264, 364);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();



var canvasJs2 = document.getElementById('CanvasDown');
var ctx = canvasJs2.getContext("2d");

var gradient2 = ctx.createLinearGradient(0, 0, 0, 120);
gradient2.addColorStop(0,"rgba(24, 200, 239, 0.7)");
gradient2.addColorStop(1,"white");
ctx.fillStyle = gradient2;
ctx.fillRect(0, 0, 1585, 182);
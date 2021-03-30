var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

// Gradient
var gradient = ctx.createLinearGradient(0, 0, 0, 85);
gradient.addColorStop(0,"rgba(82, 161, 220)");
gradient.addColorStop(1,"rgba(16, 60, 101)");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.beginPath();
	ctx.fillStyle = "rgba(29, 119, 86)";
	ctx.strokeStyle = "rgba(18, 70, 51)";
	ctx.lineWidth =	4;
	ctx.moveTo(15, 125);
	ctx.bezierCurveTo(45, 70, 105, 165, 130, 100);
	ctx.bezierCurveTo(225, 25, 115, 165, 250, 65);
	ctx.lineTo(300, 45);
	ctx.lineTo(300, 150);
	ctx.lineTo(0, 150);
	ctx.lineTo(15, 125);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

// Background Color Body HTML
BodyNode = document.querySelector('body');
BodyNode.style.backgroundColor = "rgba(16, 60, 101)";

var canvas = document.getElementById('canvas2');
var ctx = canvas.getContext("2d");

	// Gradient
	var gradient = ctx.createLinearGradient(0, 0, 0, 85);
	gradient.addColorStop(0,"rgba(82, 161, 220)");
	gradient.addColorStop(1,"rgba(16, 60, 101)");
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.beginPath();
		ctx.fillStyle = "rgba(29, 119, 86)";
		ctx.strokeStyle = "rgba(18, 70, 51)";
		ctx.lineWidth =	4;
		ctx.moveTo(0, 45);
		ctx.bezierCurveTo(40, 130, 75, 0, 145, 75);
		ctx.bezierCurveTo(195, 115, 215, -5, 300, 95);
		ctx.lineTo(300, 150);
		ctx.lineTo(0, 150);
		ctx.lineTo(0, 45);
		ctx.stroke();
		ctx.fill();
		ctx.closePath();

var canvas3 = document.getElementById('canvas3');
var ctx = canvas3.getContext("2d");

	// Gradient
	var gradient = ctx.createLinearGradient(0, 0, 0, 85);
	gradient.addColorStop(0,"rgba(82, 161, 220)");
	gradient.addColorStop(1,"rgba(16, 60, 101)");
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.beginPath();
	ctx.fillStyle = "rgba(29, 119, 86)";
	ctx.strokeStyle = "rgba(18, 70, 51)";
	ctx.lineWidth =	4;
	ctx.moveTo(0, 95);
	ctx.bezierCurveTo(55, 85, 70, 145, 95, 65);
	ctx.bezierCurveTo(225, 165, 115, -45, 300, 150);
	ctx.lineTo(0, 150);
	ctx.lineTo(0, 95);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();

var canvas = document.getElementById('canvas4');
var ctx = canvas.getContext("2d");

// Gradient
var gradient = ctx.createLinearGradient(0, 0, 0, 185);
gradient.addColorStop(0,"rgba(94, 156, 202)");
gradient.addColorStop(1,"rgba(82, 161, 220)");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

/**************************************/
/**************************************/

// ISLAS
// Isla 01
ctx.beginPath();
ctx.fillStyle = "rgba(234, 233, 133)";
ctx.strokeStyle = "rgba(155, 154, 60)";
ctx.lineWidth =	4;
ctx.moveTo(0, 150);
ctx.quadraticCurveTo(75, 65, 300, 75);
ctx.lineTo(300, 150);
ctx.lineTo(0, 150);
ctx.stroke();
ctx.fill();
ctx.closePath();

var canvas = document.getElementById('canvas5');
var ctx = canvas.getContext("2d");

// Gradient
var gradient = ctx.createLinearGradient(0, 0, 0, 185);
gradient.addColorStop(0,"rgba(94, 156, 202)");
gradient.addColorStop(1,"rgba(82, 161, 220)");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

/**************************************/
/**************************************/

// ISLAS
// Isla 01
ctx.beginPath();
ctx.fillStyle = "rgba(234, 233, 133)";
ctx.strokeStyle = "rgba(155, 154, 60)";
ctx.lineWidth =	4;
ctx.moveTo(300, 75);
ctx.lineTo(0, 75);
ctx.lineTo(0, 150);
ctx.lineTo(300, 150);
ctx.lineTo(300, 75);
ctx.stroke();
ctx.fill();
ctx.closePath(); 


// /**************************************/
// /**************************************/

// linea base izquierda
ctx.beginPath();
ctx.fillStyle = "rgba(153, 132, 39)";
ctx.strokeStyle = "black";
ctx.lineWidth =	1;
ctx.moveTo(170, 0);
ctx.lineTo(130, 0);
ctx.lineTo(130, 75);
ctx.lineTo(170, 75);
ctx.stroke();
ctx.fill();
ctx.closePath();

// linea base derecha
ctx.beginPath();
ctx.moveTo(170, 0);
ctx.lineTo(170, 75);
ctx.stroke();
ctx.closePath();

// Conectores efectos PALMA
ctx.beginPath();
ctx.fillStyle = "rgba(71, 62, 20)";
ctx.strokeStyle = "black";
ctx.lineWidth =	1;
ctx.moveTo(130, 75);
ctx.lineTo(170, 57);
ctx.lineTo(130, 38);
ctx.lineTo(170, 19);
ctx.lineTo(130, 0);
ctx.stroke();
ctx.fill();
ctx.closePath();

var canvas = document.getElementById('canvas6');
var ctx = canvas.getContext("2d");

// Gradient
var gradient = ctx.createLinearGradient(0, 0, 0, 185);
gradient.addColorStop(0,"rgba(94, 156, 202)");
gradient.addColorStop(1,"rgba(82, 161, 220)");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

/**************************************/
/**************************************/

// ISLAS
// Isla 01
ctx.beginPath();
ctx.fillStyle = "rgba(234, 233, 133)";
ctx.strokeStyle = "rgba(155, 154, 60)";
ctx.lineWidth =	4;
ctx.moveTo(0, 75);
ctx.quadraticCurveTo(200, 65, 300, 150);
ctx.lineTo(0, 150);
ctx.lineTo(0, 75);
ctx.stroke();
ctx.fill();
ctx.closePath();

var canvas = document.getElementById('canvas8');
var ctx = canvas.getContext("2d");

// Gradient
var gradient = ctx.createLinearGradient(0, 0, 0, 185);
gradient.addColorStop(0,"rgba(94, 156, 202)");
gradient.addColorStop(1,"rgba(82, 161, 220)");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Tronco Medio
ctx.beginPath();
ctx.fillStyle = "rgba(153, 132, 39)";
ctx.strokeStyle = "black";
ctx.moveTo(160, 75);
ctx.lineTo(135, 75);
ctx.lineTo(130, 150);
ctx.lineTo(170, 150);
ctx.lineTo(160, 75);
ctx.stroke();
ctx.fill();
ctx.closePath();

/**************************************/
/**************************************/

// Conectores efectos ISLA
ctx.beginPath();
ctx.fillStyle = "rgba(71, 62, 20)";
ctx.strokeStyle = "black";
ctx.lineWidth =	1;
ctx.moveTo(130, 150);
ctx.lineTo(168, 133);
ctx.lineTo(132, 114);
ctx.lineTo(163, 95);
ctx.lineTo(135, 75);
ctx.stroke();
ctx.fill();
ctx.closePath();

/**************************************/
/**************************************/

// Cocos 
// (3)
ctx.beginPath();
ctx.fillStyle = "rgba(234, 189, 127)";
ctx.arc(148, 82, 10, 0, (Math.PI/180)*360);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (2)
ctx.beginPath();
ctx.arc(153, 75, 10, 0, (Math.PI/180)*360);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (1)
ctx.beginPath();
ctx.arc(140, 75, 10, 0, (Math.PI/180)*360);
ctx.stroke();
ctx.fill();
ctx.closePath();

/**************************************/
/**************************************/

// RAMAS PALMERAS 

// (1)
ctx.beginPath();
ctx.fillStyle = "rgba(160, 105, 31)";
ctx.moveTo(148, 68);
ctx.lineTo(120, 85);
ctx.lineTo(110, 82);
ctx.lineTo(115, 90);
ctx.lineTo(102, 101);
ctx.lineTo(93, 97);
ctx.lineTo(95, 105);
ctx.lineTo(85, 115);
ctx.bezierCurveTo(65, 135, 65, 70, 148, 68);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (2)
ctx.beginPath();
ctx.fillStyle = "rgba(160, 105, 31)";
ctx.moveTo(148, 68);
ctx.lineTo(90, 72);
ctx.lineTo(92, 67);
ctx.lineTo(83, 73);
ctx.lineTo(65, 76);
ctx.lineTo(64, 70);
ctx.lineTo(55, 77);
ctx.lineTo(28, 81);
ctx.bezierCurveTo(35, 80, 35, 50, 148, 68);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (3)
ctx.beginPath();
ctx.fillStyle = "rgba(160,105, 31)";
ctx.moveTo(148, 68);
ctx.lineTo(105, 55);
ctx.lineTo(110, 50);
ctx.lineTo(93, 52);
ctx.lineTo(65, 45);
ctx.lineTo(75, 40);
ctx.lineTo(53, 42);
ctx.lineTo(25, 35);
ctx.bezierCurveTo(15, 35, 95, 15, 148, 68);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (4)
ctx.beginPath();
ctx.fillStyle = "rgba(160, 105, 31)";
ctx.moveTo(148, 68);
ctx.lineTo(170, 60);
ctx.lineTo(165, 55);
ctx.lineTo(180, 55);
ctx.lineTo(200, 48);
ctx.lineTo(192, 43);
ctx.lineTo(207, 45);
ctx.lineTo(265, 35);
ctx.bezierCurveTo(265, 35, 185, 15, 148, 68);
ctx.stroke();
ctx.fill();
ctx.closePath();

// (5)
ctx.beginPath();
ctx.fillStyle = "rgba(160, 105, 31)";
ctx.moveTo(148, 68);
ctx.lineTo(172, 85);
ctx.lineTo(180, 80);
ctx.lineTo(185, 90);
ctx.lineTo(205, 100);
ctx.lineTo(205, 92);
ctx.lineTo(215, 103);
ctx.lineTo(235, 113);
ctx.bezierCurveTo(235, 110, 205, 65, 148, 68);
ctx.stroke();
ctx.fill();
ctx.closePath();

var canvas = document.getElementById('canvas9');
var ctx = canvas.getContext("2d");

// Gradient
var gradient = ctx.createLinearGradient(0, 0, 0, 185);
gradient.addColorStop(0,"rgba(94, 156, 202)");
gradient.addColorStop(1,"rgba(82, 161, 220)");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

var canvas = document.getElementById('canvas7');
var ctx = canvas.getContext("2d");

// Gradient
var gradient = ctx.createLinearGradient(0, 0, 0, 185);
gradient.addColorStop(0,"rgba(94, 156, 202)");
gradient.addColorStop(1,"rgba(82, 161, 220)");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);
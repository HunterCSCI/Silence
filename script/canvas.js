// Intro screen

var canvas = document.getElementById("mainCanvas");
			var	ctx = canvas.getContext("2d");
			ctx.fillStyle = "#FFFFFF";
			ctx.beginPath();

			ctx.rect(0,0,640,480);
			//ctx.arc(95,50,40,0,2*Math.PI);
			ctx.stroke();

			ctx.fill();
			ctx.endPath();

canvas.addEventListener("mousedown",initiateIntro());

function initiateIntro(){
	var img = document.createElement('img');
	img.src = "img/bg.jpg";
	
}
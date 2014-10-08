// Intro screen

var canvas = document.getElementById("mainCanvas");
			var	ctx = canvas.getContext("2d");
			
			ctx.fillStyle = "#CCCCCC";
			//ctx.beginPath();
			/*
			ctx.rect(0,0,640,480);
			//ctx.arc(95,50,40,0,2*Math.PI);
			ctx.stroke();
			*/
			ctx.fillRect(0,0,640,480);
			//ctx.endPath();
			
			
var img = new Image();
canvas.onclick = function(){
	ctx.drawImage(img, 0, 0);
}

img.src = "img/bg.jpg";
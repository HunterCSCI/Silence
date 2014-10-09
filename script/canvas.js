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

img.onload = function(){
	ctx.drawImage(img, 0, 0);
}
img.src = "img/background.jpg";


// Incomplete function to trigger menu
// Maybe have the symbol fade in and out?

/*
document.onclick = function(){
	ctx.font = '24px Arial';
	ctx
	ctx.textAlign = 'center';
	ctx.fillText('Silence', 0, 0);
}
*/

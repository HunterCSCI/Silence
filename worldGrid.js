for (var i = 0, j = world.length; i < j; i++){
		var canvas = document.getElementbyID('tutorial');
		if (canvas.getContext){
		var ctx = canvas.getContext('2d');}
		else break;

		ctx.fillStyle = "rgb(200,0,0)";
		canvas.write(world[i]);
		canvas.write("<br>");
}

function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.rect (10, 10, 1200, 800);
        ctx.fill();
      }
    }
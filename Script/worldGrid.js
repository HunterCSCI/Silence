function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.rect (10, 10, 1200, 800);
        ctx.fill();
      }
    }
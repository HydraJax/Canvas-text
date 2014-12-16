function doFirst(){
	var x = document.getElementById('canvas');
	// declare a 2d drawing surface
	canvas = x.getContext('2d');
	// draw shadows first, how far off the x/y axis
    canvas.shadowOffsetX = 4;
    canvas.shadowOffsetY = 4;
    // how much do you want the shadow to blur
    canvas.shadowBlur = 6;
    canvas.shadowColor = 'rgba(0,0,255,.5)';

	// declare what font and what to draw in the canvas
	canvas.font="bold 36px Tahoma";
	canvas.textAlign="end";
	canvas.fillText( "Hello World", 300, 100);
	canvas.strokeText( "Joy to World", 500, 200);

}

window.addEventListener("load", doFirst, false);
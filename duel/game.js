let hand1 = new hand();
let hand2 = new hand({owner:1});
var mouseHit = false;


function setup() {
	var canvas = createCanvas(800, 600);
	canvas.parent('game');

}

function draw() {
	background(180);  
	hand1.draw();
	hand2.draw();
}

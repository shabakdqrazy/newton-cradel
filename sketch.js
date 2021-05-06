
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var roof, sling1, sling2, sling3, sling4, slin5;
var ball1, ball2, ball3, ball4, ball5
function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof = new Roof(400, 150, 400, 30);
	ball1 = new Ball(240, 350, 40)
	ball2 = new Ball(320, 550, 40)
	ball3 = new Ball(400, 550, 40)
	ball4 = new Ball(480, 550, 40)
	ball5 = new Ball(560, 550, 40)
	sling1 = new SlingShot(ball1.body, { x: 250, y: 150 })
	sling2 = new SlingShot(ball2.body, { x: 330, y: 150 })
	sling3 = new SlingShot(ball3.body, { x: 410, y: 150 })
	sling4 = new SlingShot(ball4.body, { x: 490, y: 150 })
	sling5 = new SlingShot(ball5.body, { x: 570, y: 150 })



	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("gray");
	roof.display();
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	sling1.display();
	sling2.display();
	sling3.display();
	sling4.display();
	sling5.display();








	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.body, ball1.body.position, { x: -400, y: -400 })
	}
}




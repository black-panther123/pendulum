const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var  rope1,rope2,rope3,rope4,rope5;
var ball1,ball2,ball3,ball4,all5;

function setup() {
  createCanvas(1000, 800);
  engine = Engine.create();
  world = engine.world;

 



 



  ball1 = new Ball(500, 600, 100, 100);
  rope1 = new Rope(ball1.body, { x: 500, y: 200 });

  ball2 = new Ball(550, 600, 100, 100);
  rope2 = new Rope(ball2.body, { x: 550, y: 200 });


  ball3= new Ball(600, 600, 100, 100);
  rope3 = new Rope(ball3.body, { x: 630, y: 200 });

  ball4= new Ball(650, 600, 100, 100);
  rope4 = new Rope(ball4.body, { x: 650, y: 200 });

  ball5= new Ball(750, 600, 100, 100);
  rope5 = new Rope(ball5.body, { x: 750, y: 200 });



}

function draw() {
  background(0);
  Engine.update(engine);
  
 
  ball1.display();
  rope1.display();

  ball2.display();
  rope2.display();

  ball3.display();
  rope3.display();

  ball4.display();
  rope4.display();

  ball5.display();
  rope5.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
}





//function keyPressed(){
 // if(keyCode===32){
  //  rope.attach(this.ball)
 // }
//}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var topBorder
var leftBorder
var rightBorder
var bottomBorder
var ball
var button
var ball2
var button2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  // var hi = {
  //   isStatic: true
  // }
  // topBorder = Bodies.rectangle(200,10,400,50,hi)
  // World.add(world,topBorder)
  // leftBorder = Bodies.rectangle(10,200,50,400,hi)
  // World.add(world,leftBorder)
  // rightBorder = Bodies.rectangle(390,200,50,400,hi)
  // World.add(world,rightBorder)
  // bottomBorder = Bodies.rectangle(200,390,400,50,hi)
  // World.add(world,bottomBorder)
  topBorder = new Ground(200,10,400,50)
  ball = Bodies.circle(200,50,20)
  World.add(world,ball)
  button = createImg('push.png')
  button.position(175,30)
  button.size(50,50)
  button.mouseClicked(force)
  ball2 = Bodies.circle(250,50,20)
  World.add(world,ball2)
  button2 = createImg('push.png')
  button2.position(250,30)
  button2.size(50,50)
  button2.mouseClicked(verticalForce)
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  fill("blue")
  // rect(topBorder.position.x,topBorder.position.y,400,50)
  // rect(leftBorder.position.x,leftBorder.position.y,50,400)
  // rect(rightBorder.position.x,rightBorder.position.y,50,400)
  // rect(bottomBorder.position.x,bottomBorder.position.y,400,50)
  topBorder.Display()
  ellipse(ball.position.x,ball.position.y,20)
  ellipse(ball2.position.x,ball2.position.y,20)
  //drawSprites();
}

function force()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.2, y:0})

}

function verticalForce()
{
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:0,y:-0.2})
}


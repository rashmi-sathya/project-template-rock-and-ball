
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;
var b1,b2,b3,b4;
var top_wall;
var ball,rock;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   
  var ground_options ={
    isStatic: true
  };
 
  var ball_options = {
    restitution: 0.75,
    frictionAir:0.01
  }

  var rock_options = {
//set restitution to the rock as it does not bounce.

  }
   
//Add the image for the button
//Set the position of the button
//Add mouseclicked operation
  
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
//Create a rock object 
//add the rock object to the world

  ground= Bodies.rectangle(200,390,400,20,ground_options);

  World.add(world, ground);
 
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
rect(ground.position.x,ground.position.y,400,20);
ellipse(ball.position.x,ball.position.y,20);
//use push operation
  fill("brown");
//call ellipse operation
  //use pop operation
}

function vForce()
{
//apply force to the ball

}


  




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world;

//var engine,world;
//var paper, ground,ibin;


function setup() {
  var canvas = createCanvas(1600, 700);
  rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(90,200,125);
 
  ground = new Ground(width/2,450,width,20);

  bin1 = new Bin(1000,200,150,150);

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1600,
      height: 700,
      wireframes: false
    }
  });
  
  Engine.run(engine);
  Render.run(render);

}


function draw() {
  rectMode(CENTER);
  background(230);
  //Engine.update(engine);
  paper.display();
  ground.display();
  bin1.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:600,y:-600});
	}
}




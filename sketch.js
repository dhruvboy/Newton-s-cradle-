const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5
var rope1,rope2,rope3,rope4,rope5


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	bob1=new Bob(310,485,20)
	bob2=new Bob(355,485,20)
	bob3=new Bob(400,485,20)
	bob4=new Bob(445,485,20)
	bob5=new Bob(490,485,20)
	roof = Bodies.rectangle(400,100,230,20,roof_options);
	World.add(world,roof);
	
	rope1=new Rope(bob1.body,roof.body)


	
	
	
    

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

 bob1.display()
 bob2.display()
 bob3.display()
 bob4.display()
 bob5.display()
  rope1.display()
 

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

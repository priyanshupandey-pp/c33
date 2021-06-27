var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
 var particles = [];
 var line;
 var plinkos = [];
 var divisions =[];
 var divisionHeight=300;
 var score =0;
 function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2,10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
 
  //create particle objects
  
    score=0
 }
 


 function draw() {
  background("black");
 
  textSize(20)
  text("Score: "+ score, 40,40);
  Engine.update(engine);
  text(" 500 " , 100,530);
  text(" 500 " , 20,530);
  text(" 100 " , 340,530);
  text(" 100 " , 405,530);
  text(" 500 " , 175,530);
  text(" 100 " , 499,530);
  text(" 200 " , 570,530);
  text(" 200 " , 660,530);
  text(" 200 " , 740,530);
  text(" 500 " , 260,530);
  ground.display();
 // drawsprites();

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
 if(frameCount%40===0){
  particles.push(new Particle(random(width/2-30,width/2+30),10, 10))
 }
 for (var j = 0; j < particles.length; j++) {
  particles[j].display();
 }
 function mousePressed()
 {
 if(gameState!=="end")
  {
  Particle=new particle(mouseX,10,10,10);
  }
  drawsprites();

 }
 }


// {
 // particles.display();
   // if(particles.body.position.y>530)
    {
      if(particles.body.position.x<405)
      {
        score=score+100;
         
      }
    
    }

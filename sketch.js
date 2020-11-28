const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse=Matter.Mouse
var engine;
var world,canvas,mConstraint
function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
  
    let canvasmouse= Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options={
      mouse:canvasmouse
    }
    mConstraint = MouseConstraint.create(engine,options)
    World.add(world,mConstraint);

    bob1=new Pendulum(200,500,"red")
    bob2=new Pendulum(260,500,"red")
    bob3=new Pendulum(320,500,"red");
    bob4=new Pendulum(380,500,"red");
    bob5=new Pendulum(440,500,"red")
  
  
    rope1=new Sling(bob1.body,{x:200,y:200})
    rope2=new Sling(bob2.body,{x:260,y:200})
    rope3=new Sling(bob3.body,{x:320,y:200})
    rope4=new Sling(bob4.body,{x:380,y:200})
    rope5=new Sling(bob5.body,{x:440,y:200})
  
    Engine.run(engine);
}

function draw() {
  background("black");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
}
function mouseDragged(){
Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}
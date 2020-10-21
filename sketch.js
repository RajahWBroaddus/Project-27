//const Body = require("./matter");

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var string1, string2, string3, string4, string5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
    createCanvas(800, 400);
    engine = Engine.create();

    world = engine.world;
    roof = new Roof(400, 25, 600, 50);
    //bobs
    bobObject1 = new Bob(230, 350, 40);
    bobObject2 = new Bob(320, 350, 40)
    bobObject3 = new Bob(400, 350, 40);
    bobObject4 = new Bob(480, 350, 40);
    bobObject5 = new Bob(560, 350, 40);
    //strings
    string1 = new Rope(bobObject1.body, roof.body, -160, 0);
    string2 = new Rope(bobObject2.body, roof.body, -80, 0);
    string3 = new Rope(bobObject3.body, roof.body, 0, 0);
    string4 = new Rope(bobObject4.body, roof.body, 80, 0);
    string5 = new Rope(bobObject5.body, roof.body, 160, 0);
    Engine.run(engine);
}

function draw() {
    background(0, 130, 10);

    roof.display();
    //bobs
    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();
    //strings
    string1.display();
    string2.display();
    string3.display();
    string4.display();
    string5.display();

    if (keyDown(UP_ARROW)) {
        Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, { x: -50, y: -45 });
    }
}
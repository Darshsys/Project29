const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
}

function setup(){

ground = new Ground(600,height,1200,20);

}

function draw(){
background();

ground.display();
}
var mouse
var mouseimg
var sadmouseimg
var trap
var trapimg1
var trapimg2
var trapimg3
var trapimg4,trapimg5
var cheese1,cheese2
var trapgrp
var cheesegrp
var bkimg
function preload(){
mouseimg=loadImage("mouse2.png")
trapimg1=loadImage("trape.png")
trapimg2=loadImage("trape.png")
trapimg3=loadImage("trape.png")
trapimg4=loadImage("trape.png")
trapimg5=loadImage("trape.png")
cheese1=loadImage("chees1.png")
cheese2=loadImage("chees2.png")
sadmouseimg=loadImage("sadmousie.png")
bkimg=loadImage("space21.jpg")
}

function setup() {
createCanvas(1000,800)
 mouse=createSprite(200,400,10,40)
 mouse.addImage(mouseimg)
 mouse.scale=0.3
 mouse.rotation=270
 mouse.rotateToDirection=true

trapgrp=new Group()
cheesegrp=new Group()
}

function draw() {
background(bkimg)
mouse.y=World.mouseY
tr()
ch()
if(cheesegrp.isTouching(mouse)){
cheesegrp.destroyEach()
}
if(trapgrp.isTouching(mouse)){
mouse.addImage(sadmouseimg)
trapgrp.destroyEach
cheesegrp.destroyEach
tr=false
ch=false
}
 drawSprites()
}
function tr(){
    if(frameCount%60===0){
var trap=createSprite(900,300,10,10)
trap.x=Math.round(random(700,1000))
trap.y=Math.round(random(20,780))
trap.addImage(trapimg1)
trap.scale=0.4
trap.velocityX=-30

trap.lifetime=100
trapgrp.add(trap)
    }
}

function ch(){
if(frameCount%120===0){
var cheese=createSprite(900,400,10,10)
cheese.velocityX=-30
cheese.lifetime=100
cheese.y=Math.round(random(20,780))
var rand=Math.round(random(1,2))
switch(rand){
case 1:cheese.addImage(cheese1)
break;
case 2:cheese.addImage(cheese2)
break;
default:break;

}
cheese.scale=0.3
cheesegrp.add(cheese)
}







}


var a,b;


function setup(){
 createCanvas(600,600) 
 
 a=createSprite(200,395,70,100);
 b=createSprite(300,200,130,50);  
  

}


function draw(){
  background("white")
  
  a.x=mouseX
  a.y=mouseY  
  /*if (b.x-a.x===b.width/2+a.width/2){
      a.shapeColor="red"
      b.shapeColor="red"
  }*/
  if (b.y-a.y<=b.height/2+a.height/2&&b.x-a.x<=b.width/2+a.width/2&&a.x-b.x<=b.width/2+a.width/2&&a.y-b.y<=b.height/2+a.height/2){
      a.shapeColor="red"
      b.shapeColor="red"
  }
  else{
      a.shapeColor="green"
      b.shapeColor="green"
  }
  /*console.log(b.x-a.x)
  console.log(b.width/2+a.width/2)*/
  console.log(b.y-a.y)
  console.log(b.height/2+a.height/2)
  drawSprites();
}
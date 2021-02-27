class Box{
  constructor(x,y,width,height)
{
    var bounce = {
       
        restituition : 0.9,
        friction : 1,
        density : 1.0
    }

    this.body = Bodies.rectangle(x,y,width,height,bounce)
this.width = width
this.height = height
    
    World.add (myWorld, this.body)
}
display (){
    
    //name spacing is when you give a short name
    var pos = this.body.position;
    var angle = this.body.angle; 
    
    //turns on the setting
    push()
    
    //translate is important; if we dont use it, the objects will be stuck at 0,0 origin
    translate(pos.x,pos.y);
    rotate(angle) 

    rectMode(CENTER);
    strokeWeight(3);
    stroke("red");
    fill (255);

    rect(0,0,this.width,this.height)
    
    //turns off the setting
    pop()
}
}
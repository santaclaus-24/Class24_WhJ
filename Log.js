class Log{
    constructor(x,y,height,angle)
  {
      var bounce = {
         
          restituition : 0.9,
          friction :    1.7,
          density : 1.0
      }
  
      this.body = Bodies.rectangle(x,y,20,height,bounce)
  this.width = 20
  this.height = height
    Matter.Body.setAngle(this.body,angle)
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

      //how much amount of the color you want on the outline
      strokeWeight(3);
      stroke("aqua");
      fill (255);
  
      rect(0,0,this.width,this.height)
      
      //turns off the setting
      pop()
  }
  }
class Pig{
    constructor(x,y)
  {
      var bounce = {
         
          restituition : 0.9,
          friction : 0.3,
          density : 1.0
      }
  
      this.body = Bodies.rectangle(x,y,50,50,bounce)
  this.width = 50
  this.height = 50
      
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
      fill ("pink");
  
      rect(0,0,this.width,this.height)
      
      //turns off the setting
      pop()
  }
  }
class Bird{
    constructor(x,y,width,height)
  {
      var bounce = {
         
          restituition : 0.5,
          //when 2 things rub against each other; smoothness
          friction : 1.0,
          //how heavy the weight is for the object
          density : 1.5
      }
  
      this.body = Bodies.rectangle(x,y,50,50,bounce)
  this.width = 50
  this.height = 50
      
      World.add (myWorld, this.body)
  }
  display (){
      
      //name spacing is when you give a short name
      var pos = this.body.position;

     pos.x = mouseX;
     pos.y = mouseY;

      var angle = this.body.angle; 
      
      //turns on the setting
      push()
      
      //translate is important; if we dont use it, the objects will be stuck at 0,0 origin
      translate(pos.x,pos.y);
      rotate(angle) 
  
      rectMode(CENTER);
      strokeWeight(2);
      stroke("black");
      fill ("red");
  
      rect(0,0,this.width,this.height)
      
      //turns off the setting
      pop()
  }
  }
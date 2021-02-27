class Ground{
    constructor(x,y,width,height)
  {
      var bounce2 = {
  
          isStatic : true
      }
  
      this.body = Bodies.rectangle(x,y,width,height,bounce2)
  this.width = width
  this.height = height
      
      World.add (myWorld, this.body)
  }
  display (){
      
      //name spacing is when you give a short name
      var pos = this.body.position;
  
      rectMode(CENTER);
      fill ("brown");
  
      rect(pos.x,pos.y,this.width,this.height)
  }
  }
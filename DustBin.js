class DustBin {
    constructor(x, y) {
      var options = {
         isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 200, 20, options);
      this.body1 = Bodies.rectangle(x+110, y-40,20,100, options); 
      this.body2 = Bodies.rectangle(x-110, y-40,20,100, options);  

      World.add(world, this.body); 
      World.add(world, this.body1); 
      World.add(world, this.body2);   
    }
    display(){
      push(); 
      rectMode(CENTER); 
      strokeWeight(4); 
      stroke("brown");
      fill(255);
      rect(this.body.position.x ,this.body.position.y,200,20)  
      rect(this.body1.position.x ,this.body1.position.y,20,100) 
      rect(this.body2.position.x ,this.body2.position.y,20,100) 

      pop();
    }
  };
  
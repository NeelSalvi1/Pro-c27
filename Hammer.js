class Hammer{
  constructor(x,y,width,height)
  {
      var option={
          'restitution' : 0.5,
          'friction': 1.0,
          'density': 2
      };
      this.body=Bodies.rectangle(x,y,50,50,option);
      World.add(world,this.body);
      
      this.width=50;
      this.height=50;
  }
  display()
  {
      var pos=this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(this.x,this.y,this.width,this.height);
      pop();     
      
  }
}

















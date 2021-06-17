class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :1.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      World.add(world, this.body);
      this.Visibilty = 255;
    }
    display(){

      if (this.body.speed<3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //rectMode(CENTER);
        //rect(pos.x,pos.y,this.width, this.height);
        pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visibilty = this.Visibilty - 5;
        tint(255,this.Visibilty)
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        //rect(999,999,this.width, this.height);
        pop();
      }   
    }
}
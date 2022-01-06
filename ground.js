class Ground{
    constructor(x,y,w,h){
        var hi = {
        isStatic: true
  }
  this.body = Bodies.rectangle(x,y,w,h,hi)
  World.add(world,this.body)
  this.w = w
  this.h = h
    }
    Display(){
        fill("blue")
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
}
class Ground {
constructor(x,y,w,h){
var ground = {
isStatic:true
 }
 this.body=Bodies.rectangle(x,y,w,h,ground)
 World.add(world,this.body);
 this.w=w
 this.h=h
}
display(){

var pos=this.body.position
push();
translate(pos.x,pos.y);
rectMode(CENTER);
rect(0,0,this.w,this.h);
pop();


}
}
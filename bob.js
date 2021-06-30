class Bob{
constructor(x,y,r){
var options={
friction:0.5,
restitution:0.35,
density:0.1
}
this.body=Bodies.circle(x,y,r,options)
this.r=r
}
display(){
var pos=this.body.position
push ()
ellipseMode(RADIUS)
fill("white")
ellipse(pos.x,pos.y,this.r,this.r)
pop ()
}}
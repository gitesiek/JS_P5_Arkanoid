function Brick(x,y){
  this.x=x;
  this.y=y;
  this.w=80;
  this.h=60;
  this.show=function(){
    rect(this.x,this.y,this.w,this.h);
  }
}
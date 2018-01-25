function Paddle(){
  this.w=100;
  this.h=20;
  this.y=height-40;
  this.x=width/2-this.w/2;
  this.speed=4;
  
  this.show=function(){
    rect(this.x,this.y,this.w,this.h);
  }
  this.move=function(dir){
    this.x+=this.speed*dir;
  }
}
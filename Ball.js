function Ball()
{
    this.x=300;
    this.y=350;
    this.w=30;
    this.xSpeed=2;
    this.ySpeed=2;
    this.show=function()
    {
        rect(this.x,this.y,this.w,this.w);
    }
    this.restart=function(){
        this.x=width/2;
        this.y=height/2;
    if(random(2)>1) this.xSpeed=1;
    else this.xSpeed=-1;
    }
    this.update=function()
    {
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
        if(this.x<=0) this.xSpeed*=-1;
        if(this.x+this.w>=width) this.xSpeed*=-1;
        if(this.y<=0) this.ySpeed*=-1;
        if(this.y+this.w>=height)
        this.restart();
    }

    this.hit=function(p){
      if(this.x>p.x && this.x<p.x+p.w && this.y+this.w>p.y && this.y<p.y+p.h){
        this.ySpeed*=-1;
        return true;
      }
      else return false;
      }
}
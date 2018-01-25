var ball;
var paddle;
var bricks=[];

function setup() { 
  createCanvas(600, 700);
  ball=new Ball();
  paddle=new Paddle();
  for(var i=0;i<5;i++){
      bricks.push(new Brick(i*100+50,30));
  }

} 

function draw() { 
  background(51);
for(var i=bricks.length-1;i>=0;i--){
    console.log(i);
    bricks[i].show();
  if(ball.hit(bricks[i]))
    bricks.splice(i,1);
}
  paddle.show();
  ball.show();
  ball.update();
  if(keyIsDown(65))
    paddle.move(-1);
  if(keyIsDown(68))
    paddle.move(1);
    
  ball.hit(paddle);

}
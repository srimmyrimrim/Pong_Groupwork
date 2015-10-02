//nathan s. malachi t. melissa k. sarah r.

class Ball {
  float x, y;
  float vx, vy;
  float size=10;
  color c;
  int player1, player2;

  Ball(float x, float y) {
    this.x=x;
    this.y=y;
    c=color(random(255), 255, 255);
    vx=random(5);
    vy=random(5);
    player1=0;
    player2=0;
  }
  void draw() {
    noStroke();
    fill(c);
    ellipse(x, y, size*2, size*2);
  }
  void move() {
    x+=vx;
    y+=vy;
    if (x<size||x>width-size) {
      vx=-vx;
    }
    if (y<size||y>height-size) {
      vy=-vy;
    }
    if (x<=size) {
      x=250;
      y=250;
      vx=random(5);
      vy=random(5);
      player1++;
    }
    if (x>=width-size)
    {
     x=250;
      y=250;
      vx=random(3);
      vy=random(3);
      player2++;
    }
}
}
  
class Paddle {
  float x, y;
  float vy;
  float height=50;
  float width=10;
  color d;

  Paddle(float x, float y) {
    this.x=x;
    this.y=y;
    vy=0;
    d=color(0);
    vy=(3);
  }
  void draw() {
    noStroke();
    fill(d);
    rect(x, y, width, height);
  }

  void move() {
    y=y+vy;
    if (y<0 || y>450) {
      vy=-vy;
    }
  }
}

Ball b1;
Paddle p1;
Paddle p2;

void setup() {
  size(500, 500);
  colorMode(HSB);

  b1=new Ball(250, 250);
  p1=new Paddle(10, 20);
  p2=new Paddle(480, 20);
}

void keyPressed() {

  if (keyCode==UP) {
    p2.vy=-2;
  } else if (keyCode==DOWN) {
    p2.vy=2;
  }

  if (key=='w') {
    p1.vy=-2;
  } else if (key=='s') {
    p1.vy=2;
  }
}

public void draw() {
  background(255);
  b1.draw();
  b1.move();

  p1.draw();
  p1.move();

  p2.draw();
  p2.move();
  
  if((b1.x<p1.x+10 || b1.x>p2.x) && (b1.y>=p1.y || b1.y>=p2.y) && (b1.y<=p1.y+p1.height|| b1.y<=p2.y+p2.height)){
    b1.vx=-b1.vx;
   
  }
  textAlign(CENTER);
text(" P1  "+b1.player1+" | "+b1.player2+"  P2 ", width/2,50);
}

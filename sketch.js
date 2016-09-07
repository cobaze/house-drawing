var plusTen = 70;

function setup() {
  createCanvas(500,500,20,20);
}

function draw() {
  background('#e0eeee');
  
  //Chimney
  fill(128);
  rect(110, 29 + plusTen, 40, 40);
  
  //Roof
  fill('#ff0000');
  triangle(250, 20 + plusTen, 460, 90 + plusTen, 40, 90 + plusTen);
  
  //Building
  fill('#faebd7');
  rect(78, 90 + plusTen, 345, 200);
  
  //Window 1
  fill('#ffffff');
  rect(110, 129 + plusTen, 60, 60);
  
  //Window 2
  fill('#ffffff');
  rect(330, 129 + plusTen, 60, 60);
  
  //Door
  fill('#8b7355');
  rect(209, 175 + plusTen, 80, 115);
  
  //Door knob
  fill('#cd5b45');
  ellipse(218, 235 + plusTen, 8, 8);
  
  
  // 75, 155, 135, 240, 20, 240
}
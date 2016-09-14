var plusTen = 70;
var counter = 0;

function setup() {
  createCanvas(500,500,20,20);
}

function draw() {
  background('#e0eeee');
  
  //Chimney
  fill(128);
  rect(110, 29 + plusTen, 40, 40);
   if(counter == 1){
    ellipse(128, 80, 30, 30);
  }else if(counter == 2){
    ellipse(128, 60, 25, 25); 
  }else if(counter == 3){
    ellipse(128, 40, 15, 15); 
  }else if(counter == 4){
    ellipse(128, 20, 10, 10); 
  }else{
    fill(255)
    counter = 0;
  }
  
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

function mousePressed(){
  counter = counter +1;
}
function tremble(){
  let cnt = 4;
  let d = TWO_PI / cnt;
  
  for (let i = 0; i < cnt; i++) {
    push();
    rotateZ(d * i);
    translate(frameCount % cnt * 1, 0, 0);
    translate(60, 0, 0);
    cone(50, 5);
    pop();
  }
}
function trembleCircle(){
  push();
  translate(0, 0, -100);
  torus(80, 15);
  tremble();
  pop();
}
function nomarlCloud(){
  push();
  
  
  if (doorFlag==1){
      if (colorPlag == 1)
        fill(180,180,200);
     else 
        fill(255);
    }
  
  
  translate(0,0,-150);
  sphere(40); //중앙구름
   
    push();
    translate(-40,10,0);
    sphere(30);//변두리1
    pop();
    
    push();
    translate(40,10,0);
    sphere(30);//변두리1
    pop();
 
  pop();
}
function cloud(){
  if(((val>1250)||val < 550)&&(doorFlag==0)){
      trembleCircle();
  } 
  else {
    nomarlCloud();
  }
}




function room1(){
  push();
  texture(img1);
  
  push();
  translate(-75,0,0);
  rotateY(HALF_PI);
  box(150, 150, 10);
  
    push();
    translate(0,-75,75);
    rotateX(HALF_PI);
    box(150, 150, 10);
  
      push();
      translate(0,0,-150);
      box(150, 150, 10);
      pop();
  
    pop();
  
    push();
    translate(0,0,+150);
    box(150, 150, 10);
    pop();
  
  pop();
  pop();
  
}
function door(){  
   push();
      texture(textPageMain);
      if (doorFlag==1){
        translate(0,0,100);
        plane(150, 150);
      }
  pop();
}
function room1dot5(){
     push();
  translate(-75,0,100);
  rotateY(HALF_PI);
  box(50, 10, 10);
    push();
    translate(0,-75,75);
    rotateX(HALF_PI);
    box(50, 10, 10);
      push();
      translate(0,0,-150);
      box(50, 10, 10);
      pop();
    pop();
    push();
    translate(0,0,+150);
    box(50, 10, 10);
    pop();
  pop();
  
  
  
  
   push();
   
  translate(0, 0, 100);
//  torus(75, 10);
  let cnt = 5;
  let d = TWO_PI / cnt;
  for (let i = 0; i < cnt; i++) {
    push();
    rotateZ(d * i);
    translate(0, (frameCount*0.05) % cnt *2, 0);
    translate(60, 0, 0);
   // cylinder(10, 50);
    pop();
  }
   
  pop();
}
function room2(){
  
   push();
  
  if(doorFlag==0)
    texture(img2);
  else
    texture(textPage);
  
  
   push();
  
    if(colorPlag==1)
      fill(0,0,255);
    else
      fill(255);
    if(doorFlag==0){
      translate(0,0,275);
      torus(10,5); //뒤쪽벽
    }
    
  
  pop();
  
  
  translate(-75,0,200);
  rotateY(HALF_PI);
 // box(150, 150, 10); //왼쪽벽
  // 중간줄. 
  box(15,10,10);
    push();
    translate(-30,0,0);
    box(15,10,10);
      push();
      translate(-30,0,0);
      box(15,10,10);
      pop();
    pop();
    push();
    translate(30,0,0);
    box(15,10,10);
      push();
      translate(30,0,0);
      box(15,10,10);
      pop();
    pop();
  
  
  
  
    push();
    translate(0, -20,0);
  box(15,10,10);
 push();
    translate(-30,0,0);
    box(15,10,10);
      push();
      translate(-30,0,0);
      box(15,10,10);
      pop();
    pop();
  push();
    translate(30,0,0);     
    box(15,10,10);
      push();
      translate(30,0,0);
      box(15,10,10);
      pop();
    pop();
    pop();
  
  
   push();
    translate(0, -40,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
  
   push();
    translate(0, -60,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
  push();
    translate(0, 60,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
  
    push();
    translate(0, 20,0);
  box(15,10,10);
 push();
    translate(-30,0,0);
    box(15,10,10);
      push();
      translate(-30,0,0);
      box(15,10,10);
      pop();
    pop();
  push();
    translate(30,0,0);
    box(15,10,10);
      push();
      translate(30,0,0);
      box(15,10,10);
      pop();
    pop();
    pop();
  
  
   push();
    translate(0, 40,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
  
  
  
  
  

  
  
  
    push();
    translate(15, -10,0);
  box(15,10,10);
 push();
    translate(-30,0,0);
    box(15,10,10);
      push();
      translate(-30,0,0);
      box(15,10,10);
      pop();
    pop();
  push();
    translate(30,0,0);
    box(15,10,10);
      push();
      translate(30,0,0);
      box(15,10,10);
      pop();
    pop();
    pop();
  
  
   push();
    translate(15, -30,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
  
   push();
    translate(15, -50,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
  push();
    translate(15, 10,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
  
    push();
    translate(15, 50,0);
  box(15,10,10);
 push();
    translate(-30,0,0);
    box(15,10,10);
      push();
      translate(-30,0,0);
      box(15,10,10);
      pop();
    pop();
  push();
    translate(30,0,0);
    box(15,10,10);
      push();
      translate(30,0,0);
      box(15,10,10);
      pop();
    pop();
    pop();
  
  
   push();
    translate(15, 30,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
  push();
    translate(15, 70,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
   push();
    translate(15, -70,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
   
    push();
    translate(0,-75,75);
    rotateX(HALF_PI);
    //box(150, 150, 10); //위쪽벽
  box(15,10,10);
    push();
    translate(-30,0,0);
    box(15,10,10);
      push();
      translate(-30,0,0);
      box(15,10,10);
      pop();
    pop();
    push();
    translate(30,0,0);
    box(15,10,10);
      push();
      translate(30,0,0);
      box(15,10,10);
      pop();
    pop();
  
  
  
  
    push();
    translate(0, -20,0);
  box(15,10,10);
 push();
    translate(-30,0,0);
    box(15,10,10);
      push();
      translate(-30,0,0);
      box(15,10,10);
      pop();
    pop();
  push();
    translate(30,0,0);
    box(15,10,10);
      push();
      translate(30,0,0);
      box(15,10,10);
      pop();
    pop();
    pop();
  
  
   push();
    translate(0, -40,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
  
   push();
    translate(0, -60,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
  push();
    translate(0, 60,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
  
    push();
    translate(0, 20,0);
  box(15,10,10);
 push();
    translate(-30,0,0);
    box(15,10,10);
      push();
      translate(-30,0,0);
      box(15,10,10);
      pop();
    pop();
  push();
    translate(30,0,0);
    box(15,10,10);
      push();
      translate(30,0,0);
      box(15,10,10);
      pop();
    pop();
    pop();
  
  
   push();
    translate(0, 40,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
  
  
  
  
  

  
  
  
    push();
    translate(15, -10,0);
  box(15,10,10);
 push();
    translate(-30,0,0);
    box(15,10,10);
      push();
      translate(-30,0,0);
      box(15,10,10);
      pop();
    pop();
  push();
    translate(30,0,0);
    box(15,10,10);
      push();
      translate(30,0,0);
      box(15,10,10);
      pop();
    pop();
    pop();
  
  
   push();
    translate(15, -30,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
  
   push();
    translate(15, -50,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
  push();
    translate(15, 10,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
  
    push();
    translate(15, 50,0);
  box(15,10,10);
 push();
    translate(-30,0,0);
    box(15,10,10);
      push();
      translate(-30,0,0);
      box(15,10,10);
      pop();
    pop();
  push();
    translate(30,0,0);
    box(15,10,10);
      push();
      translate(30,0,0);
      box(15,10,10);
      pop();
    pop();
    pop();
  
  
   push();
    translate(15, 30,0);
    box(15,10,10);
    push();
      translate(-30,0,0);
      box(15,10,10);
      push();
        translate(-30,0,0);
        box(15,10,10);
      pop();
    pop();
  
    push();
      translate(30,0,0);
      box(15,10,10);
        push();
        translate(30,0,0);
        box(15,10,10);
        pop();
    pop();
  pop();
  
  
  
  
  
  
  
      push();
      translate(0,0,-150);
      box(150, 150, 10);
      pop();
    pop();
    push();
    translate(0,0,+150);
    box(150, 150, 10);
    pop();
  pop();
}
 function objects(){
  cloud();
  room1();
  door();
  room1dot5();
  room2();
}

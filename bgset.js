// 배경 변화 요소들
// 눈 내리기, 비 내리기
// 스페이스바 누르면 배경에 plane 띄우기

function turnSnow(){ 
  for (let j = 0; j< 15; j++){  //눈발정도
    push();   
    let v = p5.Vector.random3D();  
    translate((v.x)*400, v.y*400, v.z*400);
    let cnt = 6;
    let d = TWO_PI / cnt;
    for (let i = 0; i < cnt; i++) {
      push();
      rotateZ(d * i);
      cone(5, 5);
      pop();
    }
    pop();
  }
}
function turnRain(){
  for (let j = 0; j< 10; j++){
    push();   
    if (colorPlag==1){
      fill(0);
    }
    else
      fill(255);
    let v = p5.Vector.random3D();  
    translate((v.x)*1000, 0, v.z*200);
      cylinder(1, 2000);
    pop();
    }
}
function addWeather(){
   if(val < 550){
     turnSnow();
  }
   if (val>1250){
     turnRain(); 
  }
}
function paintPlane(){
  colorPlag=1;
    push();
    texture(img3);
  
      push();
      for(let i = -500; i<=500; i+=200){
        for(let j = -500; j<=500; j+=200){
         push();
         translate(i,j,0);
         plane(100,100);
         pop();
        }
      }
      pop();   
    pop();  
}
function spaceBar(){
   if (keyIsDown(32)){
    paintPlane()
  }
  else{
    colorPlag=0;
  }
}
function detailofBG(){
  addWeather();
  spaceBar();
}
function BGSet(){
  val = keyZ+900;
  background(val*0.09, val*0.12, val*0.21);
  detailofBG();
}

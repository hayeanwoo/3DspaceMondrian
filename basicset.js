// 기본 설정들 
// 글자 관련 함수
// 문 관련 함수
// 빛 설정 함수
// 키보드 움직임 (카메라 이동) 함수


function textSet(){
  textPage.background(255);
  textPage.text(name1, 50, 100);
  
  textPageMain.background(255);
  if (textFlag==1){
  textPageMain.text('hello,', 35, 80);
  textPageMain.text(name1, 30, 130);
  }
}
function changeDoor() {
  if (doorFlag==1)
  doorFlag=0;
  else 
    doorFlag=1;
}
function doorButton(){
  if (doorFlag==1){
  button1 = createButton('문열기');}
  else{
    button1 = createButton('문닫기');
  }
  button1.position(620, 410);
  button1.mousePressed(changeDoor);  
}
function lightSet(){
  
 normalMaterial();
ambientLight(150); //자연광 밝기 설정
  ambientMaterial(255, 255, 255); // magenta material
     pointLight(250, 250, 250, -150, -150, -250); // 광원의 색상과 거리(위치) 설정 ==> 촛불과비슷
}
function kameraMoveSet(){
  camera(keyX,keyY,keyZ, 0, 0, 0, 0, 1, 0);
  
  if (keyIsDown(LEFT_ARROW)) {
    keyX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    keyX += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    keyZ -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    keyZ += 5;
  } if (keyIsDown(BACKSPACE)) {
    keyY += 5;
  }
  if (keyIsDown(ENTER)) {
    keyY -= 5;
  }
}
function basicSet(){
  doorButton();// 문 버튼 
  textSet(); // 텍스트 설정
  lightSet();//빛설정
  kameraMoveSet();//자판이동설정
}


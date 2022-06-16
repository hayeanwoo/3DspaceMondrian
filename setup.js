
function setup() {
  
  createCanvas(710, 400, WEBGL);
  
  
  greeting = createElement('h2', 'what is your name?');//질문
  greeting.position(280, 390);//질문위치
  
  input = createInput();// 이름입력받기
  input.position(300, 450);// 입력창 위치 

  button = createButton('submit'); //제출버튼 생성
  button.position(480, 450);//버튼 위치
  button.mousePressed(greet);//그리트함수 호출.

  //벽돌 글자 설정 
  textPage = createGraphics(200, 200); 
  textPage.textSize(50); //글자크기
  textPage.textFont(myFont);// 글씨체
  textPage.fill(0, 0, 255);//글씨색상
  
  //문 글자 설정
  textPageMain = createGraphics(200, 200);
  textPageMain.textSize(50);
  textPageMain.textFont(myFont);
  textPageMain.fill(0, 0, 255);
  
}
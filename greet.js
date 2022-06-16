
function greet() { //입력받기. 이름 저장. 문구 변경. 
  name1 = input.value();
  textFlag = 1;
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');
}
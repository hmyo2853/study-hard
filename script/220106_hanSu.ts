/*
  초기값 설정 array1 = 1부터 예제 숫자 N까지 모든 자연수 배열
  array2는 함수를 돌려 나온 한수로 이루어진 자연수 배열
  N은 입력 값
*/
let N : number = 100;
let array1 : Array<number> = [];
let array2 : Array<number> = [];

let i : number = 1;
let realNum : Array<number> = [];
while(i < N + 1) { //i = 1~100
  let splitNum: Array<string> = i.toString().split(''); //['1','2','3']
  realNum = splitNum.map(Number); //[1,2,3]
  // 해당 realNum이 등차수열이면 array2에 추가
  if () {
    
  }
  ++i;
  console.log(realNum);
}
// array1에서 자연수를 가져와 한수 배열 array2 만들기


console.log(array2.length); // 배열의 갯수 구하기

/*
  N은 입력 값
  array1은 
*/
let N : number = 100;
let array1 : Array<number> = [];
let array2 : Array<number> = [];

let realNum : Array<number> = [];

for(let i = 1; i < N + 1; ++i ) { //i = 1~100
  let splitNum: Array<string> = i.toString().split(''); //['1','2','3'] string Array
  realNum = splitNum.map(Number); //[1,2,3] num Array
  let idx: number = 0;
  while ( idx < realNum.length ) { //realNum index 값이 realNum의 길이보다 작아질때까지 돌아감
    realNum
    array1.push(i);
    idx++;
  }
  if () { //array1의 각 배열 값이 같으면 i 값을 array2에 push

  }
}
// array1에서 자연수를 가져와 한수 배열 array2 만들기
console.log(array1);

// console.log(array2.length); // 배열의 갯수 구하기

/* 1. 각 자릿수 합 = 생성자가 있는 양수를 구하는 함수 */
/* 2. array1에 push하여 생성자가 있는 양수의 배열을 만들기 */
/* 3. 전체 array1에서 array2의 값 빼기(셀프넘버 구하기) */

let array1 : Array<number> = [];
let array2 : Array<number> = [];
let n : number = 1;
let answer : number = 0;

/*
  function으로 묶어서 정리해 볼 것
  answer를 while로 돌리지 않는 방법 사용
  answer 변수 선언도 뺴지 말고 안으로 넣을 것
*/

// array1을 만들어줌 1부터 2,3,4, ..., 10000
for ( let i = 1; i < 10001; i++ ) {
  array1.push(i);
}
// 배열에 들어가는 answer값이 10000보다 작거나 같을때까지 반복, 왜 10003까지 인지는 모르겠으나 셀프넘버 9999가 안보여서 임의로 정한 수
while ( answer < 10003 ) {
  function d( n : number ) {
    let sum : number = 0;
    let originNum : number = n;

    while( n > 0 ) {
      sum += n % 10;
      n = Math.floor(n / 10);
    } //0에서 반복문 나감
    answer = originNum + sum;
    return answer;
  }
  array2.push(d(n));
  array2.sort(function(a,b) { // 오름차순 2,4, ...
    return a - b;
  });
  n++;
}

array1 = array1.filter(x => !array2.includes(x));

for ( let j = 0; j < array1.length; j++ ) {
  console.log(array1[j]);
}

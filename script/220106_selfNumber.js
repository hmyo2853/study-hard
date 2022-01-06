/* 1. 각 자릿수 합 = 생성자가 있는 양수를 구하는 함수 */
/* 2. array1에 push하여 생성자가 있는 양수의 배열을 만들기 */
/* 3. 전체 array1에서 array2의 중복 빼기(셀프넘버 구하기) */
let array2 : Array<number> = [];
let num : number = 1; //1부터 시작
let answer : number = 0;

while ( answer <= 100 ) { // 배열에 들어가는 answer값이 10000보다 작거나 같을때까지 반복
  function solution( num : number ) {
      let sum : number = 0;
      let originNum : number = num;

      while( num > 0 ) { //256 25 2, 0에서 반복문 나감
          sum += num % 10; //0 + 6 6 + 5 13 + 0 sum = 13
          num = Math.floor(num / 10); // num = 25 2 0
      }
      answer = originNum + sum  //256 + 13 269
      return answer;
  }
  array2.push(solution(num));
  array2.sort(function(a,b) { // 오름차순 2,4, ...
    return a - b;
  });
  num++;
}

console.log(array2) // 배열값 모두 들어간 것 

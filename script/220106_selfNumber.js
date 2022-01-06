/* 각 자릿수 합 = 생성자가 있는 양수를 구하는 함수 */
function solution( num : number ) : number {
  let sum : number = 0;
  let originNum : number = num;

  while(num > 0) { //256 25 2, 0에서 반복문 나감
    sum += num % 10; //0 + 6 6 + 5 13 + 0 sum = 13
    num = Math.floor(num / 10); // num = 25 2 0
  }
  let answer : number = originNum + sum  //256 + 13
  return answer; 
}
console.log(solution(256));

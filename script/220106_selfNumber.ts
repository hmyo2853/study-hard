/* 각 자릿수 합 = 생성자가 있는 양수 을 구하는 함수 */
function solution(num) {
  let sum = 0;
  
  while(num > 0) {
    sum += num%10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(solution(256));

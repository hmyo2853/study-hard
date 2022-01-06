/* 1. 각 자릿수 합 = 생성자가 있는 양수를 구하는 함수 */
/* 2. array1에 push하여 생성자가 있는 양수의 배열을 만들기 */
/* 3. 전체 array1에서 array2의 중복 빼기(셀프넘버 구하기) */
let array2 : Array<number> = [];

for (let num = 1; num < 10000; ++num) { //257부터 261까지
    function solution( num : number ) {
        let sum : number = 0;
        let originNum : number = num;

        while( num > 0 ) { //256 25 2, 0에서 반복문 나감
            sum += num % 10; //0 + 6 6 + 5 13 + 0 sum = 13
            num = Math.floor(num / 10); // num = 25 2 0
        }
        let answer : number = originNum + sum  //256 + 13 269
        return answer;
    }
  array2.push(solution(num));
  array2.sort(function(a,b) { // 오름차순 2,4, ...
    return a - b;
  });
}

console.log(array2) // 배열값 모두 들어간 것 

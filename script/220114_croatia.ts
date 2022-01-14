/*
  특정 모양이 다른 크로아티아 알파벳으로 이루어진 배열을 선언한다.
  입력 값을 받는다.
  크로아티아 알파벳으로 이루어진 배열의 요소를 반복문으로 가져오고
  해당 요소가 입력값에 있다면 replace(해당 요소 값, '')하여 입력값에 없을때까지 함수를 돌린다.
  replace 돌리는 함수에서 리턴한 값을 split하여 숫자로 출력
*/

const croatia: Array<string> = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
const inputData: string = String(window.prompt('들어오는 알파벳', ''));

document.write(inputData);

for( let i = 0; i < croatia.length; i++ ) {
  if ( inputData.indexOf(croatia[i]) !== -1 ){ //만약 크로아티아 알파벳이 입력값에 들어있다면

  }
}

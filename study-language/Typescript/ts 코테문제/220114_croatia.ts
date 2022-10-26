
const croatia: Array<string> = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
const inputData: string = String(window.prompt('들어오는 알파벳', ''));

function replaceFC(x: string) {
  let i = 0;
  while (i < croatia.length){ //0 ~ 7까지 증가
    /*
      입력값 x : z=njtudz=c-
      [0]번째 c= 없음 i++
      [1]번째 c- 있음 x = z=njtudz=a i++
      [2]번째 dz= 있음 x = z=njtuaa i++
      [3]번째 d-없음 i++
      [4]번째 lj없음 i++
      [5]번째 nj있음 x = z=atuaa i++
      [6]번째 s=없음 i++
      [7]번째 z=있음 x = aatuaa i++
      break
    */
    if( x.indexOf(croatia[i]) !== -1 ) { //만약 크로아티아 알파벳이 입력값에 들어있다면
      x = x.replace(croatia[i], 'a');
    }
    i++;
  }
  const result = x.length;
  return result;
}
console.log(replaceFC(inputData));

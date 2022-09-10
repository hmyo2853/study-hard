/*
  1. 입력 값으로 문자를 받고, 받은 문자를 하나씩 나누어 배열로 만듦
  2. 해당 다이얼 값(알파벳)에 따라 key(걸리는 시간)를 할당
  3. 나누어진 문자 배열의 요소를 반복문으로 하나씩 가져오고 가져온 요소가 다이얼 값(알파벳)에 포함되어있는지 반복문으로 확인
  4. 포함되어있다면 key(걸리는 시간)을 반환
  5. 반환되는 값을 모두 더해줌
*/

const inputData : string = prompt('입력 값', '').toUpperCase();
//prompt로 받은 입력 값을 대문자로 변경한다 typeof = string   abcd => ABCD

function splitFc(x : any) {
  const splitArray : Array<string> = x.split('');
  //inputData를 쪼개서 배열로 만듦 ['A', 'B', 'C', 'D']
  return splitArray;
}

//해당 다이얼 값(알파벳)과 key(걸리는 시간)
const dialArray : object = {
  2 : 'ABC',
  3 : 'DEF',
  4 : 'GHI',
  5 : 'JKL',
  6 : 'MNO',
  7 : 'PQRS',
  8 : 'TUV',
  9 : 'WXYZ'
}


//알파벳이 포함되어있는 object를 찾아서 key값을 number로 반환
function getKey(y: any) {
  let j : number = 0;
  let outputTime : number = 0;
  while (j < spentTime.length) {
    if(dialTxt[j].indexOf(y) !== -1) {
      //알파벳 배열 j인덱스 값에 해당 x의 값이 있다면 string의 j인덱스를 값 반환 (-1이 아남)
      outputTime = parseInt(spentTime[j]);
      break;
    }
    ++j;
  }
  return outputTime;
}

const spentTime : Array<string> = Object.keys(dialArray); //keyArray string
const dialTxt : Array<string> = Object.values(dialArray); //alphabetArray string
let answer : number = 0;
for(let i = 0; i < inputData.length; i++) {
  answer += getKey(splitFc(inputData)[i]);
  //inputData을 받아 쪼갠 배열의 i 인덱스로 구한 각 걸리는 시간을 다 더해줌
}

document.write(String(answer));

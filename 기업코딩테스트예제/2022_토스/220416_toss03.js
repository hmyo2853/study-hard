function parseSearch(search) {
  /* 쿼리 문자열 'search'를 파싱하는 함수를 작성해주세요. */
  let answer = {}
  if (search.includes("?")){
    answer = search.replace("?", "")
    if (answer.includes("&")){
        answer = answer.split("&")
    }
  }
  if (typeof answer == "object") {
    let obj = {}
    for (let i = 0; i < answer.length; i++){
      const splt = answer[i].split("=")
      if (Object.keys(obj).includes(splt[0])){
          if (typeof obj[splt[0]] == "string"){
          obj[splt[0]] = Array(obj[splt[0]])
          }
          obj[splt[0]].push(splt[1])
      } else {
        obj[splt[0]] = splt[1]
      }
    }
    answer = JSON.stringify(obj)
  } else {
    let obj = {}
    answer = answer.split("=")
    obj[answer[0]] = answer[1]
    answer = JSON.stringify(obj)
  }
  return answer;
}
  
/*
  NOTE: 아래 코드는 코드 동작을 확인하기 위한 코드입니다. 수정하지 말아주세요.
*/
function solution(search){
  var query = parseSearch(search);
  return submit(query);
}
function submit(answer){
  return JSON.stringify(answer);
}

console.log(parseSearch(""))
console.log(parseSearch("?from=twitter"))
console.log(parseSearch("?range=1&range=8"))
console.log(parseSearch("?id=mmmoon&target=8"))
console.log(parseSearch("?id=mmmoon&target=8&id=mm&id=22"))
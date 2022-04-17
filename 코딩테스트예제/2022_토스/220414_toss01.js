const codeOwnersMap = {
    "scripts": ["배수진"],
    "services": {
        "business-ledger": ["고찬균", "배수진"],
        "toss-card": ["채주민", "유재섭"],
        "payments": ["유재섭"],
    }
}

function solution(codeOwnersMap, directory){
    answer = ''
    if (directory.includes('/')){
      const array = directory.split('/')
      for (let i = 0; i < array.length; i++){
        codeOwnersMap = codeOwnersMap[array[i]] // 현재 디렉토리 교체
        answer = codeOwnersMap
      }
    } else {
      answer = codeOwnersMap[directory]
    }
    return answer;
}

console.log(solution(codeOwnersMap, 'scripts'))
console.log(solution(codeOwnersMap, 'services/business-ledger'))
console.log(solution(codeOwnersMap, 'services/payments'))
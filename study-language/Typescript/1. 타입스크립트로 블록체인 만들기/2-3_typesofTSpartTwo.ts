// readonly 는 수정이 불가능하다.
const numbers: readonly number[] = [1, 2, 3, 4];

//filter나 map은 가능하다. push 불가능
const result = numbers.filter((item) => item > 3);
console.log(result);

const player: [string, number, boolean] = ["vikky", 2, true];

let a: boolean = false;
let b: undefined = undefined;
let c: null = null;

// any 는 아무 타입이나 가능하다. typescript의 보호장치를 빠져나오는 방법

const ai: any[] = [1, 2, 3, 4];
const bi: any = true;
ai + bi; // any면 가능하다

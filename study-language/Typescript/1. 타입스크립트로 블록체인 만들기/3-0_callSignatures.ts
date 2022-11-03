// call signature란?
// const add = (a:number, b:number) => number
const add = (a: number, b: number) => a + b;

// example
// type을 설명 한 다음에 함수를 만들 수 있다.
type Add = (a: number, b: number) => number;
const somethingAdd: Add = (a, b) => a + b;

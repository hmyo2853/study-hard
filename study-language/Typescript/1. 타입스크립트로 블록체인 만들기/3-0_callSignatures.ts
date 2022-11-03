// call signature란?
// const add = (a:number, b:number) => number
const add = (a: number, b: number) => a + b;

// example
type Add = (a: number, b: number) => number;
const somethingAdd: Add = (a, b) => a + b;

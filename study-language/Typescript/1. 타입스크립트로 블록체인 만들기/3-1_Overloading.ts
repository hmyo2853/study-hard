//overloading
// 여러개의 call signature가 있는 함수
type Bdd = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const bdd: Bdd = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else {
    console.log(config.path);
  }
};

// 파라미터의 갯수가 다른 경우
type Acc = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): Number;
};

const acc: Acc = (a, b, c?: number) => {
  // c는 optional
  if (c) return a + b + c;
  return a + b;
};

acc(1, 2);
acc(1, 2, 3);

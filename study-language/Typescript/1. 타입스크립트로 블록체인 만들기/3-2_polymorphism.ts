//polymorphism 이란?
// poly : 아주 많은, 다양한, morphos : 구조, 형태, 모양
type SuperPrint = {
  <T>(arr: T[]): void;
  // <T> 는 제네릭 형태, 어느 형태의 arr도 모두 받겠다는 call signature
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["1", "2"]);
superPrint(["string", 1, true, false, "something"]);

type Something = {
  <T, M>(a: Array<T>, b: M): T;
};

const something: Something = (item) => item[0];

something([1, 3, 4, 5], "x");
something(["d", "21jlgd", "djalg"], 2);
something(["d", 1234, false], []);

function fcPrint<T>(a: T[]) {
  return a;
}

fcPrint([12, 33, 55]);
fcPrint([true, false]);

type Example<Extra> = {
  name: string;
  extraInfo: Extra;
};

type favType = {
  favFood: string;
};

type favFood = Example<favType>;

const happy: favFood = {
  name: "happy",
  extraInfo: {
    favFood: "food",
  },
};

const pypy: Example<null> = {
  name: "pypy",
  extraInfo: null,
};

type Arr = Array<number>;

let ab: Arr = [1, 2, 3, 4];

function printAllNumbers(arr: Array<number>) {}

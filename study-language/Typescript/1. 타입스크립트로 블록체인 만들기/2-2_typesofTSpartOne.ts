// type 정의
type Player = {
  name: string;
  age?: number;
};

const kitty: Player = {
  name: "kitty",
};

const hong: Player = {
  name: "hong",
  age: 15,
};

// fc 함수
function playerMaker(name: string): Player {
  return {
    name: name,
  };
}

const vikky = playerMaker("vikky");
vikky.age = 18;

// 화살표 함수
const playerMaker2 = (name: string): Player => ({ name });

const molly = playerMaker2("molly");
molly.age = 21;

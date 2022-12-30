interface User {
  name: string;
}

interface PlayerProfile extends User {}

const player1: Player = {
  name: "player1",
};

////// type과 interface, interface는 자바스크립트로

type PlayerA = {
  name: string;
};

const Player1: PlayerA = {
  name: "player1",
};

interface PlayerB {
  name: string;
}

const Player2: PlayerB = {
  name: "player2",
};

interface PlayerC {
  name: string;
}

interface PlayerCC extends PlayerC {
  lastName: string;
  age: number;
}

const Player3: PlayerCC = {
  name: "player3",
  lastName: "last",
  age: 21,
};

/////// type과 interface는 implements로 상속 받아서 사용할 수 있다.

type PlayerTypeA = {
  firstName: string;
};

interface PlayerTypeB {
  firstName: string;
}

class User implements PlayerTypeA {
  constructor(public firstName: string) {}
}

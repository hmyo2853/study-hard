interface User {
  name: string;
}

interface PlayerProfile extends User {}

const player1: Player = {
  name: "player1",
};

const Game = require('./game.js');

const game = new Game();

// Simulate a perfect game (12 strikes)
for (let i = 0; i < 12; i++) {
    game.roll(10);
}
console.log(game.score()); // Output: 300

// Simulate another game
const anotherGame = new Game();
anotherGame.roll(5);
anotherGame.roll(5); // Spare
anotherGame.roll(3);
anotherGame.roll(0);

anotherGame.roll(0);anotherGame.roll(0);anotherGame.roll(0);
anotherGame.roll(0);anotherGame.roll(0);anotherGame.roll(0);
anotherGame.roll(0);anotherGame.roll(0);anotherGame.roll(0);
anotherGame.roll(0);anotherGame.roll(0);anotherGame.roll(0);
anotherGame.roll(0);anotherGame.roll(0);anotherGame.roll(0);

console.log(anotherGame.score()); // Output: 16 (10 + bonus of next roll (3) + remaining rolls)

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
anotherGame.roll(8);
anotherGame.roll(7);
anotherGame.roll(2);
anotherGame.roll(10); // Strike
anotherGame.roll(3);
anotherGame.roll(4);
anotherGame.roll(2);

console.log(anotherGame.score()); // Output: Correct total score based on all rolls

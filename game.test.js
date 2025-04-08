const Game = require('./game.js');

const game = new Game();

// Simulate a perfect game (12 strikes)
it ('should score a perfect game (12 strikes)', () => {
    for (let i = 0; i < 12; i++) {
        game.roll(10);
    }
    expect(game.score()).toBe(300); // Output: 300
}
);

//simulate a really bad game (20 gutter balls)
it ('should score a really bad game (20 gutter balls)', () => {
    for (let i = 0; i < 20; i++) {
        game.roll(0);
    }
    expect(game.score()).toBe(0); // Output: 0
}
);

it ('should score a game with spares and strikes', () => {
    const anotherGame = new Game();
        anotherGame.roll(3);
        anotherGame.roll(4);
        anotherGame.roll(4);
        anotherGame.roll(5);
        anotherGame.roll(2);
        anotherGame.roll(8);
        anotherGame.roll(10);
        anotherGame.roll(2); // Strike
        anotherGame.roll(5);
        anotherGame.roll(10);
        anotherGame.roll(3);
        anotherGame.roll(7);
        anotherGame.roll(10);
        anotherGame.roll(9);
        anotherGame.roll(1);
        anotherGame.roll(10);
        anotherGame.roll(10);
        anotherGame.roll(10);
        expect(anotherGame.score()).toBe(170); // Output: Correct total score based on all rolls
}
);

// Simulate another game


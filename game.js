class Game {
    constructor() {
        this.rolls = []; // Array to store all rolls
    }

    roll(pins) {
        this.rolls.push(pins); // Record the number of pins knocked down
    }

    score() {
        let totalScore = 0;
        let rollIndex = 0;

        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(rollIndex)) { // Strike case
                totalScore += 10 + this.strikeBonus(rollIndex);
                rollIndex += 1; // Move to next frame
            } else if (this.isSpare(rollIndex)) { // Spare case
                totalScore += 10 + this.spareBonus(rollIndex);
                rollIndex += 2; // Move to next frame
            } else { // Normal case
                totalScore += this.sumOfPinsInFrame(rollIndex);
                rollIndex += 2; // Move to next frame
            }
        }

        return totalScore;
    }

    isStrike(rollIndex) {
        return this.rolls[rollIndex] === 10;
    }

    isSpare(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }

    strikeBonus(rollIndex) {
        return (this.rolls[rollIndex + 1] || 0) + (this.rolls[rollIndex + 2] || 0);
    }

    spareBonus(rollIndex) {
        return this.rolls[rollIndex + 2] || 0;
    }

    sumOfPinsInFrame(rollIndex) {
        return (this.rolls[rollIndex] || 0) + (this.rolls[rollIndex + 1] || 0);
    }
}

module.exports = Game;
class Game {
    constructor() {
        this.rolls = [];
    }

    roll(pins) {
        this.rolls.push(pins);
    }

    score() {
        let totalScore = 0;
        let rollIndex = 0;
        for (let frame=0;frame < 10; frame++){
            if (this.isStrike(rollIndex)) {
                totalScore += 10 + this.strikeBonus(rollIndex);
                rollIndex += 1; // Move to the next frame (strike ends the frame)
            } else if (this.isSpare(rollIndex)) { // Spare case
                totalScore += 10 + this.spareBonus(rollIndex);
                rollIndex += 2; // Move to the next frame
            } else { // Normal case
                totalScore += this.sumOfPinsInFrame(rollIndex);
                rollIndex += 2; // Move to the next frame
            }
        }
        return totalScore;
    }

    // Helper method to check if a roll is a strike
    isStrike(rollIndex) {
        return this.rolls[rollIndex] === 10;
    }

    // Helper method to check if a frame is a spare
    isSpare(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }

    // Helper method to calculate the bonus for a strike
    strikeBonus(rollIndex) {
        return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }

    // Helper method to calculate the bonus for a spare
    spareBonus(rollIndex) {
        return this.rolls[rollIndex + 2];
    }

    // Helper method to sum up pins in a frame
    sumOfPinsInFrame(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    }

}

module.exports = Game;



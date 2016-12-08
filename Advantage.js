class Advantage {
  constructor(score) {
    this.score = score;
  }

  static matches(score) {
    return score.isAdvantage();
  }

  scoreText() {
    var minusResult = this.score.player1 - this.score.player2;
    if (minusResult === 1) {
      return "Advantage player1";
    } else {
      return "Advantage player2";
    }
  }
}

module.exports = Advantage;

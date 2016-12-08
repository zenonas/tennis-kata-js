class Win {
  constructor(score) {
    this.score = score;
  }

  scoreText() {
    var minusResult = this.score.player1 - this.score.player2;
    if (minusResult >= 2) return "Win for player1";
    return "Win for player2";
  }
}

module.exports = Win;

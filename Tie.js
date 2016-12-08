class Tie {
  constructor(score) {
    this.score = score;
  }

  scoreText() {
    switch (this.score.player1) {
      case 0:
      return "Love-All";
      case 1:
      return "Fifteen-All";
      case 2:
      return "Thirty-All";
      default:
      return "Deuce";
    }
  }
}

module.exports = Tie;

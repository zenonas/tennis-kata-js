import Basic from './Basic';

class Win extends Basic {
  static matches(score) {
    return score.isWin();
  }

  scoreText() {
    if (this.score.player1 > this.score.player2) return "Win for player1";
    return "Win for player2";
  }
}

module.exports = Win;

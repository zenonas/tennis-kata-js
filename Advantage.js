import Basic from './Basic';

class Advantage extends Basic {
  static matches(score) {
    return score.isAdvantage();
  }

  scoreText() {
    if (this.score.player1 > this.score.player2) return "Advantage player1";
    return "Advantage player2";
  }
}

module.exports = Advantage;

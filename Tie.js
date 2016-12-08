import Basic from './Basic';

class Tie extends Basic {
  static matches(score) {
    return score.isTie();
  }

  scoreText() {
    if (this.score.isDeuce()) return "Deuce";
    const textualScores = this._numericToText(this.score.player1);
    return `${textualScores}-All`;
  }
}

module.exports = Tie;

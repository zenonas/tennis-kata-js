class Basic {
  constructor(score) {
    this.score = score;
    this.textScores = ['Love', 'Fifteen', 'Thirty', 'Forty'];
  }

  static matches(score) {
    return score.isBasic();
  }

  scoreText() {
    return `${this._numericToText(this.score.player1)}-${this._numericToText(this.score.player2)}`;
  }

  _numericToText(number) {
    return this.textScores[number];
  }
}

module.exports = Basic;

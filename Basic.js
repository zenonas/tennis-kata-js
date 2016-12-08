class Basic {
  constructor(score) {
    this.score = score;
  }

  scoreText() {
    var tempScore = 0;
    var score = "";
    for (var i = 1; i < 3; i++) {
      if (i === 1) tempScore = this.score.player1;
      else {
        score += "-";
        tempScore = this.score.player2;
      }
      switch (tempScore) {
        case 0:
        score += "Love";
        break;
        case 1:
        score += "Fifteen";
        break;
        case 2:
        score += "Thirty";
        break;
        case 3:
        score += "Forty";
        break;
      }
    }
    return score;
  }
}

module.exports = Basic;

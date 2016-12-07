class TennisGame {

  constructor() {
    this.player1Score = 0;
    this.player2Score = 0;
  }

  wonPoint(playerName) {
    if (playerName === "player1")
    this.player1Score += 1;
    else
    this.player2Score += 1;
  }

  getScore() {
    if (this.player1Score === this.player2Score) {
      return this.getScoreWhenTie();
    } else if (this.player1Score >= 4 || this.player2Score >= 4) {
      return this.getScoreCloseToTheEnd();
    } else {
      return this.getScoreForGame();
    }
  }

  getScoreWhenTie() {
    switch (this.player1Score) {
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

  getScoreCloseToTheEnd() {
    var minusResult = this.player1Score - this.player2Score;
    if (minusResult === 1) return "Advantage player1";
    else if (minusResult === -1) return "Advantage player2";
    else if (minusResult >= 2) return "Win for player1";
    else return "Win for player2";
  }
    
  getScoreForGame() {
    var tempScore = 0;
    var score = "";
    for (var i = 1; i < 3; i++) {
      if (i === 1) tempScore = this.player1Score;
      else {
        score += "-";
        tempScore = this.player2Score;
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

module.exports = TennisGame;

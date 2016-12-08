import Score from './Score';

class TennisGame {

  constructor() {
    this.score = new Score();
  }

  wonPoint(playerName) {
    if (playerName === "player1")
    this.score.player1 += 1;
    else
    this.score.player2 += 1;
  }

  getScore() {
    if (this.score.player1 === this.score.player2) {
      return this.getScoreWhenTie();
    } else if (this.score.player1 >= 4 || this.score.player2 >= 4) {
      return this.getScoreCloseToTheEnd();
    } else {
      return this.getScoreForGame();
    }
  }

  getScoreWhenTie() {
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

  getScoreCloseToTheEnd() {
    var minusResult = this.score.player1 - this.score.player2;
    if (minusResult === 1) return "Advantage player1";
    else if (minusResult === -1) return "Advantage player2";
    else if (minusResult >= 2) return "Win for player1";
    else return "Win for player2";
  }

  getScoreForGame() {
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

module.exports = TennisGame;

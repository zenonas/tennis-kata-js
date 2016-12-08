import Score from './Score';
import Tie from './Tie';
import Win from './Win';
import Basic from './Basic';
import Advantage from './Advantage';

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
    var tie = new Tie(this.score);
    return tie.scoreText();
  }

  getScoreCloseToTheEnd() {
    var minusResult = this.score.player1 - this.score.player2;
    if (minusResult === 1 || minusResult === -1) {
      var advantage = new Advantage(this.score);
      return advantage.scoreText();
    } else {
      var win = new Win(this.score);
      return win.scoreText();
    }
  }

  getScoreForGame() {
    var basic = new Basic(this.score);
    return basic.scoreText();
  }
}

module.exports = TennisGame;

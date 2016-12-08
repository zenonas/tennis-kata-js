import Tie from './Tie';
import Win from './Win';
import Basic from './Basic';
import Advantage from './Advantage';

class GameStateFactory {
  getScoreTypeForScore(score) {
    if (score.player1 === score.player2) {
      return new Tie(score);
    } else if (score.player1 >= 4 || score.player2 >= 4) {
      var minusResult = score.player1 - score.player2;
      if (minusResult === 1 || minusResult === -1) {
        return new Advantage(score);
      } else {
        return new Win(score);
      }
    } else {
      return new Basic(score);
    }
  }
}

module.exports = GameStateFactory;

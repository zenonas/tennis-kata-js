import GameStateFactory from './GameStateFactory';
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
    var gameStateFactory = new GameStateFactory();
    return gameStateFactory.getScoreTypeForScore(this.score).scoreText();
  }
}

module.exports = TennisGame;

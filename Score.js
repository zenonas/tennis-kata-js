class Score {
  constructor() {
    this.player1 = 0;
    this.player2 = 0;
  }

  addPointToPlayer1() {
    this.player1 += 1;
  }

  addPointToPlayer2() {
    this.player2 += 1;
  }

  isTie() {
    return this.player1 === this.player2;
  }

  isAdvantage() {
    return this._anyPlayerHasMorePointsThan(4) && this._smallScoreDifferenceBetweenPlayers();
  }

  isWin() {
    return this._anyPlayerHasMorePointsThan(4) && !this._smallScoreDifferenceBetweenPlayers();
  }

  isBasic() {
    return true;
  }

  isDeuce() {
    return this.isTie() && this._anyPlayerHasMorePointsThan(3);
  }

  _anyPlayerHasMorePointsThan(points) {
    return this.player1 >= points || this.player2 >= points;
  }

  _smallScoreDifferenceBetweenPlayers() {
    return Math.abs(this.player1 - this.player2) === 1;
  }
}

module.exports = Score;

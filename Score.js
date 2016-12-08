class Score {
  constructor() {
    this.player1 = 0;
    this.player2 = 0;
  }

  isTie() {
    return this.player1 === this.player2;
  }

  isAdvantage() {
    return this._bothPlayersHaveMoreThanFourPoints() && this._smallScoreDifferenceBetweenPlayers();
  }

  isWin() {
    return this._bothPlayersHaveMoreThanFourPoints() && !this._smallScoreDifferenceBetweenPlayers();
  }

  isBasic() {
    return true;
  }

  _bothPlayersHaveMoreThanFourPoints() {
    return this.player1 >= 4 || this.player2 >= 4;
  }

  _smallScoreDifferenceBetweenPlayers() {
    return Math.abs(this.player1 - this.player2) === 1;
  }
}

module.exports = Score;

import Tie from './Tie';
import Win from './Win';
import Basic from './Basic';
import Advantage from './Advantage';

class GameStateFactory {
  getScoreTypeForScore(score) {
    const gameStateKlass = [Tie, Advantage, Win, Basic].find((state) => state.matches(score));
    return new gameStateKlass(score);
  }
}

module.exports = GameStateFactory;

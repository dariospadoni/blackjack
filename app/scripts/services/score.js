'use strict';

/**
 * @ngdoc service
 * @name blackjackApp.Score
 * @description
 * # Score
 *
 * Service to calculate score from a set of cards
 */
angular.module('blackjackApp')
  .service('Score', function () {

    var getScore = function(cards) {
      var score = 0;
      var aceInCards = false;
      _.each(cards, function(card) {
        if (card.value === 1) {
          aceInCards = true;
        }
        score += card.value;
      });
      if (score < 12 && aceInCards === true) {
        score += 10;
      }
      return score;
    };

    var bust = function (cards) {
      return getScore(cards) > 21;
    };

    return {
      getScore: getScore,
      bust: bust
    };
  });

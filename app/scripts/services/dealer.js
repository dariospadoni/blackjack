'use strict';

/**
 * @ngdoc service
 * @name blackjackApp.dealer
 * @description
 * # dealer
 *
 * Service which implements a dealer strategy
 *
 */
angular.module('blackjackApp')
  .service('Dealer', function () {
    var minimumScore = 0;

    //minimum score for the dealer is the highest scored by players
    var setMinimumScore = function(score) {
      minimumScore = Math.min(score, 17);
    };

    //given the current scores determines next dealer move
    var nextAction = function (currentScore) {
      if (currentScore < 17) {
        //minumum score for the dealer is 17, hit
        return 'hit';
      }
      if (currentScore < minimumScore) {
        return 'hit';
      }
      return 'stand';
    };

    return {
      nextAction: nextAction,
      setMinimumScore: setMinimumScore
    };
  });

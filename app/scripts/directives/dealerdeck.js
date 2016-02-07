'use strict';

/**
 * @ngdoc directive
 * @name blackjackApp.directive:dealerDeck
 * @description
 *
 * Directive which shows the dealer deck and controls his play
 *
 */
angular.module('blackjackApp')
  .directive('dealerDeck', function () {
    return {
      templateUrl: 'views/directives/dealerdeck.html',
      restrict: 'E',
      scope: {},
      controller: function ($scope, Board, Dealer, Score) {
        $scope.cards = [];
        $scope.bust = false;
        var currentScore = 0;

        //on new game deck is initialised with one card
        $scope.$on('newGame', function () {
          $scope.cards = [Board.draw()];
          $scope.bust = false;
          currentScore = Score.getScore($scope.cards);
        });

        $scope.$on('reset', function () {
          $scope.cards = [];
          $scope.bust = false;
          currentScore = 0;
        });

        //fire when all the players have finished their plays
        $scope.$on('dealerRound', function(evnt, playersHigherScore) {
          Dealer.setMinimumScore(playersHigherScore);
          while(Dealer.nextAction(currentScore) === 'hit') {
            $scope.cards.push(Board.draw());
            if (Score.bust($scope.cards)) {
              $scope.$emit('dealerBust');
              currentScore = 0;
              break;
            }
            currentScore = Score.getScore($scope.cards);
          }
          $scope.$emit('dealerRoundEnded', currentScore);
        });
      }
    };
  });

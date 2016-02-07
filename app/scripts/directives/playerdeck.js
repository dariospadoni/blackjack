'use strict';

/**
 * @ngdoc directive
 * @name blackjackApp.directive:playerDeck
 * @description
 *
 * Directive which shows a player deck together with game controls and game result
 *
 */
angular.module('blackjackApp')
  .directive('playerDeck', function () {
    return {
      templateUrl: 'views/directives/playerdeck.html',
      restrict: 'E',
      scope: {
        player: '=',
        active: '='
      },
      controller: function ($scope, Board, Score) {
        $scope.cards = [];
        $scope.result = '';

        function reset () {
          $scope.player.bust = false;
          $scope.player.score = 0;
          $scope.blackJack = false;
          $scope.cards = [];
          $scope.result = '';
        }

        //draw a new card
        $scope.hit = function() {
          $scope.cards.push(Board.draw());
          //checks for bust
          if (Score.bust($scope.cards)) {
            $scope.player.bust = true;
            $scope.result = 'BUST :-(';
            $scope.$emit('nextPlayer', [$scope.player]);
          }
          //if score is 21 move to next player
          if (Score.getScore($scope.cards) === 21) {
            $scope.stick();
          }
        };

        //move to next player
        $scope.stick = function() {
          $scope.player.score = Score.getScore($scope.cards);
          $scope.$emit('nextPlayer', [$scope.player]);
        };

        $scope.$on('gameOver', function(evnt, dealerScore) {
          if ($scope.result === '') {
            $scope.result = (dealerScore < $scope.player.score || $scope.blackJack === true) ? 'WIN! :-)' : 'LOST :-(';
          }
        });

        $scope.$on('newGame', function () {
          reset();
          $scope.cards = [Board.draw(), Board.draw()];
          if (Score.getScore($scope.cards) === 21) {
            $scope.blackJack = true;
          }
        });

        $scope.$on('reset', reset);

      }
    };
  });

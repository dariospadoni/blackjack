'use strict';

/**
 * @ngdoc function
 * @name blackjackApp.controller:BoardCtrl
 * @description
 * # BoardCtrl
 * Main controller of the board: manage players, deck and game
 */
angular.module('blackjackApp')
  .controller('BoardCtrl', function ($scope, Board) {
    $scope.players = [{ id: 0, name: 'Player 1' }];
    $scope.currentPlayer = null;
    $scope.playing = false;

    //start a new game
    $scope.newGame = function () {
      $scope.playing = true;
      Board.newGame();
      $scope.$broadcast('newGame');
      $scope.currentPlayer = 0;
    };

    //add a new player
    $scope.addPlayer = function() {
      $scope.players.push({ id: $scope.players.length, name: 'Player ' + ($scope.players.length + 1)});
    };

    //reset current game
    $scope.reset = function() {
      $scope.currentPlayer = null;
      $scope.playing = false;
      $scope.$broadcast('reset');
    };

    //fired when a player "sticks" or "busts"
    $scope.$on('nextPlayer', function() {
      if (!nextPlayer()) {
        var highestScore = getPlayerHighestScore();
        if (highestScore > 0) {
          $scope.currentPlayer = null;
          //get players highest score which will be the minimum score the dealer has to reach
          $scope.$broadcast('dealerRound', getPlayerHighestScore());
        }
      }
    });

    $scope.$on('dealerRoundEnded', function(event, dealerScore) {
      $scope.currentPlayer = null;
      $scope.playing = false;
      $scope.$broadcast('gameOver', dealerScore);
    });

    var getPlayerHighestScore = function() {
      return _.max(_.map($scope.players, 'score'));
    };

    function nextPlayer() {
      if ($scope.currentPlayer < $scope.players.length - 1) {
        $scope.currentPlayer++;
        return true;
      }
      return false;
    }

  });

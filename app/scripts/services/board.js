'use strict';

/**
 * @ngdoc service
 * @name blackjackApp.Board
 * @description
 * # Board
 *
 * Draw a card and keeps track of cards currently on the board
 */
angular.module('blackjackApp')
  .service('Board', function (Card) {
    //cards already in the board
    var drawnCards = [];

    var startNewGame = function (){
      startNewGame = [];
    };

    var drawCard = function () {
      var random = -1;
      do {
        random = _.random(0, 51);
      }
      while (_.indexOf(drawnCards, random) !== -1 );
      drawnCards.push(random);
      return Card.getCard(random);
    };

    return {
      newGame: startNewGame,
      draw: drawCard
    };

  });

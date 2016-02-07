'use strict';

/**
 * @ngdoc service
 * @name blackjackApp.Card
 * @description
 *
 * Service which return inforation about every card (file name, name, suit, value..)
 */
angular.module('blackjackApp')
  .service('Card', function () {

    var cardsConfig = [

      { value: 1, suit: 'Clubs', name: 'Ace of clubs', file: 'ace_of_clubs.png' },
      { value: 1, suit: 'Diamonds', name: 'Ace of diamonds', file: 'ace_of_diamonds.png' },
      { value: 1, suit: 'Hearts', name: 'Ace of hearts', file: 'ace_of_hearts.png' },
      { value: 1, suit: 'Spades', name: 'Ace of spades', file: 'ace_of_spades.png' },

      { value: 2, suit: 'Clubs', name: '2 of clubs', file: '2_of_clubs.png' },
      { value: 2, suit: 'Diamonds', name: '2 of diamonds', file: '2_of_diamonds.png' },
      { value: 2, suit: 'Hearts', name: '2 of hearts', file: '2_of_hearts.png' },
      { value: 2, suit: 'Spades', name: '2 of spades', file: '2_of_spades.png' },

      { value: 3, suit: 'Clubs', name: '3 of clubs', file: '3_of_clubs.png' },
      { value: 3, suit: 'Diamonds', name: '3 of diamonds', file: '3_of_diamonds.png' },
      { value: 3, suit: 'Hearts', name: '3 of hearts', file: '3_of_hearts.png' },
      { value: 3, suit: 'Spades', name: '3 of spades', file: '3_of_spades.png' },

      { value: 4, suit: 'Clubs', name: '4 of clubs', file: '4_of_clubs.png' },
      { value: 4, suit: 'Diamonds', name: '4 of diamonds', file: '4_of_diamonds.png' },
      { value: 4, suit: 'Hearts', name: '4 of hearts', file: '4_of_hearts.png' },
      { value: 4, suit: 'Spades', name: '4 of spades', file: '4_of_spades.png' },

      { value: 5, suit: 'Clubs', name: '5 of clubs', file: '5_of_clubs.png' },
      { value: 5, suit: 'Diamonds', name: '5 of diamonds', file: '5_of_diamonds.png' },
      { value: 5, suit: 'Hearts', name: '5 of hearts', file: '5_of_hearts.png' },
      { value: 5, suit: 'Spades', name: '5 of spades', file: '5_of_spades.png' },

      { value: 6, suit: 'Clubs', name: '6 of clubs', file: '6_of_clubs.png' },
      { value: 6, suit: 'Diamonds', name: '6 of diamonds', file: '6_of_diamonds.png' },
      { value: 6, suit: 'Hearts', name: '6 of hearts', file: '6_of_hearts.png' },
      { value: 6, suit: 'Spades', name: '6 of spades', file: '6_of_spades.png' },

      { value: 7, suit: 'Clubs', name: '7 of clubs', file: '7_of_clubs.png' },
      { value: 7, suit: 'Diamonds', name: '7 of diamonds', file: '7_of_diamonds.png' },
      { value: 7, suit: 'Hearts', name: '7 of hearts', file: '7_of_hearts.png' },
      { value: 7, suit: 'Spades', name: '7 of spades', file: '7_of_spades.png' },

      { value: 8, suit: 'Clubs', name: '8 of clubs', file: '8_of_clubs.png' },
      { value: 8, suit: 'Diamonds', name: '8 of diamonds', file: '8_of_diamonds.png' },
      { value: 8, suit: 'Hearts', name: '8 of hearts', file: '8_of_hearts.png' },
      { value: 8, suit: 'Spades', name: '8 of spades', file: '8_of_spades.png' },

      { value: 9, suit: 'Clubs', name: '9 of clubs', file: '9_of_clubs.png' },
      { value: 9, suit: 'Diamonds', name: '9 of diamonds', file: '9_of_diamonds.png' },
      { value: 9, suit: 'Hearts', name: '9 of hearts', file: '9_of_hearts.png' },
      { value: 9, suit: 'Spades', name: '9 of spades', file: '9_of_spades.png' },

      { value: 10, suit: 'Clubs', name: '10 of clubs', file: '10_of_clubs.png' },
      { value: 10, suit: 'Diamonds', name: '10 of diamonds', file: '10_of_diamonds.png' },
      { value: 10, suit: 'Hearts', name: '10 of hearts', file: '10_of_hearts.png' },
      { value: 10, suit: 'Spades', name: '10 of spades', file: '10_of_spades.png' },

      { value: 10, suit: 'Clubs', name: 'Jack of clubs', file: 'jack_of_clubs.png' },
      { value: 10, suit: 'Diamonds', name: 'Jack of diamonds', file: 'jack_of_diamonds.png' },
      { value: 10, suit: 'Hearts', name: 'Jack of hearts', file: 'jack_of_hearts.png' },
      { value: 10, suit: 'Spades', name: 'Jack of spades', file: 'jack_of_spades.png' },

      { value: 10, suit: 'Clubs', name: 'Queen of clubs', file: 'queen_of_clubs.png' },
      { value: 10, suit: 'Diamonds', name: 'Queen of diamonds', file: 'queen_of_diamonds.png' },
      { value: 10, suit: 'Hearts', name: 'Queen of hearts', file: 'queen_of_hearts.png' },
      { value: 10, suit: 'Spades', name: 'Queen of spades', file: 'queen_of_spades.png' },

      { value: 10, suit: 'Clubs', name: 'King of clubs', file: 'king_of_clubs.png' },
      { value: 10, suit: 'Diamonds', name: 'King of diamonds', file: 'king_of_diamonds.png' },
      { value: 10, suit: 'Hearts', name: 'King of hearts', file: 'king_of_hearts.png' },
      { value: 10, suit: 'Spades', name: 'King of spades', file: 'king_of_spades.png' }
    ];

    return {
      getCard: function(index) { return cardsConfig[index]; }
    };

  });

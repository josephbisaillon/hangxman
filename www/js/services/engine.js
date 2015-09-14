
  angular.module('hangxmen')

  .factory('engine', function($http, $filter) {
    
    // @access private object for game history data
    var gameHistory = [];
    
    // @access private object for system resources
    var resources;
    
    
    return {
      
      /**
       * requestSystemResources()
       *
       * Retrieve json object of all system resources
       *
       * @access public
       * @param void
       */
      requestSystemResources: function() {
        
        return $http.get('db/resources.json').success(function(data) {
          resources = data[0];
        });
        
      },
      

      /**
       * createNewGame()
       *
       * Create a new game object with default values and a random 
       * Xmen character name for the player to guess
       *
       * @access public
       * @return {object} new game instance for the player
       */
      createNewGame: function() {
        
        var newGame = {};
        
        newGame.victory = false;
        newGame.totalGuessCount = 0;
        newGame.failedGuessCount = 0;
        newGame.matchedLetters = [];
        newGame.character = resources.xmen[Math.floor(Math.random() * resources.xmen.length)]
        
        return newGame;      
        
      },
      

      /**
       * storeGameResults()
       *
       * Store the completed game results in the gameHistory object for 
       * scorekeeping and metrics
       *
       * @access public
       * @param {object} currentGame data from the completed game 
       */
      storeGameResults: function(currentGame) {
                
        // push the currentGame into the gameHistory collection
        gameHistory.push(currentGame);     
        
      },
      

      /**
       * getTotalScore()
       *
       * Calculate the total player wins and computer wins for the entire 
       * stored game history
       *
       * @access public
       * @param void 
       */
      getTotalScore: function() {
                
        var totalScore = {};
        
        totalScore.playerWins = $filter('filter')(gameHistory, {victory: true}).length;
        totalScore.computerWins = $filter('filter')(gameHistory, {victory: false}).length;
        
        return totalScore;
        
      },
      
      
      /**
       * getBodyParts()
       *
       * Return the private collection of Wolverine's body parts so the player 
       * can incrementally hang him by making bad guesses
       *
       * @access public
       * @param void
       */
      getBodyParts: function() {
        
        return resources.bodyParts;
          
      }
      
    };

  });

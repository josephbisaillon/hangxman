
  angular.module('hangxman')
  
  .controller('game-controller', function($scope, engine) {
    
    /**
     * startNewGame()
     *
     * Instantiate a new game instance with a random Xmen character and 
     * split the codeName into an array of individual letters for iteration
     *
     * @param void
     */
    $scope.startNewGame = function() {
      
      $scope.activeGame = true;
      $scope.bodyParts = engine.getBodyParts();
      $scope.currentGame = engine.createNewGame();
      $scope.currentGame.character.letters = $scope.currentGame.character.codeName.split('');
        
    };
    
    
    /**
     * checkCurrentGuess()
     *
     * Evaluate the current guess against the letters array of the character 
     * codeName and handle the potential outcomes including game completion
     *
     * @param void
     */
    $scope.checkCurrentGuess = function() {
       
      /* 
       * set the guess status to false and increment the total guess count 
       * before searching for a match
       */
      $scope.guessStatus = false;
      $scope.currentGame.totalGuessCount++;
        
      // iterate through each letter and store the indices of the matches 
      angular.forEach($scope.currentGame.character.letters, function(value, key) {
        if ($scope.currentGuess == value) {
          $scope.guessStatus = true;
          
          // push the key into the matched letters array if doesn't exist
          if ($scope.currentGame.matchedLetters.indexOf(key) == -1) {
            $scope.currentGame.matchedLetters.push(key);
          }
        }
      });
      
      // increment the failed guess count if no matches were found
      if ($scope.guessStatus == false) {
        $scope.currentGame.failedGuessCount++;
      }

      // empty the current guess value for next usage
      $scope.currentGuess = '';
      
      /* 
       * check to see if the user has completed the entire name or  
       * has exceeded the maximum number of failed guesses
       */
      if ($scope.currentGame.matchedLetters.length >= $scope.currentGame.character.letters.length || 
          $scope.currentGame.failedGuessCount >= $scope.bodyParts.length - 1) {
        
        // set the victory marker for successful games
        if ($scope.currentGame.matchedLetters.length >= $scope.currentGame.character.letters.length) {
          $scope.currentGame.victory = true;
        }
        
        // remove the letters array before storing and store the completed game results
        delete $scope.currentGame.character.letters;
        engine.storeGameResults($scope.currentGame);
        $scope.processResults();
        
      }
      
    };
  
  
    /**
     * processResults()
     *
     * Calculate the new total score and display the results to the user
     *
     * @param void
     */ 
    $scope.processResults = function() {
      
      $scope.activeGame = false;
      $scope.totalScore = engine.getTotalScore();
      
    };
    
  });
  
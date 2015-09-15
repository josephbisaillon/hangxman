Hangxman
========

Here is my glorious X-men themed twist on the traditional Hangman. Some considerations:

1. To get started, fire up your local server and point to the `www` directory.
2. I am not a Node engineer so the entire business logic is on the client. Cheaters are welcome. I debated taking a stab at writing it in Node but saner minds prevailed as I thought it would be better to deliver nothing than something subpar.
3. I actually am very interested in learning Node, though.
4. After each game, the following data points are stored in the game history: `victory (boolean)`, `totalGuessCount`, `failedGuessCount`, `matchedLetters (array of indices)`, `character (object)`.
5. At some point while working on my last project I found some different opinionated Angular style guides (i.e. https://github.com/johnpapa/angular-styleguide). I did not incorporate those here as I haven't road-tested the concepts yet but wanted to point out that I’m aware of them and that’s what I’m migrating towards.
6. Even when you lose, Wolverine doesn’t die. Because you can’t kill Wolverine.

Enjoy!

Scott

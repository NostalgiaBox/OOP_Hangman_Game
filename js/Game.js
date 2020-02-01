/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//This is an array of background colors that will fade in as more answers are missed.
const backgroundColors = ["white", "#ffeae8", "#f5b8b3", "#fa867d", "#f74d40"];

//Game class
 class Game {
     constructor(){
        this.activePhrase = null;
        this.missed = 0;
        //Is the game currently active? 
        this.active = false;
        //Setting the phrases up
        this.phrases = [new Phrase('life is like a box of chocolates'), new Phrase('win some lose some'),
        new Phrase('baby shark'), new Phrase('show me the money'), new Phrase('A Dingo Ate My Baby')];
     }

     startGame(){
         //Initialize the background color to white (if there was a previous game);
        document.body.style.cssText = "background-color: " + backgroundColors[this.missed];
        //Find the overlay
        const overlay = document.querySelector('#overlay');
        // Find any game over message if present and remove it
        const gameOverMessage = document.querySelector('.game-over-message');
        if (gameOverMessage){
            
            overlay.removeChild(gameOverMessage);
        }
        // Hide the overlay
        overlay.style.display = 'none';
        //Pull a phrase and add it to the display, turn on the active boolean
        this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.active = true;
     }

     getRandomPhrase(){
         //Pull a random number within the range of the phrases index and pick that phrase.
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        this.activePhrase = this.phrases[randomNumber];
     }

     handleInteraction(button){
         // This checks the letter that got passed in to see if it is a match or not
        if(this.activePhrase.checkLetter(button.innerText)){
           //disable the button, set the class name as chosen, and check to see if we won
            button.disabled = true;
            button.className = "key chosen";
            if (this.checkForWin()) {
                // if its a win call gameover
                this.gameOver(false);
            }
        } else {
            //This means the key wasn't in our set.  Disable it and set it to chosen wrong.  
            button.disabled = true;
            button.className = "key chosen wrong";
            // Shift the background color more towards red as a warning to the player
            document.body.style.cssText = "background-color: " + backgroundColors[this.missed];
            //remove a life and if you are out of lives run gameover.
            if (this.removeLife()) {
                this.gameOver(true);
            }
        }
     }

     removeLife(){
         //Get an array of heart images
        const hearts = document.querySelectorAll('img');
        if (this.missed === 4){
            //This means we lost
            return true;
        }else {
            //If we haven't lost, set one heart to lostHeart then increment missed
            hearts[this.missed].src = "images/lostHeart.png";
            this.missed += 1;
        }
        return false;
     }

     checkForWin(){
         //get an array of all missed letters, if there aren't any then we have won
        const hiddenList = document.querySelectorAll('.hidden');
        if(hiddenList.length === 0){
            return true;
        } 
        return false;
     }

     // gameOver takes a boolean to tell whether or not it is a loss or a win state.
     gameOver(isLoss){
         //grab the button, overlay, and create a new h3 label.
        const overlay = document.querySelector('#overlay');
        const gameOverMessage = document.createElement('h3');
        const button = document.querySelector('#btn__reset');
        // Set up the h3 and design the message and class around the win or loss
        gameOverMessage.className = 'game-over-message';
        if (isLoss){
            gameOverMessage.textContent = "Sorry but you lost, try again!";
            overlay.className = "lose";
        }else {
            gameOverMessage.textContent = "You won! Congratulations!"
            overlay.className = "win";
        }
        // Add the game over message and set the overlay to visible
        overlay.insertBefore(gameOverMessage, button);
        overlay.style.display = 'inherit';
        //Just some cleanup, reset hearts to full, set missed to 0, and set the game to be inactive.
        const lostHearts = document.querySelectorAll('img[src="images/lostHeart.png"]');
        for (let i = 0; i < lostHearts.length; i += 1){
            lostHearts[i].src = "images/liveHeart.png"
        }
        this.missed = 0;
        this.active = false;

     }
 }
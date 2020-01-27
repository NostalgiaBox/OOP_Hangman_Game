/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
        this.activePhrase = null;
        this.missed = 0;
        this.active = false;
        this.phrases = [new Phrase('life is like a box of chocolates'), new Phrase('win some lose some'),
        new Phrase('baby shark'), new Phrase('show me the money')];
     }

     startGame(){
        const overlay = document.querySelector('#overlay');
        const gameOverMessage = document.querySelector('.game-over-message');
        if (gameOverMessage){
            overlay.removeChild(gameOverMessage);
        }
        overlay.style.display = 'none';
        this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.active = true;
     }

     getRandomPhrase(){
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        this.activePhrase = this.phrases[randomNumber];
     }

     handleInteraction(button){
        if(this.activePhrase.checkLetter(button.innerText)){
           
            button.disabled = true;
            button.className = "key chosen";
            this.checkForWin();
        } else {
            button.disabled = true;
            button.className = "key chosen wrong";
            this.removeLife();
        }
     }

     removeLife(){
        const hearts = document.querySelectorAll('img');
        //console.log(this.missed);
        if (this.missed === 4){
            this.gameOver(true);
        }else {
            hearts[this.missed].src = "images/lostHeart.png";
            this.missed += 1;
        }
     }

     checkForWin(){
        const hiddenList = document.querySelectorAll('.hidden');
        if(hiddenList.length === 0){
            this.gameOver(false);
        } 
     }

     gameOver(isLoss){
        const overlay = document.querySelector('#overlay');
        const gameOverMessage = document.createElement('h3');
        const button = document.querySelector('#btn__reset');
        gameOverMessage.className = 'game-over-message';
        if (isLoss){
            gameOverMessage.textContent = "Sorry but you lost, try again!";
            overlay.className = "lose";
        }else {
            gameOverMessage.textContent = "You won! Congratulations!"
            overlay.className = "win";
        }
        overlay.insertBefore(gameOverMessage, button);
        overlay.style.display = 'inherit';
        const lostHearts = document.querySelectorAll('img[src="images/lostHeart.png"]');
        for (let i = 0; i < lostHearts.length; i += 1){
            lostHearts[i].src = "images/liveHeart.png"
        }
        this.missed = 0;
        this.active = false;

     }
 }
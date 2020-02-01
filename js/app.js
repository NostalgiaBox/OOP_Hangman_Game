/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 let game;
 const phrase = new Phrase('life is like A BOX of Chocolates');
 const qwerty = document.querySelector('#qwerty');
 const startButton = document.querySelector('#btn__reset');

 // Start a new game if clicked
 startButton.addEventListener('click', (e) => {
    game = new Game();
    enableAllKeys();
    game.startGame();
 });

 function enableAllKeys(){
     // This just cycles through all the key buttons at the start of a game to re-enable them all.
    const disabledKeys = document.querySelectorAll('.chosen');
    for (let i = 0; i < disabledKeys.length; i += 1){
        disabledKeys[i].className = 'key';
        disabledKeys[i].disabled = false;
    }
 }

 document.addEventListener('keyup', (e) => {
     // This checks for typing, if the game is active it will try to find the corresponding button if it is still active to the key you pressed.
     if (game.active){
        const keys = document.querySelectorAll('.key:not(.chosen)');
        for (let i = 0; i < keys.length; i += 1){
            //console.log(`Key: ${keys[i]} KeyText: ${keys[i].innerText}`)
            if (keys[i].innerText == e.key) {
                //If it finds the button it runs the interaction as if you pressed that button, this is important because it needs to disable the button just
                // like if you pressed it rather than used a keystroke.
                game.handleInteraction(keys[i]);
            }
        }
     }
 });

 //Check to see if a button is pressed with a key on it.
 qwerty.addEventListener('click', (e) => {
     if ( e.target.className === 'key'){
        game.handleInteraction(e.target);
        
        
     } 
 });


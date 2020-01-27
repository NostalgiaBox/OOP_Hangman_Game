/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 let game;
 const phrase = new Phrase('life is like A BOX of Chocolates');
 const qwerty = document.querySelector('#qwerty');
 const startButton = document.querySelector('#btn__reset');

 startButton.addEventListener('click', (e) => {
    game = new Game();
    enableAllKeys();
    game.startGame();
 });

 function enableAllKeys(){
    const disabledKeys = document.querySelectorAll('.chosen');
    for (let i = 0; i < disabledKeys.length; i += 1){
        disabledKeys[i].className = 'key';
        disabledKeys[i].disabled = false;
    }
 }

 document.addEventListener('keyup', (e) => {
     if (game.active){
        const keys = document.querySelectorAll('.key:not(.chosen)');
        for (let i = 0; i < keys.length; i += 1){
            //console.log(`Key: ${keys[i]} KeyText: ${keys[i].innerText}`)
            if (keys[i].innerText == e.key) {
                game.handleInteraction(keys[i]);
            }
        }
     }
 });

 qwerty.addEventListener('click', (e) => {
     if ( e.target.className === 'key'){
        game.handleInteraction(e.target);
        
        
     } 
 });


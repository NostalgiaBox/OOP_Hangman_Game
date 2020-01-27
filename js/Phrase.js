/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
         this.phrase = phrase.toLowerCase();
     }

     addPhraseToDisplay() {
        const phraseDiv = document.querySelector('#phrase');
        const ul = phraseDiv.getElementsByTagName('UL')[0];
        ul.innerHTML = "";
        for (let i = 0; i < this.phrase.length; i += 1){
            let li = document.createElement('li');
            if (this.phrase[i] == ' '){
                li.className = 'space';
            } else {
                li.className = `hidden letter ${this.phrase[i]}` 
            }
            li.textContent = this.phrase[i];
            ul.appendChild(li);
            //check if space
        }
     }

     checkLetter(letter){
        const matches = document.querySelectorAll(`.${letter}.hidden`);
        if (matches.length > 0){
            this.showMatchedLetter(matches, letter);
            return true;
        }else {
            return false;
        }

     }

     showMatchedLetter(matches, letter){
        for (let i = 0; i < matches.length; i += 1){
            matches[i].className = `show letter ${letter}`;
        }
     }
 }
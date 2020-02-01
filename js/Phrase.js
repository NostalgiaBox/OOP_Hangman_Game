/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
         //Pull out all illegal characters
         this.phrase = phrase.replace(/[^A-Za-z ]+/g, "");
         //Set it to lowercase.
         this.phrase = this.phrase.toLowerCase();
     }

     addPhraseToDisplay() {
         //Find the phrase elements and clear out the old list.
        const phraseDiv = document.querySelector('#phrase');
        const ul = phraseDiv.getElementsByTagName('UL')[0];
        ul.innerHTML = "";
        // cycle through each letter and add the proper li elements.
        for (let i = 0; i < this.phrase.length; i += 1){
            let li = document.createElement('li');
            if (this.phrase[i] == ' '){
                li.className = 'space';
            } else {
                li.className = `hidden letter ${this.phrase[i]}` 
            }
            li.textContent = this.phrase[i];
            ul.appendChild(li);
            
        }
     }

     //checks to see if a letter is in the phrase (and hasn't already been chosen), returns true if present, false is not.
     checkLetter(letter){
        const matches = document.querySelectorAll(`.${letter}.hidden`);
        if (matches.length > 0){
            this.showMatchedLetter(matches, letter);
            return true;
        }else {
            return false;
        }

     }

     // Sets the matched letter to show by changing the class name of the blank.
     showMatchedLetter(matches, letter){
        for (let i = 0; i < matches.length; i += 1){
            matches[i].className = `show letter ${letter}`;
        }
     }
 }
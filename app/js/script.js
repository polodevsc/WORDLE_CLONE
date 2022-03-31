/*

Detect keypress
    -if a keypress is a letter
        - update "letters" and update tile markup
            -update tile markup based on "letters" value

    -if key press is backspace
        -delete last letter in "letters"
            -update tile markup based  on "letters"

*/


// get random word for puzzle

/*

let toAdd = document.querySelector('keyboard');
for(var i=0; i < 11; i++){
	let newDiv = document.createElement('div');
	newDiv.id='r'+i;
	newDiv.className = 'keyboardbutton';
	toAdd.appendChild(newDiv);
}





const fiveletterwords = (input) =>  {
	
    const file = input.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        const file = event.target.result;
        const allLines = file.split(/\r|\n/);
        // Reading line by line
        allLines.forEach((line) => {
            console.log(line);
        });
    };

    reader.onerror = (event) => {
        alert(event.target.error.name);
    };

    reader.readAsText(file);
}

fetch('../data/english_words.txt')
  .then(response => response.text())
  .then(text => console.log(text))
*/

let currentWord = words[Math.round(words.length * Math.random()-0.5)].toUpperCase();
document.cookie = "wordoftheday="+currentWord+"; SameSite=None;Secure";

//function is a letter


const lettersPattern = /^[A-Z]{1}$/;
let currentRowCount = 0;
let currentGuessCount = 0;
let currentGuess = '';
let currentLetters = '';
let gameended = false;

// detect keypress(keypress,)
let counter = 0;
document.addEventListener('keydown', (e) => {
	if(!gameended){
		counter++;
		// if a letter
		if(e.key.toUpperCase().match(lettersPattern)){
			console.log(e.key+counter);
			console.log(currentGuess);
			currentLetters = e.key;
			if(currentGuessCount < 5 && currentRowCount < 6)
				updateLetters(e.key,'add');
		}
			

		//if backspace
		if(e.key.toUpperCase().match('BACKSPACE')){
			console.log(currentGuess);
			if(currentGuessCount< 6 && currentRowCount < 7){
				console.log('BACKSPACE');
				updateLetters(e.key,'delete');
			}
		}
		
		//if enter
		if(e.key.toUpperCase().match('ENTER')){
			console.log('ENTER');
			if((currentGuessCount==5 && currentRowCount < 6) || (currentRowCount >= 6))
				updateLetters(e.key,'newline');
		}
	}
})

// update letters

const updateLetters = (Letter,type) =>{
	if(type=='add'){
		currentGuess = (currentGuess + Letter).toUpperCase();
		document.querySelector('#guess'+currentRowCount).getElementsByTagName('div')[currentGuessCount].innerText=Letter;
		document.querySelector('#guess'+currentRowCount).dataset.letters=currentGuess;
		currentGuessCount++;
		console.log(currentGuess);
	}
	if(type=='delete'){
		if(currentGuessCount>0){
			//currentGuess =currentGuess.replace(currentGuess.charAt(currentGuess.length - 1), '');
			currentGuess=currentGuess.slice(0,-1);
			document.querySelector('#guess'+currentRowCount).getElementsByTagName('div')[currentGuessCount-1].innerText='';
			currentGuessCount--;
		}
			
		document.querySelector('#guess'+currentRowCount).dataset.letters=currentGuess;
		console.log(currentGuess);
		console.log(currentGuessCount);
	}

	if(type=='newline'){
		currentRowCount++;
		if(currentRowCount < 6){
			//compare the word of the day to what was entered
			if(currentWord==currentGuess){
				gameended=true;
				console.log('end game');
				document.querySelector('#gameoutcome').innerHTML='You Won';	
			}else{
				currentGuess='';
				currentGuessCount=0;
				console.log('newline')
				console.log('currentGuess:'+currentGuess);
				console.log('currentGuessCount'+currentGuessCount);
				console.log('currentRowCount'+currentRowCount);
			}
		} else{
			gameended=true;
			console.log('end game');
			document.querySelector('#gameoutcome').innerHTML='Game Over';
		}
	}
	
}

//update tile marker


//delete last letter
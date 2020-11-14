import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  attempts: number = 0;

  loser: boolean = false;

  winner: boolean = false;

  word: string = 'CODING';

  hiddenWord: string = '';

  letters: string[] = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];


  constructor(){
    this.hiddenWord = '_ '.repeat( this.word.length );
  }


  checkLetter( letter: string ): void {
    this.existsLetter( letter );
    const hiddenWordArr = this.hiddenWord.split( ' ' );

    for ( let i = 0; i < this.word.length; i++ ){

      if ( this.word[i] === letter ){
        hiddenWordArr[i] = letter;
      }

    }
    this.hiddenWord = hiddenWordArr.join( ' ' );
    this.checkWin();
  }

  checkWin(): void{
    const wordArr = this.hiddenWord.split( ' ' );
    const wordEvaluate = wordArr.join( '' );

    if ( wordEvaluate === this.word ){
      this.winner = true;
      console.log( 'USER WIN.' );
    }

    if ( this.attempts >= 9 ){
      this.loser = true;
      console.log( 'USER LOSE.' );
    }

  }

  existsLetter( letter: string ): void{
    if ( this.word.indexOf( letter ) >= 0 ){
      console.log( `Letter exists: ${ letter }.` );
    } else {
      console.log( `Letter do not exists:${ letter }.` );
      this.attempts ++;
    }
  }

}

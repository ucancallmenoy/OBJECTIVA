import { Component, Output, Input, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
interface GameLevel {
  images: string[];
  solution: string;
  hints: number;
}
@Component({
  selector: 'app-exercise1-encapsulation',
  templateUrl: './exercise1-encapsulation.component.html',
  styleUrl: './exercise1-encapsulation.component.scss'
})
export class Exercise1EncapsulationComponent {
  @Output() nextExercise: EventEmitter<void> = new EventEmitter<void>();  // Emit to notify parent
      
  hintIndex: number;
    hints: string[];
    constructor(){
      this.hintIndex = 0; // Track how many hints have been shown
      this.hints = [
        "Hint 1: This term refers to the ability to read or modify the state of an object.",
        "Hint 2: In encapsulation, this is controlled using getters and setters.",
        "Hint 3: Modifiers like public, private, and protected control this level in classes.",
      ];
    }
  
    getHint(): void {
        if (this.hintIndex < this.hints.length) {
          Swal.fire({
            title: "Hint",
            text: this.hints[this.hintIndex],
            icon: "info",
            confirmButtonText: "OK",
          });
          this.hintIndex++;
        } else {
          Swal.fire({
            title: "No More Hints",
            text: "You've used all your hints!",
            icon: "warning",
            confirmButtonText: "Got it",
          });
        }
      }
      currentLevelIndex = 0;
      selectedLetters: (string | null)[] = [];
      shuffledLetters: (string | null)[] = [];
    
      isLoading: boolean = true;
        ngOnInit() {
          setTimeout(() => {
            this.isLoading = false; // Hide loading animation after 2 seconds
            this.initializeLevel();
          }, 1000);
          
        }
    
      // Define levels for the game
      levels: GameLevel[] = [
        {
          images: ['assets/ac1.png', 'assets/ac2.png', 'assets/ac3.png', 'assets/ac4.png'],
          solution: 'ACCESS',
          hints: 3
        },
      ];
    
      initializeLevel() {
        const currentLevel = this.levels[this.currentLevelIndex];
        this.selectedLetters = new Array(currentLevel.solution.length).fill(null);
        
        const solutionLetters = currentLevel.solution.split('');
        const extraLetters = this.generateExtraLetters(solutionLetters);
        this.shuffledLetters = this.shuffleArray([...solutionLetters, ...extraLetters]);
      }
    
      selectLetter(letter: string | null) {
        if (letter === null) return;
    
        const emptyIndex = this.selectedLetters.findIndex(l => l === null);
        if (emptyIndex !== -1) {
          this.selectedLetters[emptyIndex] = letter;
          
          const letterIndex = this.shuffledLetters.indexOf(letter);
          if (letterIndex !== -1) {
            this.shuffledLetters[letterIndex] = null;
          }
        }
      }
    
      removeSelectedLetter(index: number) {
        const letter = this.selectedLetters[index];
        if (letter) {
          const nullIndex = this.shuffledLetters.indexOf(null);
          if (nullIndex !== -1) {
            this.shuffledLetters[nullIndex] = letter;
          }
          
          this.selectedLetters[index] = null;
        }
      }
    
      checkAnswer() {
        const currentLevel = this.levels[this.currentLevelIndex];
        const playerAnswer = this.selectedLetters.join('');
    
        if (playerAnswer === currentLevel.solution) {
          Swal.fire({
            icon: 'success',
            title: 'Well Done!',
            text: 'Your answer is correct!',
          }).then(() => {
            this.showNextLevel();
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Try Again!',
            text: 'Your answer is incorrect. Please try again!',
          });
        }
      }
    
      showNextLevel() {
        // Mark the level as completed, move to next level, or finish the exercise
        this.currentLevelIndex++;
        if (this.currentLevelIndex >= this.levels.length) {
          // Exercise completed
          // Emit to notify parent that this exercise is complete
          this.nextExercise.emit();
        } else {
          this.initializeLevel();
        }
      }
    
    
      shuffleArray(array: any[]): any[] {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
    
      generateExtraLetters(solutionLetters: string[]): string[] {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const extraLetters: string[] = [];
        
        while (extraLetters.length < solutionLetters.length) {
          const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
          if (!solutionLetters.includes(randomLetter) && !extraLetters.includes(randomLetter)) {
            extraLetters.push(randomLetter);
          }
        }
        
        return extraLetters;
      }

      // SHOW ANSWER
              showAnswerConfirmation(): void {
                Swal.fire({
                  title: 'Show Answer?',
                  text: 'Are you sure you want to see the answer? This might affect your learning experience.',
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonText: 'Yes, show me',
                  cancelButtonText: 'No, let me try more',
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33'
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.revealAnswer();
                  }
                });
              }
            
              private revealAnswer(): void {
                const currentLevel = this.levels[this.currentLevelIndex];
                
                // Clear current selection
                this.selectedLetters = new Array(currentLevel.solution.length).fill(null);
                this.shuffledLetters = this.shuffleArray([...currentLevel.solution.split('')]);
                
                // Show the answer with a delay for each letter
                currentLevel.solution.split('').forEach((letter, index) => {
                  setTimeout(() => {
                    this.selectedLetters[index] = letter;
                    
                    // Remove the letter from shuffled letters
                    const letterIndex = this.shuffledLetters.indexOf(letter);
                    if (letterIndex !== -1) {
                      this.shuffledLetters[letterIndex] = null;
                    }
                    
                    // Show completion message after revealing all letters
                    if (index === currentLevel.solution.length - 1) {
                      Swal.fire({
                        title: 'Answer Revealed',
                        text: `The correct answer is: ${currentLevel.solution}`,
                        icon: 'info',
                        confirmButtonText: 'Got it'
                      });
                    }
                  }, index * 300); // 300ms delay between each letter
                });
              }
}

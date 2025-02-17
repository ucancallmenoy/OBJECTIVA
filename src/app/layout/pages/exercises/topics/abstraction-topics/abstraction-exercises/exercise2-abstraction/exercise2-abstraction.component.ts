import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise2-abstraction',
  templateUrl: './exercise2-abstraction.component.html',
  styleUrl: './exercise2-abstraction.component.scss'
})
export class Exercise2AbstractionComponent {
  @Output() nextExercise = new EventEmitter<void>();
  
  hintIndex: number;
      hints: string[];
      constructor(){
        this.hintIndex = 0; // Track how many hints have been shown
        this.hints = [
          "Hint 1: To implement multiple interfaces, use a keyword that allows a class to inherit from multiple sources.",
          "Hint 2: The method to take a photo should match the method signature defined in the Camera interface.",
          "Hint 3: The method to navigate should match the method signature defined in the GPS interface.",
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
        
    definitions = [
      { id: 1, label: '', userInput: '' },
      { id: 2, label: '', userInput: '' },
      { id: 3, label: '', userInput: '' },
    ];
  
    concepts = [
      { id: 1, name: 'implements' },
      { id: 2, name: 'takePhoto' },
      { id: 3, name: 'navigate' },
    ];
  
    validateAnswers() {
      const isAllCorrect = this.definitions.every((definition) => {
        const correctConcept = this.concepts.find(
          (concept) => concept.id === definition.id
        );
        return (
          definition.userInput.trim() &&
          correctConcept &&
          correctConcept.name === definition.userInput.trim()
        );
      });
  
      if (isAllCorrect) {
        Swal.fire({
          icon: 'success',
          title: 'Well Done!',
          text: 'All answers are correct!',
        }).then(() => {
          this.nextExercise.emit();
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Try Again!',
          text: 'Some answers are incorrect. Please check and try again!',
        });
      }
    }

    // SHOW ANSWER
    showAnswerConfirmation(): void {
      Swal.fire({
        title: 'Show Answer?',
        text: 'Are you sure you want to see the answers? This may impact your learning experience.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, show me',
        cancelButtonText: 'No, let me try more',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
      }).then((result) => {
        if (result.isConfirmed) {
          this.revealAnswers();
        }
      });
    }
  
    private revealAnswers(): void {
      // Fill in the answers one by one with animation
      this.concepts.forEach((concept, index) => {
        setTimeout(() => {
          this.definitions[index].userInput = concept.name;
          
          // Show completion message after revealing all answers
          if (index === this.concepts.length - 1) {
            Swal.fire({
              title: 'Answers Revealed',
              html: `
                <p>The correct answers are:</p>
                <div style="text-align: left;">
                <ol>
                  <li><strong>implements</strong> - Keyword to implement interfaces</li>
                  <li><strong>takePhoto</strong> - Method from Camera interface</li>
                  <li><strong>navigate</strong> - Method from GPS interface</li>
                </ol>
                </div>
              `,
              icon: 'info',
              confirmButtonText: 'Got it'
            });
          }
        }, index * 500); // 500ms delay between each answer
      });
    }
}

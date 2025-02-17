import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise10-encapsulation',
  templateUrl: './exercise10-encapsulation.component.html',
  styleUrl: './exercise10-encapsulation.component.scss'
})
export class Exercise10EncapsulationComponent {
  constructor(private router: Router) {
    this.hintIndex = 0; // Track how many hints have been shown
    this.hints = [
      "Hint 1: To make a field private, use the keyword that restricts access to within the same class.",
      "Hint 2: To define a constant value that should not change, use the keyword that signifies a constant.",
      "Hint 3: To ensure the salary does not exceed the maximum limit, use a conditional statement to check the value before setting it.",
    ];
  }
  @Output() nextExercise = new EventEmitter<void>();
  
  hintIndex: number;
    hints: string[];
      
  
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
      { id: 4, label: '', userInput: '' },
      { id: 5, label: '', userInput: '' },
      { id: 6, label: '', userInput: '' },
      { id: 7, label: '', userInput: '' },
      { id: 8, label: '', userInput: '' },
      { id: 9, label: '', userInput: '' },
      
    ];
  
    concepts = [
      { id: 1, name: 'private' },
      { id: 2, name: 'private' },
      { id: 3, name: 'final' },
      { id: 4, name: 'int' },
      { id: 5, name: 'double' },
      { id: 6, name: 'Employee' },
      { id: 7, name: 'emp' },
      { id: 8, name: 'emp' },
      { id: 9, name: 'setSalary' },
    ];
  
    isLastQuestion = true;
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
        if (this.isLastQuestion) {
          Swal.fire({
            icon: 'success',
            title: 'Congratulations!',
            text: 'All answers are correct! You have successfully completed all exercises!',
          }).then(() => {
            this.router.navigate(['/exercises']); // Adjust the route as needed
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Well Done!',
            text: 'All answers are correct!',
          }).then(() => {
            this.nextExercise.emit();
            this.router.navigate(['/exercises']);
          });
        }
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
                        <li><strong>private</strong> - Keyword to make a field private</li>
                        <li><strong>private</strong> - Keyword to make a field private</li>
                        <li><strong>final</strong> - Keyword to define a constant</li>
                        <li><strong>int</strong> - Data type for integer values</li>
                        <li><strong>double</strong> - Data type for decimal values</li>
                        <li><strong>Employee</strong> - Class name</li>
                        <li><strong>emp</strong> - Instance of the Employee class</li>
                        <li><strong>emp</strong> - Instance of the Employee class</li>
                        <li><strong>setSalary</strong> - Method to set the salary</li>
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

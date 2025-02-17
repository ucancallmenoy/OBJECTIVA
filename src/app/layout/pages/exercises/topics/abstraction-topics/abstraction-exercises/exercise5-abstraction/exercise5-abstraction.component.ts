import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-exercise5-abstraction',
  templateUrl: './exercise5-abstraction.component.html',
  styleUrl: './exercise5-abstraction.component.scss'
})
export class Exercise5AbstractionComponent {
  @Output() nextExercise = new EventEmitter<void>();
    
  hintIndex: number;
      hints: string[];
      constructor(){
        this.hintIndex = 0; // Track how many hints have been shown
        this.hints = [
          "Hint 1: To call a method on an object, use the dot notation followed by the method name.",
          "Hint 2: The method being called should match the method signature defined in the Payment class.",
          "Hint 3: Ensure that the method name is consistent across different payment types (CreditCardPayment, PayPalPayment, BankTransferPayment).",
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
        { id: 4, label: '', userInput: '' },
        { id: 5, label: '', userInput: '' },
        { id: 6, label: '', userInput: '' },
        { id: 7, label: '', userInput: '' },
        { id: 8, label: '', userInput: '' },
        { id: 9, label: '', userInput: '' },
        { id: 10, label: '', userInput: '' },
      ];
    
      concepts = [
        { id: 1, name: 'abstract' },
        { id: 2, name: 'Payment' },
        { id: 3, name: 'double' },
        { id: 4, name: 'Payment' },
        { id: 5, name: 'double' },
        { id: 6, name: 'Payment' },
        { id: 7, name: 'double' },
        { id: 8, name: 'processPayment' },
        { id: 9, name: 'processPayment' },
        { id: 10, name: 'processPayment' },
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
                        <li><strong>abstract</strong> - Keyword to define an abstract class</li>
                        <li><strong>Payment</strong> - Class name</li>
                        <li><strong>double</strong> - Data type for amount</li>
                        <li><strong>Payment</strong> - Class name</li>
                        <li><strong>double</strong> - Data type for amount</li>
                        <li><strong>Payment</strong> - Class name</li>
                        <li><strong>double</strong> - Data type for amount</li>
                        <li><strong>processPayment</strong> - Method name</li>
                        <li><strong>processPayment</strong> - Method name</li>
                        <li><strong>processPayment</strong> - Method name</li>
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

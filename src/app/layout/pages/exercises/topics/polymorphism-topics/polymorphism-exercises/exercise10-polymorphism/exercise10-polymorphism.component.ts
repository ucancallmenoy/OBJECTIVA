import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise10-polymorphism',
  templateUrl: './exercise10-polymorphism.component.html',
  styleUrl: './exercise10-polymorphism.component.scss'
})
export class Exercise10PolymorphismComponent {
  constructor(private router: Router) {
    this.hintIndex = 0; // Track how many hints have been shown
    this.hints = [
      "Hint 1: To override a method in a subclass, ensure the method signature matches the one in the base class.",
      "Hint 2: Use the keyword that indicates a method is being overridden in a subclass.",
      "Hint 3: When creating an instance of a subclass, ensure you use the correct class name and call the overridden method using dot notation.",
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
  ];

  concepts = [
    { id: 1, name: '@Override' },
    { id: 2, name: '@Override' },
    { id: 3, name: 'CreditCardPayment' },
    { id: 4, name: 'PayPalPayment' },
    { id: 5, name: 'payment1' },
    { id: 6, name: 'payment2' },
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
                          <li><strong>@Override</strong> - Annotation to indicate a method is overridden</li>
                          <li><strong>@Override</strong> - Annotation to indicate a method is overridden</li>
                          <li><strong>CreditCardPayment</strong> - Class name</li>
                          <li><strong>PayPalPayment</strong> - Class name</li>
                          <li><strong>payment1</strong> - Instance of CreditCardPayment</li>
                          <li><strong>payment2</strong> - Instance of PayPalPayment</li>
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

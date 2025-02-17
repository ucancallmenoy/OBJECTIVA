import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise2-polymorphism',
  templateUrl: './exercise2-polymorphism.component.html',
  styleUrl: './exercise2-polymorphism.component.scss'
})
export class Exercise2PolymorphismComponent {
  @Output() nextExercise = new EventEmitter<void>();

  hintIndex: number;
  hints: string[];
  constructor() {
    this.hintIndex = 0; // Track how many hints have been shown
    this.hints = [
      "Hint 1: To define a method in an interface, use the keyword that declares a method without implementation.",
      "Hint 2: To implement an interface in a class, use the keyword that signifies the class is fulfilling the contract of the interface.",
      "Hint 3: When creating an instance of a class that implements an interface, ensure you use the correct class name and call the method using dot notation.",
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
  ];

  concepts = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 4, name: 'MathOperations' },
    { id: 5, name: 'MathOperations' },
    { id: 6, name: 'multiply' },
    { id: 7, name: 'multiply' },
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
                      <li><strong>a</strong> - Placeholder for concept 1</li>
                      <li><strong>b</strong> - Placeholder for concept 2</li>
                      <li><strong>c</strong> - Placeholder for concept 3</li>
                      <li><strong>MathOperations</strong> - Class implementing multiple interfaces</li>
                      <li><strong>MathOperations</strong> - Class implementing multiple interfaces</li>
                      <li><strong>multiply</strong> - Method from MathOperations class</li>
                      <li><strong>multiply</strong> - Method from MathOperations class</li>
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

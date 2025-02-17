import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-exercise10-abstraction',
  templateUrl: './exercise10-abstraction.component.html',
  styleUrl: './exercise10-abstraction.component.scss'
})
export class Exercise10AbstractionComponent {
  constructor(private router: Router) {
    this.hintIndex = 0; // Track how many hints have been shown
    this.hints = [
      "Hint 1: To define a class that cannot be instantiated and may contain abstract methods, use the keyword that signifies this type of class.",
      "Hint 2: To declare a method without implementation in an abstract class, use the keyword that indicates the method must be overridden in subclasses.",
      "Hint 3: When a class extends an abstract class, it must provide implementations for all abstract methods.",
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
  ];

  concepts = [
    { id: 1, name: 'abstract' },
    { id: 2, name: 'abstract' },
    { id: 3, name: 'Vehicle' },
    { id: 4, name: 'Vehicle' },
    { id: 5, name: 'car' },
    { id: 6, name: 'car' },
    { id: 7, name: 'motorcycle' },
    { id: 8, name: 'motorcycle' },

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
                    <li><strong>abstract</strong> - Keyword to define an abstract class</li>
                    <li><strong>abstract</strong> - Keyword to define an abstract class</li>
                    <li><strong>Vehicle</strong> - Class name</li>
                    <li><strong>Vehicle</strong> - Class name</li>
                    <li><strong>car</strong> - Instance of the Vehicle class</li>
                    <li><strong>car</strong> - Instance of the Vehicle class</li>
                    <li><strong>motorcycle</strong> - Instance of the Vehicle class</li>
                    <li><strong>motorcycle</strong> - Instance of the Vehicle class</li>
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

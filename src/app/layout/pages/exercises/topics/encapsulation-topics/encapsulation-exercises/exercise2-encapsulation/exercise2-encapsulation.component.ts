import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise2-encapsulation',
  templateUrl: './exercise2-encapsulation.component.html',
  styleUrls: ['./exercise2-encapsulation.component.scss']
})
export class Exercise2EncapsulationComponent {
  @Output() nextExercise = new EventEmitter<void>();

  hintIndex: number;
        hints: string[];
        constructor(){
          this.hintIndex = 0; // Track how many hints have been shown
          this.hints = [
            "Hint 1: To make a field private, use the keyword that restricts access to within the same class.",
            "Hint 2: To provide a way to access a private field, use a method that returns the field's value.",
            "Hint 3: To allow modification of a private field, use a method that sets the field's value.",
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
    { id: 1, name: 'private' },
    { id: 2, name: 'private' },
    { id: 3, name: 'public' },
    { id: 4, name: 'public' },
    { id: 5, name: 'public' },
    { id: 6, name: 'public' },
    { id: 7, name: 'Student' },
    { id: 8, name: 'Student' },
    { id: 9, name: 'setName' },
    { id: 10, name: 'setAge' },
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
                    <li><strong>private</strong> - Keyword to make a field private</li>
                    <li><strong>private</strong> - Keyword to make a field private</li>
                    <li><strong>public</strong> - Keyword to make a field public</li>
                    <li><strong>public</strong> - Keyword to make a field public</li>
                    <li><strong>public</strong> - Keyword to make a field public</li>
                    <li><strong>public</strong> - Keyword to make a field public</li>
                    <li><strong>Student</strong> - Class name</li>
                    <li><strong>Student</strong> - Class name</li>
                    <li><strong>setName</strong> - Method to set the name</li>
                    <li><strong>setAge</strong> - Method to set the age</li>
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
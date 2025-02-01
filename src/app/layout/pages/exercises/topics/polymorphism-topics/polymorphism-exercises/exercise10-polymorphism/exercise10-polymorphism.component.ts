import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise10-polymorphism',
  templateUrl: './exercise10-polymorphism.component.html',
  styleUrl: './exercise10-polymorphism.component.scss'
})
export class Exercise10PolymorphismComponent {
  constructor(private router: Router) {}
  @Output() nextExercise = new EventEmitter<void>();
      
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
              this.router.navigate(['/exercises']);
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Try Again!',
              text: 'Some answers are incorrect. Please check and try again!',
            });
          }
        }
}

import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-exercise8-polymorphism',
  templateUrl: './exercise8-polymorphism.component.html',
  styleUrl: './exercise8-polymorphism.component.scss'
})
export class Exercise8PolymorphismComponent {
  @Output() nextExercise = new EventEmitter<void>();
      
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
          { id: 1, name: 'void' },
          { id: 2, name: 'brewCoffee' },
          { id: 3, name: 'brewCoffee' },
          { id: 4, name: 'CoffeeMachine' },
          { id: 5, name: 'brewCoffee' },
          { id: 6, name: 'brewCoffee' },
          { id: 7, name: 'brewCoffee' },
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
}

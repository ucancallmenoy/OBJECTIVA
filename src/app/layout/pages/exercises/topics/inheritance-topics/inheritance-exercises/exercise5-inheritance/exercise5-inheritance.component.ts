import { Component, Output, Input, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise5-inheritance',
  templateUrl: './exercise5-inheritance.component.html',
  styleUrl: './exercise5-inheritance.component.scss'
})
export class Exercise5InheritanceComponent {
  @Output() nextExercise = new EventEmitter<void>();
    
      definitions = [
        { id: 1, label: '', userInput: '' },
        { id: 2, label: '', userInput: '' }
      ];
    
      concepts = [
        { id: 1, name: 'String' },
        { id: 2, name: 'message' }
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

import { Component, Output, Input, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-exercise2-inheritance',
  templateUrl: './exercise2-inheritance.component.html',
  styleUrl: './exercise2-inheritance.component.scss'
})
export class Exercise2InheritanceComponent {
  @Output() nextExercise = new EventEmitter<void>();
  
    definitions = [
      { id: 1, label: '', userInput: '' },
      { id: 2, label: '', userInput: '' },
      { id: 3, label: '', userInput: '' },
      { id: 4, label: '', userInput: '' },
      { id: 5, label: '', userInput: '' },
    ];
  
    concepts = [
      { id: 1, name: 'extends' },
      { id: 2, name: 'Dog' },
      { id: 3, name: 'Dog' },
      { id: 4, name: 'eat' },
      { id: 5, name: 'bark' },
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

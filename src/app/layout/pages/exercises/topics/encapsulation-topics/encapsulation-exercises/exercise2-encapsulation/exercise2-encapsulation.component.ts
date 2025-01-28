import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise2-encapsulation',
  templateUrl: './exercise2-encapsulation.component.html',
  styleUrls: ['./exercise2-encapsulation.component.scss']
})
export class Exercise2EncapsulationComponent {
  @Output() nextExercise = new EventEmitter<void>();

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
}
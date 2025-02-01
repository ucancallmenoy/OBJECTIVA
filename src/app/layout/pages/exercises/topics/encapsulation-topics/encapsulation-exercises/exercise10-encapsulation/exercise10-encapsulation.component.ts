import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise10-encapsulation',
  templateUrl: './exercise10-encapsulation.component.html',
  styleUrl: './exercise10-encapsulation.component.scss'
})
export class Exercise10EncapsulationComponent {
  constructor(private router: Router) {}
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
      
    ];
  
    concepts = [
      { id: 1, name: 'private' },
      { id: 2, name: 'private' },
      { id: 3, name: 'final' },
      { id: 4, name: 'int' },
      { id: 5, name: 'double' },
      { id: 6, name: 'Employee' },
      { id: 7, name: 'emp' },
      { id: 8, name: 'emp' },
      { id: 9, name: 'setSalary' },
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

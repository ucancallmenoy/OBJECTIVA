import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exercise1-inheritance',
  templateUrl: './exercise1-inheritance.component.html',
  styleUrl: './exercise1-inheritance.component.scss'
})
export class Exercise1InheritanceComponent {
  @Input() currentExercise: number = 1;  
  @Output() nextExercise = new EventEmitter<void>(); 

  concepts = [
    { id: 'encapsulation', name: 'Encapsulation' },
    { id: 'polymorphism', name: 'Polymorphism' },
    { id: 'inheritance', name: 'Inheritance' },
    { id: 'abstraction', name: 'Abstraction' },
  ];

  definitions = [
    {
      id: 'encapsulation',
      text: 'Hides internal implementation details and only exposes what is necessary.',
      dropped: '',
    },
    {
      id: 'inheritance',
      text: 'Allows a class to acquire the properties and behaviors of another class.',
      dropped: '',
    },
    {
      id: 'polymorphism',
      text: 'Allows methods to have the same name but behave differently based on the object.',
      dropped: '',
    },
    {
      id: 'abstraction',
      text: 'Defines the essential features of an object without implementing the details.',
      dropped: '',
    },
  ];

  draggedItem: any = null;

  constructor(private router: Router) {}

  onDragStart(item: any) {
    this.draggedItem = item;
  }

  onDrop(definition: any) {
    if (!definition.dropped && this.draggedItem) {
      // Assign the dragged concept name to the definition
      definition.dropped = this.draggedItem.name;
    }
    this.draggedItem = null;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault(); // Required to allow dropping
  }

  validateAnswers() {
    const isAllCorrect = this.definitions.every((definition) => {
      const correctConcept = this.concepts.find(
        (concept) => concept.id === definition.id
      );
      return definition.dropped && correctConcept?.name === definition.dropped;
    });

    if (isAllCorrect) {
      Swal.fire({
        icon: 'success',
        title: 'Well Done!',
        text: 'All answers are correct!',
      }).then(() => {
        // Emit the event to notify the parent to move to the next exercise
        this.nextExercise.emit(); // Notify the parent to move to the next exercise
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Try Again!',
        text: 'Some answers are incorrect. Please check and try again!',
      });
    }
  }


  reset() {
    this.definitions.forEach((def) => (def.dropped = ''));
    this.concepts = [
      { id: 'encapsulation', name: 'Encapsulation' },
      { id: 'inheritance', name: 'Inheritance' },
      { id: 'polymorphism', name: 'Polymorphism' },
      { id: 'abstraction', name: 'Abstraction' },
    ];
    this.draggedItem = null;
  }
}

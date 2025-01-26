import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise3-abstraction',
  templateUrl: './exercise3-abstraction.component.html',
  styleUrl: './exercise3-abstraction.component.scss'
})
export class Exercise3AbstractionComponent {
  @Output() nextExercise = new EventEmitter<void>(); 
     
       concepts = [
         { id: 'single inheritance', name: 'Single Inheritance', dropped: false },
         { id: 'polymorphism', name: 'Polymorphism', dropped: false },
         { id: 'inheritance', name: 'Inheritance', dropped: false },
         { id: 'abstraction', name: 'Abstraction', dropped: false },
       ];
     
       definitions = [
         {
           id: 'single inheritance',
           text: 'Type of inheritance where the class inherits from only one parent class.',
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
     
     
       ngOnInit() {
         // Shuffle concepts when the component is initialized
         this.shuffleChoices();
       }
     
       shuffleChoices() {
         for (let i = this.concepts.length - 1; i > 0; i--) {
           const j = Math.floor(Math.random() * (i + 1));
           [this.concepts[i], this.concepts[j]] = [this.concepts[j], this.concepts[i]];
         }
       }
     
     
       onDragStart(item: any) {
         this.draggedItem = item;
       }
     
       onDrop(definition: any) {
         if (!definition.dropped && this.draggedItem) {
           // Assign the dragged concept name to the definition
           definition.dropped = this.draggedItem.name;
     
           // Mark the concept as dropped
           const concept = this.concepts.find((concept) => concept.id === this.draggedItem.id);
           if (concept) {
             concept.dropped = true;
           }
         }
         this.draggedItem = null;
       }
       
     
       onDragOver(event: DragEvent) {
         event.preventDefault(); // Required to allow dropping
       }
     
       validateAnswers() {
         const isAllCorrect = this.definitions.every((definition) => {
           const correctConcept = this.concepts.find(
             (concept) => concept.id === definition.id && concept.dropped
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
     
     
       // Function to reset the exercise
       reset() {
         // Reset the definitions and concepts
         this.definitions.forEach((def) => (def.dropped = ''));
         this.concepts = [
           { id: 'encapsulation', name: 'Encapsulation', dropped: false },
           { id: 'polymorphism', name: 'Polymorphism', dropped: false },
           { id: 'inheritance', name: 'Inheritance', dropped: false },
           { id: 'abstraction', name: 'Abstraction', dropped: false },
         ];
     
         // Shuffle the concepts again after reset
         this.shuffleChoices();
     
         this.draggedItem = null;
       }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-exercise3-inheritance',
  templateUrl: './exercise3-inheritance.component.html',
  styleUrl: './exercise3-inheritance.component.scss'
})
export class Exercise3InheritanceComponent {

  @Output() nextExercise = new EventEmitter<void>(); 
 
   concepts = [
     { id: 'single', name: 'Single Inheritance', dropped: false },
     { id: 'hierarchical', name: 'Hierarchical Inheritance', dropped: false },
     { id: 'multilevel', name: 'Multilevel Inheritance', dropped: false },
     { id: 'multiple', name: 'Multiple Inheritance', dropped: false },
   ];
 
   definitions = [
     {
       id: 'single',
       text: 'Type of inheritance where the class inherits from only one parent class.',
       dropped: '',
     },
     {
       id: 'hierarchical',
       text: 'Type of inheritance where one class is inherited by multiple subclasses.',
       dropped: '',
     },
     {
       id: 'multilevel',
       text: 'Type of inheritance where a class inherits from another, and the second class is inherited by a third class, forming a chain.',
       dropped: '',
     },
     {
       id: 'multiple',
       text: 'This type of inheritance is not supported in Java to avoid ambiguity and complexity when inheriting methods with the same name but different implementations from multiple classes.',
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
 
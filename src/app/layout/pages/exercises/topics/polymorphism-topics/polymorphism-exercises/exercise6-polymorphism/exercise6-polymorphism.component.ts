import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise6-polymorphism',
  templateUrl: './exercise6-polymorphism.component.html',
  styleUrl: './exercise6-polymorphism.component.scss'
})
export class Exercise6PolymorphismComponent {
  @Output() nextExercise = new EventEmitter<void>(); 
  
    concepts = [
      { id: 'compiletimepolymorphism', name: 'Compile-time Polymorphism', dropped: false },
      { id: 'runtimetimepolymorphism', name: 'Runtime Polymorphism', dropped: false },
      { id: 'constructoroverloading', name: 'Constructor Overloading', dropped: false },
      { id: 'operatoroverloading', name: 'Operator Overloading', dropped: false },
      { id: 'typepromotion', name: 'Type Promotion', dropped: false },
    ];
  
    definitions = [
      {
        id: 'compiletimepolymorphism',
        text: 'Achieved by having multiple methods in the same class with the same name but different parameter lists.',
        dropped: '',
      },
      {
        id: 'runtimetimepolymorphism',
        text: 'Occurs when the method call is resolved at runtime, allowing flexibility to choose the method based on the actual object type.',
        dropped: '',
      },
      {
        id: 'constructoroverloading',
        text: 'Multiple constructors with different parameter lists in the same class, allowing different ways of creating objects',
        dropped: '',
      },
      {
        id: 'operatoroverloading',
        text: 'A mechanism to define multiple operations (like +) for objects of different types (commonly used for strings in Java).',
        dropped: '',
      },
      {
        id: 'typepromotion',
        text: 'Converts smaller data types into larger ones automatically during method calls, allowing different types to be accepted in overloaded methods.',
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
          { id: 'compiletimepolymorphism', name: 'Compile-time Polymorphism', dropped: false },
          { id: 'runtimetimepolymorphism', name: 'Runtime Polymorphism', dropped: false },
          { id: 'constructoroverloading', name: 'Constructor Overloading', dropped: false },
          { id: 'operatoroverloading', name: 'Operator Overloading', dropped: false },
          { id: 'typepromotion', name: 'Type Promotion', dropped: false },
         ];
     
         // Shuffle the concepts again after reset
         this.shuffleChoices();
     
         this.draggedItem = null;
       }
     }
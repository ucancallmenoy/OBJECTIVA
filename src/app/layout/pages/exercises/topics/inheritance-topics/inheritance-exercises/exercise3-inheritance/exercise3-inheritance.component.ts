import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-exercise3-inheritance',
  templateUrl: './exercise3-inheritance.component.html',
  styleUrl: './exercise3-inheritance.component.scss'
})
export class Exercise3InheritanceComponent {

  @Output() nextExercise = new EventEmitter<void>(); 

  hintIndex: number;
  hints: string[];
  constructor(){
    this.hintIndex = 0; // Track how many hints have been shown
    this.hints = [
    "Hint 1: Single inheritance means a class has only one parent, while hierarchical inheritance allows one parent to have multiple child classes.",
    "Hint 2: Multilevel inheritance forms a chain where a class inherits from another, which is then inherited by a third class.",
    "Hint 3: Java does not support multiple inheritance to prevent conflicts when a class inherits from multiple parents with the same method names.",
  ];
  }
 
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

   getHint(): void {
    if (this.hintIndex < this.hints.length) {
      Swal.fire({
        title: "Hint",
        text: this.hints[this.hintIndex],
        icon: "info",
        confirmButtonText: "OK",
      });
      this.hintIndex++;
    } else {
      Swal.fire({
        title: "No More Hints",
        text: "You've used all your hints!",
        icon: "warning",
        confirmButtonText: "Got it",
      });
    }
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
      { id: 'single', name: 'Single Inheritance', dropped: false },
      { id: 'hierarchical', name: 'Hierarchical Inheritance', dropped: false },
      { id: 'multilevel', name: 'Multilevel Inheritance', dropped: false },
      { id: 'multiple', name: 'Multiple Inheritance', dropped: false },
     ];
 
     // Shuffle the concepts again after reset
     this.shuffleChoices();
 
     this.draggedItem = null;
   }

   // SHOW ANSWER
     showAnswerConfirmation(): void {
       Swal.fire({
         title: 'Show Answer?',
         text: 'Are you sure you want to see the correct matches? This may impact your learning experience.',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonText: 'Yes, show me',
         cancelButtonText: 'No, let me try more',
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33'
       }).then((result) => {
         if (result.isConfirmed) {
           this.revealAnswers();
         }
       });
     }
   
     private revealAnswers(): void {
       // First, reset the exercise
       this.reset();
   
       // Then reveal answers one by one with animation
       this.definitions.forEach((definition, index) => {
         setTimeout(() => {
           // Find the matching concept
           const matchingConcept = this.concepts.find(concept => concept.id === definition.id);
           
           if (matchingConcept) {
             // Update the definition and concept states
             definition.dropped = matchingConcept.name;
             matchingConcept.dropped = true;
           }
   
           // Show completion message after revealing all answers
           if (index === this.definitions.length - 1) {
             Swal.fire({
               title: 'Answers Revealed',
               html: `
                 <p>The correct matches are:</p>
                 <div style="text-align: left;">
                 <ul>
                  <li><strong>Single Inheritance</strong>: Type of inheritance where the class inherits from only one parent class.</li>
                  <li><strong>Hierarchical Inheritance</strong>: Type of inheritance where one class is inherited by multiple subclasses.</li>
                  <li><strong>Multilevel Inheritance</strong>: Type of inheritance where a class inherits from another, and the second class is inherited by a third class, forming a chain.</li>
                  <li><strong>Multiple Inheritance</strong>: This type of inheritance is not supported in Java to avoid ambiguity and complexity when inheriting methods with the same name but different implementations from multiple classes.</li>
                </ul>
                </div>
                 <p>Take time to understand why each concept matches its definition!</p>
               `,
               icon: 'info',
               confirmButtonText: 'Got it'
             });
           }
         }, index * 800); // 800ms delay between each answer
       });
     }
 }
 
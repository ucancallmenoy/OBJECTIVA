import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise3-encapsulation',
  templateUrl: './exercise3-encapsulation.component.html',
  styleUrl: './exercise3-encapsulation.component.scss'
})
export class Exercise3EncapsulationComponent {
  @Output() nextExercise = new EventEmitter<void>();
  
  hintIndex: number;
  hints: string[];
  constructor(){
    this.hintIndex = 0; // Track how many hints have been shown
    this.hints = [
    'Hint 1: Access modifiers like default allow access within the same package, private restricts access to within the class only, protected permits access within the same package or by subclasses in other packages, and public allows access from any class in any package.',
    "Hint 2: In Java, default access limits visibility to the same package, private keeps members accessible only within the class, protected extends access to subclasses even in different packages, and public makes members accessible everywhere.",
    "Hint 3: Default access works within the same package, private hides members inside the class, protected grants access to subclasses across packages, and public exposes members to all classes universally.",
  ];
  }
   
     concepts = [
       { id: 'default', name: 'Default Access Modifier', dropped: false },
       { id: 'private', name: 'Private Access Modifier', dropped: false },
       { id: 'protected', name: 'Protected Access Modifier', dropped: false },
       { id: 'public', name: 'Public Access Modifier', dropped: false },
     ];
   
     definitions = [
       {
         id: 'default',
         text: 'A modifier that allows access to members within the same package but restricts access from other packages.',
         dropped: '',
       },
       {
         id: 'private',
         text: 'A modifier that restricts access to members within the class only.',
         dropped: '',
       },
       {
         id: 'protected',
         text: 'A modifier that allows access within the same package or by subclasses in different packages.',
         dropped: '',
       },
       {
         id: 'public',
         text: 'A modifier that allows access from any class in any package.',
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
        { id: 'default', name: 'Default Access Modifier', dropped: false },
        { id: 'private', name: 'Private Access Modifier', dropped: false },
        { id: 'protected', name: 'Protected Access Modifier', dropped: false },
        { id: 'public', name: 'Public Access Modifier', dropped: false },
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
                    <li><strong>Default Access Modifier</strong>: A modifier that allows access to members within the same package but restricts access from other packages.</li>
                    <li><strong>Private Access Modifier</strong>: A modifier that restricts access to members within the class only.</li>
                    <li><strong>Protected Access Modifier</strong>: A modifier that allows access within the same package or by subclasses in different packages.</li>
                    <li><strong>Public Access Modifier</strong>: A modifier that allows access from any class in any package.</li>
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

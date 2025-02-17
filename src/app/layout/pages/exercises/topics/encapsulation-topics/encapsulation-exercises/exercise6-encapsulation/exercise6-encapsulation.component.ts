import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise6-encapsulation',
  templateUrl: './exercise6-encapsulation.component.html',
  styleUrl: './exercise6-encapsulation.component.scss'
})
export class Exercise6EncapsulationComponent {
  @Output() nextExercise = new EventEmitter<void>(); 

  hintIndex: number;
  hints: string[];
  constructor(){
    this.hintIndex = 0; // Track how many hints have been shown
    this.hints = [
    "Hint 1: Encapsulation enhances security by restricting unauthorized access to an object's state, provides flexibility to change internal logic without affecting external code, improves maintainability by keeping data and behavior together, and promotes reusability by allowing classes to be reused without external interference.",
    "Hint 2: By restricting access to internal data for security, allowing flexible changes without impacting other code, simplifying maintenance through centralized data and behavior, and supporting class reusability, encapsulation strengthens software design.",
    "Hint 3: Encapsulation ensures security by controlling access to data, offers flexibility to modify code internally, boosts maintainability by organizing code effectively, and encourages reusability without external dependencies.",
  ];
  }
     
       concepts = [
         { id: 'security', name: 'Security', dropped: false },
         { id: 'flexibility', name: 'Flexibility', dropped: false },
         { id: 'maintainability', name: 'Maintainability', dropped: false },
         { id: 'reusability', name: 'Reusability', dropped: false },
       ];
     
       definitions = [
         {
           id: 'security',
           text: "Restricts unauthorized access to an object's state.",
           dropped: '',
         },
         {
           id: 'flexibility',
           text: 'The ability to change internal logic without affecting external code.',
           dropped: '',
         },
         {
           id: 'maintainability',
           text: 'Simplifies debugging and updates by keeping data and behavior in one place.',
           dropped: '',
         },
         {
           id: 'reusability',
           text: 'Classes can be reused without worrying about external interference.',
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
          { id: 'security', name: 'Security', dropped: false },
          { id: 'flexibility', name: 'Flexibility', dropped: false },
          { id: 'maintainability', name: 'Maintainability', dropped: false },
          { id: 'reusability', name: 'Reusability', dropped: false },
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
                            <li><strong>Security</strong>: Restricts unauthorized access to an object's state.</li>
                            <li><strong>Flexibility</strong>: The ability to change internal logic without affecting external code.</li>
                            <li><strong>Maintainability</strong>: Simplifies debugging and updates by keeping data and behavior in one place.</li>
                            <li><strong>Reusability</strong>: Classes can be reused without worrying about external interference.</li>
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

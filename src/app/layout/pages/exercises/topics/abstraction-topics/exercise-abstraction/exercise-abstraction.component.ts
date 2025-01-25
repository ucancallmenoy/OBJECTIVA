import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

// 4 pics 1 word interface
interface GameLevel {
  images: string[];
  solution: string;
  hints: number;
}

@Component({
  selector: 'app-exercise-abstraction',
  templateUrl: './exercise-abstraction.component.html',
  styleUrl: './exercise-abstraction.component.scss'
})
export class ExerciseAbstractionComponent implements OnInit{
  constructor(private router: Router) {}

  // Track the visible sections
  visibleSections: number = 0;
  totalSections: number = 10; // Update this based on the total number of sections
  progress: number = 0;

  ngOnInit() {
    this.updateProgress(); // Update progress
    this.initializeLevel(); // Initialize the first level
    this.shuffleChoices(); // Shuffle the concepts
  }

  // Method to show the next section
  showNextSection(sectionId: string) {
    this.visibleSections++;
    this.updateProgress(); // Update progress
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  updateProgress() {
    this.progress = (this.visibleSections / this.totalSections) * 100;
  }

  closeLesson() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to close the lesson? All your progress will be lost!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, close it!',
      cancelButtonText: 'No, keep it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/exercises']);
      }
    });
  }

  // METHOD FOR 4 PICS 1 WORD
  // 4 pics 1 word levels
  levels: GameLevel[] = [
    {
      images: [
        'assets/abstrac.png', 
        'assets/abstrac.png', 
        'assets/abstrac.png', 
        'assets/abstrac.png'
      ],
      solution: 'PATRICK',
      hints: 3
    },
    {
      images: [
        'assets/abstrac2.png', 
        'assets/abstrac2.png', 
        'assets/abstrac2.png', 
        'assets/abstrac2.png'
      ],
      solution: 'MASK',
      hints: 3
    },
    {
      images: [
        'assets/abstrac3.png', 
        'assets/abstrac3.png', 
        'assets/abstrac3.png', 
        'assets/abstrac3.png'
      ],
      solution: 'HIDE',
      hints: 3
    }
  ];

  currentLevelIndex = 0;
  selectedLetters: (string | null)[] = [];
  shuffledLetters: (string | null)[] = [];


  initializeLevel() {
    const currentLevel = this.levels[this.currentLevelIndex];
    this.selectedLetters = new Array(currentLevel.solution.length).fill(null);
    
    const solutionLetters = currentLevel.solution.split('');
    const extraLetters = this.generateExtraLetters(solutionLetters);
    this.shuffledLetters = this.shuffleArray([...solutionLetters, ...extraLetters]);
  }

  selectLetter(letter: string | null) {
    if (letter === null) return;

    const emptyIndex = this.selectedLetters.findIndex(l => l === null);
    if (emptyIndex !== -1) {
      this.selectedLetters[emptyIndex] = letter;
      
      const letterIndex = this.shuffledLetters.indexOf(letter);
      if (letterIndex !== -1) {
        this.shuffledLetters[letterIndex] = null;
      }
    }
  }

  removeSelectedLetter(index: number) {
    const letter = this.selectedLetters[index];
    if (letter) {
      const nullIndex = this.shuffledLetters.indexOf(null);
      if (nullIndex !== -1) {
        this.shuffledLetters[nullIndex] = letter;
      }
      
      this.selectedLetters[index] = null;
    }
  }

  checkAnswer(nextSection: string) {
    const currentLevel = this.levels[this.currentLevelIndex];
    const playerAnswer = this.selectedLetters.join('');
    
    if (playerAnswer === currentLevel.solution) {
      Swal.fire({
        icon: 'success',
        title: 'Well Done!',
        text: 'Your answer is correct!',
      }).then(() => {
        this.showNextSection(nextSection);
        this.currentLevelIndex++;
        this.initializeLevel();
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Try Again!',
        text: 'Your answer is incorrect. Please try again!',
      });
    }
  }

  // Not yet polished (no hints yet)
  getHint() {
    const currentLevel = this.levels[this.currentLevelIndex];
    if (currentLevel.hints > 0) {
      currentLevel.hints--;
      alert(`Hints remaining: ${currentLevel.hints}`);
    } else {
      alert('No hints left!');
    }
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  generateExtraLetters(solutionLetters: string[]): string[] {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const extraLetters: string[] = [];
    
    while (extraLetters.length < solutionLetters.length) {
      const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
      if (!solutionLetters.includes(randomLetter) && !extraLetters.includes(randomLetter)) {
        extraLetters.push(randomLetter);
      }
    }
    
    return extraLetters;
  }

  // METHOD FOR DRAG AND DROP
  concepts = [
    { id: 'encapsulation', name: 'Encapsulation', dropped: false },
    { id: 'polymorphism', name: 'Polymorphism', dropped: false },
    { id: 'inheritance', name: 'Inheritance', dropped: false },
    { id: 'abstraction', name: 'Abstraction', dropped: false },
  ];

  definitions = [
    {
      id: 'encapsulation',
      text: 'A class in OOP can hide its implementation details. ___ defines the interface for interacting with an object.',
      dropped: '',
    },
    {
      id: 'inheritance',
      text: '___ allows a class to inherit properties and methods from another class.',
      dropped: '',
    },
    {
      id: 'polymorphism',
      text: 'The ability to use the same method in different ways is called ___.',
      dropped: '',
    },
    {
      id: 'abstraction',
      text: '___ hides complexity and shows only essential features of an object.',
      dropped: '',
    },
  ];

  draggedItem: any = null;


  // Fisher-Yates Shuffle Algorithm to shuffle concepts
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
      const concept = this.concepts.find(concept => concept.id === this.draggedItem.id);
      if (concept) {
        concept.dropped = true;
      }
    }
    this.draggedItem = null;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault(); // Required to allow dropping
  }

  validateAnswers(nextSection: string) {
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
        this.showNextSection(nextSection);
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

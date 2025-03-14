import { Component } from '@angular/core';
import { LessonProgressService } from '../../../../../../../services/lesson-progress.service';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction8-content',
  templateUrl: './introduction8-content.component.html',
  styleUrl: './introduction8-content.component.scss'
})
export class Introduction8ContentComponent {
  constructor(private progressService: LessonProgressService, private router: Router) {}
// Track the visible sections
visibleSections: number = 1;

// PROGRESS TRACKER -- START
  
    // Total number of sections
    totalSections: number = 10;
  
    // Progress tracking
    progressPercentage: number = 0;
    isSticky: boolean = false;
  
    // Lesson identifier
    private readonly lessonId: string = 'intro-lesson-8';
    // User progress data from backend
    private userProgress: any = {};
  
    ngOnInit() {
      // Load saved progress when component initializes
      this.loadSavedProgress();
      this.updateProgressPercentage();
    }
  
    // Track scroll position for sticky progress bar
    @HostListener('window:scroll', [])
    onWindowScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.isSticky = scrollPosition > 50;
    }
  
    // Load saved progress from backend
    private loadSavedProgress() {
      console.log('Loading saved progress from backend...');
      this.progressService.getProgress().subscribe({
        next: (response) => {
          console.log('Progress response from backend:', response);
          if (response && response.success && response.data) {
            this.userProgress = response.data;
  
            // Check if this lesson has data in the response
            if (this.userProgress[this.lessonId]) {
              const lessonProgress = this.userProgress[this.lessonId];
              console.log('Found progress for this lesson:', lessonProgress);
  
              // If last_section is available, use it to restore progress
              if (lessonProgress.last_section) {
                this.visibleSections = lessonProgress.last_section;
                console.log('Restored section:', this.visibleSections);
  
                // Show resume prompt if they have previously started but not completed
                if (this.visibleSections > 1 && this.visibleSections < this.totalSections) {
                  this.showResumePrompt();
                }
              }
            } else {
              console.log('No progress found for this specific lesson');
            }
            this.updateProgressPercentage();
          } else {
            console.log('No valid progress data in response');
          }
        },
        error: (error) => {
          console.error('Error loading progress:', error);
        }
      });
    }
  
    // Show prompt to resume from last section
    private showResumePrompt() {
      Swal.fire({
        title: 'Resume Lesson?',
        text: `You were on section ${this.visibleSections} of ${this.totalSections}. Would you like to resume from where you left off?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, resume',
        cancelButtonText: 'Start over'
      }).then((result) => {
        if (!result.isConfirmed) {
          // If user chooses to start over
          this.visibleSections = 1;
          this.updateProgressPercentage();
          // Save the reset progress to backend
          console.log('User chose to start over, resetting progress');
          this.progressService.updateProgress(this.lessonId, false, 1).subscribe({
            next: (response) => console.log('Progress reset successfully:', response),
            error: (error) => console.error('Error resetting progress:', error)
          });
        } else {
          // If resuming, scroll to the last visible section
          console.log('User chose to resume from section', this.visibleSections);
          setTimeout(() => {
            const sectionId = `s${this.visibleSections - 1}`;
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }
      });
    }
  
    // Method to update progress percentage
    updateProgressPercentage() {
      this.progressPercentage = Math.floor(((this.visibleSections - 1) / this.totalSections) * 100);
    }
  
    // Method to go back
    goBack() {
      // Show confirmation dialog
      Swal.fire({
        title: 'Leave Lesson?',
        text: 'Your progress in this session will be saved, but you will exit the lesson.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, exit',
        cancelButtonText: 'Stay'
      }).then((result) => {
        if (result.isConfirmed) {
          // Save progress before navigating away
          this.saveProgress();
          // Navigate back to the topics page
          window.location.href = '/lessons/topics/introduction';
        }
      });
    }
  
    // Method to save progress to backend
    private saveProgress() {
      // Calculate if the lesson is completed
      const isCompleted = this.visibleSections === this.totalSections;
  
      console.log('Saving progress to backend:', {
        lessonId: this.lessonId,
        completed: isCompleted,
        lastSection: this.visibleSections
      });
  
      this.progressService.updateProgress(
        this.lessonId,
        isCompleted,
        this.visibleSections
      ).subscribe({
        next: (response) => console.log('Progress saved successfully:', response),
        error: (error) => console.error('Error saving progress:', error)
      });
    }
  
    // Save progress when user leaves the page
    @HostListener('window:beforeunload', ['$event'])
    unloadHandler(event: Event) {
      if (this.visibleSections > 1) {
        console.log('Page unloading, saving progress...');
        this.progressService.saveProgressOnUnload(
          this.lessonId,
          this.visibleSections === this.totalSections,
          this.visibleSections
        );
      }
    }
  
    // Method to show the next section
    showNextSection(sectionId: string) {
      this.visibleSections++;
      console.log('Moving to section', this.visibleSections);
  
      this.updateProgressPercentage(); // Update progress percentage
      this.saveProgress(); // Save progress to backend
  
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Delay to ensure DOM updates
    }
  
    // Method to show the completion popup
    showCompletionPopup() {
      // First, clear the last_section
      this.progressService.updateProgress(this.lessonId, true, null as unknown as undefined).subscribe({
        next: (response) => {
          console.log('Last section cleared:', response);
  
          // Then mark as completed
          this.progressService.updateProgress(this.lessonId, true).subscribe({
            next: (response) => {
              console.log('Lesson marked as completed:', response);
  
              Swal.fire({
                title: '☕ Congratulations! ☕',
                text: 'You have successfully completed this lesson!',
                icon: 'success',
                confirmButtonText: 'Back to Lessons',
                customClass: {
                  popup: 'swal-celebration'
                },
                didOpen: () => {
                  this.triggerConfetti();
                }
              }).then(() => {
                window.location.href = '/lessons/topics/introduction'; // CHANGE THIS URL
              });
            },
            error: (error) => console.error('Error marking lesson as completed:', error)
          });
        },
        error: (error) => console.error('Error clearing last section:', error)
      });
    }
  
    // PROGRESS TRACKER -- END

triggerConfetti() {
  const myConfetti = confetti.create(undefined, { resize: true });

  myConfetti({
    particleCount: 100,
    spread: 100,
    startVelocity: 30,
    gravity: 0.5,
    decay: 0.9,
    shapes: ['circle'], // Default shape
    scalar: 1.2,
    ticks: 50,
    origin: { y: 0.6 },
    angle: 90,
    drift: 0,
    colors: ['#8B4513', '#D2691E', '#A0522D'], // Coffee colors
    image: {
      src: 'assets/coffee-bean.png', // Replace with your coffee bean image path
      width: 100, // Adjust size
      height: 100
    }
  });
}
// Questions for "Check Your Understanding"
   showQuestions: boolean = false;
   questions = [
    {
      text: 'In the Car and Driver relationship example, how does the Driver interact with the Car?',
      options: [
        'The Driver starts the car.',
        'The Driver accelerates the car.',
        'The Car drives the Driver.',
        'The Driver stops the car.'
      ],
      correctAnswer: 'The Driver starts the car.'
    },
    {
      text: 'In the Car and Engine example, how does the Car object interact with the Engine object?',
      options: [
        'The Car accelerates the Engine.',
        'The Car calls the start method of the Engine.',
        'The Engine calls the start method of the Car.',
        'The Engine stops the Car.'
      ],
      correctAnswer: 'The Car calls the start method of the Engine.'
    },
    {
      text: 'In the BankAccount and Person example, what happens when the Person deposits money?',
      options: [
        'The BankAccount withdraws money.',
        'The BankAccount balance increases by the deposit amount.',
        'The Person balance increases by the deposit amount.',
        'The Person gets a new account.'
      ],
      correctAnswer: 'The BankAccount balance increases by the deposit amount.'
    }
  ];
  
   userAnswers: string[] = [];
 
   // Method to handle answer selection
   selectAnswer(questionIndex: number, answer: string) {
     this.userAnswers[questionIndex] = answer;
   }
 
   // Method to submit answers and check if they are correct
   submitAnswers() {
     const allCorrect = this.questions.every((question, index) => question.correctAnswer === this.userAnswers[index]);
     if (allCorrect) {
       this.showNextSection('s9');
     } else {
       Swal.fire({
         title: 'Incorrect Answers',
         text: 'Please answer all questions correctly before completing the lesson.',
         icon: 'error',
         confirmButtonText: 'Try Again'
       });
     }
   }
 }
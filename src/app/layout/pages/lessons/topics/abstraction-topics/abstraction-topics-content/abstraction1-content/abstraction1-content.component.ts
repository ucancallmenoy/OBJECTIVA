import { Component } from '@angular/core';
import { LessonProgressService } from '../../../../../../../services/lesson-progress.service';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abstraction1-content',
  templateUrl: './abstraction1-content.component.html',
  styleUrl: './abstraction1-content.component.scss'
})
export class Abstraction1ContentComponent {
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
  private readonly lessonId: string = 'abstraction-lesson-1';
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

  // Load saved progress from local storage and service
  private loadSavedProgress() {
    // First check local storage for temporary progress
    const savedProgress = localStorage.getItem(`${this.lessonId}-progress`);
    
    if (savedProgress) {
      const progressData = JSON.parse(savedProgress);
      this.visibleSections = progressData.visibleSections;
      
      // Show resume prompt if they have previously started but not completed
      if (this.visibleSections > 1 && this.visibleSections < this.totalSections) {
        this.showResumePrompt();
      }
    } else {
      // If no local storage progress, check with backend
      this.progressService.getProgress().subscribe({
        next: (response) => {
          if (response && response.success && response.data) {
            this.userProgress = response.data;
            
            // Check if this lesson has a last_section property in local storage
            // (we'll use this since we need to extend the backend to store section info)
            const lastSectionData = localStorage.getItem(`${this.lessonId}-lastSection`);
            
            if (lastSectionData) {
              const sectionInfo = JSON.parse(lastSectionData);
              this.visibleSections = sectionInfo.lastSection || 1;
              
              // Show resume prompt if they have previously started but not completed
              if (this.visibleSections > 1 && this.visibleSections < this.totalSections) {
                this.showResumePrompt();
              }
            }
          }
        },
        error: (error) => console.error('Error loading progress:', error)
      });
    }
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
        // Clear local storage progress
        localStorage.removeItem(`${this.lessonId}-progress`);
        localStorage.removeItem(`${this.lessonId}-lastSection`);
      } else {
        // If resuming, scroll to the last visible section
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
        this.router.navigate(['/lessons/topics/abstraction']);
      }
    });
  }
  // Method to save progress (both locally and to backend if completed)
  private saveProgress() {
    // Save to local storage for immediate restoration
    localStorage.setItem(`${this.lessonId}-progress`, JSON.stringify({
      visibleSections: this.visibleSections,
      timestamp: new Date().toISOString()
    }));
    
    // Save last section separately for future reference
    localStorage.setItem(`${this.lessonId}-lastSection`, JSON.stringify({
      lastSection: this.visibleSections,
      timestamp: new Date().toISOString()
    }));
    
    // If lesson is completed, update on backend
    if (this.visibleSections === this.totalSections) {
      this.progressService.updateProgress(this.lessonId, true).subscribe({
        next: (response) => console.log('Progress saved successfully'),
        error: (error) => console.error('Error saving progress:', error)
      });
    }
  }

  // Save progress when user leaves the page
  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    if (this.visibleSections > 1 && this.visibleSections < this.totalSections) {
      this.saveProgress();
    }
  }
  
  // PROGRESS TRACKER -- END

  // Method to show the next section
  showNextSection(sectionId: string) {
    this.visibleSections++;

    this.updateProgressPercentage(); // Update progress percentage -- PROGRESS TRACKER
    this.saveProgress(); // Save progress -- PROGRESS TRACKER

    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Delay to ensure DOM updates
  
    if (this.visibleSections === 10) { // Change the number depending on the last number of the button
      this.progressService.updateProgress('abstraction-lesson-1', true).subscribe({
        next: (response) => console.log('Progress updated successfully'),
        error: (error) => console.error('Error updating progress:', error)
      });
    }
  }

  // Method to show the completion popup
  showCompletionPopup() {
    // Clear local storage progress as lesson is complete
    localStorage.removeItem(`${this.lessonId}-progress`);

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
      window.location.href = '/lessons/topics/abstraction'; // Change to the correct route
    });
  }

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
  
}

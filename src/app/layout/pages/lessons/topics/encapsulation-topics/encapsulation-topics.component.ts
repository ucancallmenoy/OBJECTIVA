import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonProgressService } from '../../../../../services/lesson-progress.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-encapsulation-topics',
  templateUrl: './encapsulation-topics.component.html',
  styleUrl: './encapsulation-topics.component.scss'
})
export class EncapsulationTopicsComponent implements OnInit {
  constructor(private router: Router, private progressService: LessonProgressService, private title: Title) {
    this.title.setTitle('Learn Encapsulation | Objectiva');
  } 
  lessonProgress: { [key: string]: any } = {}; 
  showBackgroundContainer: boolean = false;


  ngOnInit(): void {
    
    // Subscribe to the router's URL to track the current path
    this.router.events.subscribe(() => {
      // Check the current URL
      const currentUrl = this.router.url;
      // If the URL is '/lessons/introduction-topics', do not show the background container
      this.showBackgroundContainer = currentUrl === '/lessons/topics/encapsulation';
    });
    this.loadProgress();
  }

  loadProgress() {
    this.progressService.getProgress().subscribe({
      next: (response) => {
        this.lessonProgress = response.data;
      },
      error: (error) => console.error('Error loading progress:', error)
    });
  }

  // New method to calculate progress width for the progress bar
  getProgressWidth(lessonId: string): string {
    if (!this.lessonProgress[lessonId]) {
      return '0%'; // No progress
    }
    
    if (this.lessonProgress[lessonId].completed) {
      return '100%'; // Completed
    }
    
    // If we have last_section information, we could calculate partial progress
    // This assumes there are a known total number of sections per lesson
    // You may need to adjust this logic based on your app's structure
    if (this.lessonProgress[lessonId].last_section) {
      // Example: if we know each lesson has 5 sections
      const totalSections = this.getLessonTotalSections(lessonId);
      const currentSection = this.lessonProgress[lessonId].last_section;
      const percentComplete = (currentSection / totalSections) * 100;
      return `${percentComplete}%`;
    }
    
    return '0%';
  }
  
  // Helper method to get total sections for each lesson
  // You should adjust these numbers based on your actual lesson structure
  getLessonTotalSections(lessonId: string): number {
    const sectionCounts: { [key: string]: number } = {
      'encapsulation-lesson-1': 11,
      'encapsulation-lesson-2': 9,
      'encapsulation-lesson-3': 11,
      'encapsulation-lesson-4': 12,
      'encapsulation-lesson-5': 13
    };
    
    return sectionCounts[lessonId]; // Default to 5 if not specified
  }

  getProgressPercentage(lessonId: string): number {
    if (!this.lessonProgress[lessonId]) {
      return 0;
    }
  
    if (this.lessonProgress[lessonId].completed) {
      return 100;
    }
  
    if (this.lessonProgress[lessonId].last_section) {
      const totalSections = this.getLessonTotalSections(lessonId);
      const currentSection = this.lessonProgress[lessonId].last_section;
      // Subtract 1 from currentSection to start from 0%
      return Math.floor(((currentSection - 1) / totalSections) * 100);
    }
  
    return 0;
  }
  
  getProgressCircle(lessonId: string): string {
    const progress = this.getProgressPercentage(lessonId);
    const circumference = 2 * Math.PI * 15.9155;
    const dashArray = (progress / 100) * circumference;
    return `${dashArray}, ${circumference}`;
  }

  lesson1Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/understanding-encapsulation-overview');
  }
  lesson2Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/access-modifiers-overview');
  }
  lesson3Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/getters-and-setters-overview');
  }
  lesson4Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/java-bean-standard-overview');
  }
  lesson5Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/data-validation-overview');
  }
  lesson6Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/encapsulation-implementation-in-java-overview');
  }
}
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonProgressService } from '../../../../../services/lesson-progress.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-polymorphism-topics',
  templateUrl: './polymorphism-topics.component.html',
  styleUrl: './polymorphism-topics.component.scss'
})
export class PolymorphismTopicsComponent implements OnInit {
  constructor(private router: Router, private progressService: LessonProgressService, private title: Title) {
    this.title.setTitle('Learn Polymorphism | Objectiva');
  } 
  lessonProgress: { [key: string]: any } = {}; 
  showBackgroundContainer: boolean = false;

  ngOnInit(): void {
    
    // Subscribe to the router's URL to track the current path
    this.router.events.subscribe(() => {
      // Check the current URL
      const currentUrl = this.router.url;
      // If the URL is '/lessons/introduction-topics', do not show the background container
      this.showBackgroundContainer = currentUrl === '/lessons/topics/polymorphism';
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
      'polymorphism-lesson-1': 9,
      'polymorphism-lesson-2': 12,
      'polymorphism-lesson-3': 12,
      'polymorphism-lesson-4': 8,
      'polymorphism-lesson-5': 9,
      'polymorphism-lesson-6': 14
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
    this.router.navigateByUrl('/lessons/topics/polymorphism/understanding-polymorphism-overview');
  }
  lesson2Overview() {
    this.router.navigateByUrl('/lessons/topics/polymorphism/compile-time-polymorphism-overview');
  }
  lesson3Overview() {
    this.router.navigateByUrl('/lessons/topics/polymorphism/runtime-polymorphism-overview');
  }
  lesson4Overview() {
    this.router.navigateByUrl('/lessons/topics/polymorphism/advanced-polymorphic-concepts-overview');
  }
  lesson5Overview() {
    this.router.navigateByUrl('/lessons/topics/polymorphism/polymorphism-with-interfaces-overview');
  }
  lesson6Overview() {
    this.router.navigateByUrl('/lessons/topics/polymorphism/polymorphism-implementation-in-java-overview');
  }

}

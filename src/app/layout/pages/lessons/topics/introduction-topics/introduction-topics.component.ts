import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonProgressService } from '../../../../../services/lesson-progress.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-introduction-topics',
  templateUrl: './introduction-topics.component.html',
  styleUrl: './introduction-topics.component.scss'
})
export class IntroductionTopicsComponent implements OnInit {
  constructor(private router: Router, private progressService: LessonProgressService, private title: Title) {
    this.title.setTitle('Learn Introduction to OOP | Objectiva');
  } 
  // Modified to track partial progress
  lessonProgress: { [key: string]: any } = {}; 
  showBackgroundContainer: boolean = false;

  ngOnInit(): void {
    
    // Subscribe to the router's URL to track the current path
    this.router.events.subscribe(() => {
      // Check the current URL
      const currentUrl = this.router.url;
      // If the URL is '/lessons/introduction-topics', do not show the background container
      this.showBackgroundContainer = currentUrl === '/lessons/topics/introduction';
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
      'intro-lesson-1': 10,
      'intro-lesson-2': 7,
      'intro-lesson-3': 17,
      'intro-lesson-4': 9,
      'intro-lesson-5': 16,
      'intro-lesson-6': 17,
      'intro-lesson-7': 10,
      'intro-lesson-8': 10
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

  lesson1Overview(){
    this.router.navigateByUrl('/lessons/topics/introduction/introduction-to-OOP-overview');
  }
  lesson2Overview(){
    this.router.navigateByUrl('/lessons/topics/introduction/understanding-object-and-classes-overview');
  }
  lesson3Overview(){
    this.router.navigateByUrl('/lessons/topics/introduction/introduction-to-java-overview');
  }
  lesson4Overview(){
    this.router.navigateByUrl('/lessons/topics/introduction/Basic-OOP-concepts-in-java-overview');
  }
  lesson5Overview(){
    this.router.navigateByUrl('/lessons/topics/introduction/class-structure-and-access-overview');
  }
  lesson6Overview(){
    this.router.navigateByUrl('/lessons/topics/introduction/basic-object-oriented-design-overview');
  }
  lesson7Overview(){
    this.router.navigateByUrl('/lessons/topics/introduction/java-class-libraries-overview');
  }
  lesson8Overview(){
    this.router.navigateByUrl('/lessons/topics/introduction/object-interactions-overview');
  }
}

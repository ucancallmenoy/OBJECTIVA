import { Component } from '@angular/core';
import { LessonProgressService } from '../../../../../../../services/lesson-progress.service';

@Component({
  selector: 'app-encapsulation3-content',
  templateUrl: './encapsulation3-content.component.html',
  styleUrl: './encapsulation3-content.component.scss'
})
export class Encapsulation3ContentComponent {
  constructor(private progressService: LessonProgressService) {}

  // Track the visible sections
  visibleSections: number = 1;
  
  // Method to show the next section
  showNextSection(sectionId: string) {
    this.visibleSections++;
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Delay to ensure DOM updates
  
    if (this.visibleSections === 9) { // Change the number of depending on the last number of the button
      this.progressService.updateProgress('encapsulation-lesson-3', true).subscribe({
        next: (response) => console.log('Progress updated successfully'),
        error: (error) => console.error('Error updating progress:', error)
      });
    }
  }
}

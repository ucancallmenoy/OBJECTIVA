import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction2-content',
  templateUrl: './introduction2-content.component.html',
  styleUrl: './introduction2-content.component.scss'
})
export class Introduction2ContentComponent {
  visibleSections: number = 1;

  // Method to show the next section
  showNextSection(sectionId: string) {
    this.visibleSections++;
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Delay to ensure DOM updates
  }
  }
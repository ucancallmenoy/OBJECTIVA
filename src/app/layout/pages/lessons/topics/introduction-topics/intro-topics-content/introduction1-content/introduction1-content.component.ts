import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction1-content',
  templateUrl: './introduction1-content.component.html',
  styleUrl: './introduction1-content.component.scss'
})
export class Introduction1ContentComponent {
  visibleSections: number = 1;

  // Method to show the next section
  showNextSection(sectionId: string) {
    this.visibleSections++;
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Delay to ensure DOM updates
  }
  }
  
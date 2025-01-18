import { Component } from '@angular/core';

@Component({
  selector: 'app-inheritance5-content',
  templateUrl: './inheritance5-content.component.html',
  styleUrl: './inheritance5-content.component.scss'
})
export class Inheritance5ContentComponent {

// Track the visible sections
visibleSections: number = 1;

// Method to show the next section
showNextSection(sectionId: string) {
  this.visibleSections++;
  setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, 100); // Delay to ensure DOM updates
}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-inheritance4-content',
  templateUrl: './inheritance4-content.component.html',
  styleUrl: './inheritance4-content.component.scss'
})
export class Inheritance4ContentComponent {

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

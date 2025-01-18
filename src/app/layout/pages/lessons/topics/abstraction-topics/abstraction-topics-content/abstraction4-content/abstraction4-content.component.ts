import { Component } from '@angular/core';

@Component({
  selector: 'app-abstraction4-content',
  templateUrl: './abstraction4-content.component.html',
  styleUrl: './abstraction4-content.component.scss'
})
export class Abstraction4ContentComponent {

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
import { Component } from '@angular/core';

@Component({
  selector: 'app-inheritance2-content',
  templateUrl: './inheritance2-content.component.html',
  styleUrl: './inheritance2-content.component.scss'
})
export class Inheritance2ContentComponent {

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
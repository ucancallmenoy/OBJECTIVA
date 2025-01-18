import { Component } from '@angular/core';

@Component({
  selector: 'app-abstraction3-content',
  templateUrl: './abstraction3-content.component.html',
  styleUrl: './abstraction3-content.component.scss'
})
export class Abstraction3ContentComponent {

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
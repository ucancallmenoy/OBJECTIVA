import { Component } from '@angular/core';

@Component({
  selector: 'app-abstraction2-content',
  templateUrl: './abstraction2-content.component.html',
  styleUrl: './abstraction2-content.component.scss'
})
export class Abstraction2ContentComponent {

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
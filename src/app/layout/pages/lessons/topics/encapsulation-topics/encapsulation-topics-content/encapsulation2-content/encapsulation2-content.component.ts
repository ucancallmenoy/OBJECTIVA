import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulation2-content',
  templateUrl: './encapsulation2-content.component.html',
  styleUrl: './encapsulation2-content.component.scss'
})
export class Encapsulation2ContentComponent {

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

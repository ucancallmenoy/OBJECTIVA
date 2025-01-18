import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulation6-content',
  templateUrl: './encapsulation6-content.component.html',
  styleUrl: './encapsulation6-content.component.scss'
})
export class Encapsulation6ContentComponent {

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

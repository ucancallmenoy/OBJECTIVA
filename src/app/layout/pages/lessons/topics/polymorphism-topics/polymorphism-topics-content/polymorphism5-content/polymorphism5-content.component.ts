import { Component } from '@angular/core';

@Component({
  selector: 'app-polymorphism5-content',
  templateUrl: './polymorphism5-content.component.html',
  styleUrl: './polymorphism5-content.component.scss'
})
export class Polymorphism5ContentComponent {

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

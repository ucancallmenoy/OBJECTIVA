import { Component } from '@angular/core';

@Component({
  selector: 'app-polymorphism3-content',
  templateUrl: './polymorphism3-content.component.html',
  styleUrl: './polymorphism3-content.component.scss'
})
export class Polymorphism3ContentComponent {
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

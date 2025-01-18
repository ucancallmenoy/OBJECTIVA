import { Component } from '@angular/core';

@Component({
  selector: 'app-polymorphism1-content',
  templateUrl: './polymorphism1-content.component.html',
  styleUrl: './polymorphism1-content.component.scss'
})
export class Polymorphism1ContentComponent {
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-polymorphism6-content',
  templateUrl: './polymorphism6-content.component.html',
  styleUrl: './polymorphism6-content.component.scss'
})
export class Polymorphism6ContentComponent {

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

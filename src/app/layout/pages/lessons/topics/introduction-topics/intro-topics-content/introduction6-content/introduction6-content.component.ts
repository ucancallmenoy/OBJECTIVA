import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction6-content',
  templateUrl: './introduction6-content.component.html',
  styleUrl: './introduction6-content.component.scss'
})
export class Introduction6ContentComponent {
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

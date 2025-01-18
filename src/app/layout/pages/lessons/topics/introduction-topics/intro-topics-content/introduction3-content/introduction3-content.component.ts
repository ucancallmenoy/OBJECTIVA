import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction3-content',
  templateUrl: './introduction3-content.component.html',
  styleUrl: './introduction3-content.component.scss'
})
export class Introduction3ContentComponent {

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

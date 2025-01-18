import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction4-content',
  templateUrl: './introduction4-content.component.html',
  styleUrl: './introduction4-content.component.scss'
})
export class Introduction4ContentComponent {
// Track the visible sections
visibleSections: number = 1;

// Method to show the next section
showNextSection(sectionId: string) {
  this.visibleSections++;
  setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, 100); // Delay to ensure DOM updates
}}

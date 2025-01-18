import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inheritance-topics',
  templateUrl: './inheritance-topics.component.html',
  styleUrl: './inheritance-topics.component.scss'
})
export class InheritanceTopicsComponent {

  constructor(private router: Router) {}

  showBackgroundContainer: boolean = false;

  ngOnInit(): void {
    // Subscribe to the router's URL to track the current path
    this.router.events.subscribe(() => {
      // Check the current URL
      const currentUrl = this.router.url;
      // If the URL is '/lessons/introduction-topics', do not show the background container
      this.showBackgroundContainer = currentUrl === '/lessons/topics/inheritance';
    });
  }
  
  lesson1Overview() {
    this.router.navigateByUrl('/lessons/topics/inheritance/understanding-inheritance-overview');
  }
  lesson2Overview() {
    this.router.navigateByUrl('/lessons/topics/inheritance/single-inheritance-overview');
  }
  lesson3Overview() {
    this.router.navigateByUrl('/lessons/topics/inheritance/types-of-inheritance-in-java-overview');
  }
  lesson4Overview() {
    this.router.navigateByUrl('/lessons/topics/inheritance/methods-overriding-overview');
  }
  lesson5Overview() {
    this.router.navigateByUrl('/lessons/topics/inheritance/advanced-inheritance-concepts-overview');
  }
  lesson6Overview() {
    this.router.navigateByUrl('/lessons/topics/inheritance/inheritance-implementation-in-java-overview');
  }
}
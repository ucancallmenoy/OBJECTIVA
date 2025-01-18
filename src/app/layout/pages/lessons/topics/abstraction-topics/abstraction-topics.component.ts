import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-abstraction-topics',
  templateUrl: './abstraction-topics.component.html',
  styleUrl: './abstraction-topics.component.scss'
})
export class AbstractionTopicsComponent {

  constructor(private router: Router) {}

  showBackgroundContainer: boolean = false;

  ngOnInit(): void {
    // Subscribe to the router's URL to track the current path
    this.router.events.subscribe(() => {
      // Check the current URL
      const currentUrl = this.router.url;
      // If the URL is '/lessons/introduction-topics', do not show the background container
      this.showBackgroundContainer = currentUrl === '/lessons/topics/abstraction';
    });
  }

  lesson1Overview() {
    this.router.navigateByUrl('/lessons/topics/abstraction/understanding-abstraction-overview');
  }
  lesson2Overview() {
    this.router.navigateByUrl('/lessons/topics/abstraction/abstract-classes-overview');
  }
  lesson3Overview() {
    this.router.navigateByUrl('/lessons/topics/abstraction/interfaces-overview');
  }
  lesson4Overview() {
    this.router.navigateByUrl('/lessons/topics/abstraction/abstraction-implementation-in-java-overview');
  }
  
}

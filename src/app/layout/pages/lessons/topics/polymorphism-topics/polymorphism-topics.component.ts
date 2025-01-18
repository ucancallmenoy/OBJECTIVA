import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polymorphism-topics',
  templateUrl: './polymorphism-topics.component.html',
  styleUrl: './polymorphism-topics.component.scss'
})
export class PolymorphismTopicsComponent {
  constructor(private router: Router) {}

  showBackgroundContainer: boolean = false;

  ngOnInit(): void {
    // Subscribe to the router's URL to track the current path
    this.router.events.subscribe(() => {
      // Check the current URL
      const currentUrl = this.router.url;
      // If the URL is '/lessons/introduction-topics', do not show the background container
      this.showBackgroundContainer = currentUrl === '/lessons/topics/polymorphism';
    });
  }
  

  lesson1Overview() {
    this.router.navigateByUrl('/lessons/topics/polymorphism/understanding-polymorphism-overview');
  }
  lesson2Overview() {
    this.router.navigateByUrl('/lessons/topics/polymorphism/compile-time-polymorphism-overview');
  }
  lesson3Overview() {
    this.router.navigateByUrl('/lessons/topics/polymorphism/runtime-polymorphism-overview');
  }
  lesson4Overview() {
    this.router.navigateByUrl('/lessons/topics/polymorphism/advanced-polymorphic-concepts-overview');
  }
  lesson5Overview() {
    this.router.navigateByUrl('/lessons/topics/polymorphism/polymorphism-with-interfaces-overview');
  }
  lesson6Overview() {
    this.router.navigateByUrl('/lessons/topics/polymorphism/polymorphism-implementation-in-java-overview');
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-encapsulation-topics',
  templateUrl: './encapsulation-topics.component.html',
  styleUrl: './encapsulation-topics.component.scss'
})
export class EncapsulationTopicsComponent {

  constructor(private router: Router) {}

  showBackgroundContainer: boolean = false;

  ngOnInit(): void {
    // Subscribe to the router's URL to track the current path
    this.router.events.subscribe(() => {
      // Check the current URL
      const currentUrl = this.router.url;
      // If the URL is '/lessons/introduction-topics', do not show the background container
      this.showBackgroundContainer = currentUrl === '/lessons/topics/encapsulation';
    });
  }

  lesson1Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/understanding-encapsulation-overview');
  }
  lesson2Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/access-modifiers-overview');
  }
  lesson3Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/getters-and-setters-overview');
  }
  lesson4Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/java-bean-standard-overview');
  }
  lesson5Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/data-validation-overview');
  }
  lesson6Overview() {
    this.router.navigateByUrl('/lessons/topics/encapsulation/encapsulation-implementation-in-java-overview');
  }
}
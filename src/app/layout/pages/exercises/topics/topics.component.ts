import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss'
})
export class TopicsComponent {
  constructor (private router: Router) {}

  startExercise1(){
    this.router.navigate(['/exercises-topics/exercise1-abstraction']);
  }
  startExercise2(){
    this.router.navigate(['/exercises-topics/exercise1-encapsulation']);
  }
  startExercise3(){
    this.router.navigate(['/exercises-topics/exercise1-inheritance']);
  }
  startExercise4(){
    this.router.navigate(['/exercises-topics/exercise1-polymorphism']);
  }

}

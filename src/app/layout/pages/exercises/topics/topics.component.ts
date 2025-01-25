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
    this.router.navigate(['/exercises-topics/exercise-abstraction']);
  }
  startExercise2(){
    this.router.navigate(['/exercises-topics/exercise-enacapsulation']);
  }
  startExercise3(){
    this.router.navigate(['/exercises-topics/exercise-inheritance']);
  }
  startExercise4(){
    this.router.navigate(['/exercises-topics/exercise-polymorphism']);
  }

}

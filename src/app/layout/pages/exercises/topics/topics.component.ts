import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss'
})
export class TopicsComponent {
  constructor (private router: Router, private title: Title) {
    this.title.setTitle('Exercises | Objectiva');
  }

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

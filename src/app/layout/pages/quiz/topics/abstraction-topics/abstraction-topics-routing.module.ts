import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizAbstractionComponent } from './quiz-abstraction/quiz-abstraction.component';

const routes: Routes = [
  {path: 'quiz-abstraction', component: QuizAbstractionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbstractionTopicsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizEncapsulationComponent } from './quiz-encapsulation/quiz-encapsulation.component';

const routes: Routes = [
  {path: 'quiz-encapsulation', component: QuizEncapsulationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncapsulationTopicsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizPolymorphismComponent } from './quiz-polymorphism/quiz-polymorphism.component';

const routes: Routes = [
  {path: 'quiz-polymorphism', component: QuizPolymorphismComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolymorphismTopicsRoutingModule { }

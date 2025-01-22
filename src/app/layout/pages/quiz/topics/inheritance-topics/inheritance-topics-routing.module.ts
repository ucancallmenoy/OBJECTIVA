import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizInheritanceComponent } from './quiz-inheritance/quiz-inheritance.component';

const routes: Routes = [
  {path: 'quiz-inheritance', component: QuizInheritanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InheritanceTopicsRoutingModule { }

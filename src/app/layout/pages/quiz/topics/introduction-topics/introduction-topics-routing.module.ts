import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizIntroductionJavaComponent } from './quiz-introduction-java/quiz-introduction-java.component';
import { QuizIntroductionOopComponent } from './quiz-introduction-oop/quiz-introduction-oop.component';

const routes: Routes = [
  {path: 'quiz-introduction-oop', component: QuizIntroductionOopComponent},
  {path: 'quiz-introduction-java', component: QuizIntroductionJavaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductionTopicsRoutingModule { }

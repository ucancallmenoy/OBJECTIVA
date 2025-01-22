import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IntroductionTopicsRoutingModule } from './introduction-topics-routing.module';
import { QuizIntroductionOopComponent } from './quiz-introduction-oop/quiz-introduction-oop.component';
import { QuizIntroductionJavaComponent } from './quiz-introduction-java/quiz-introduction-java.component';


@NgModule({
  declarations: [
    QuizIntroductionOopComponent,
    QuizIntroductionJavaComponent
  ],
  imports: [
    CommonModule,
    IntroductionTopicsRoutingModule,
    FormsModule
  ]
})
export class IntroductionTopicsModule { }

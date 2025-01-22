import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AbstractionTopicsRoutingModule } from './abstraction-topics-routing.module';
import { QuizAbstractionComponent } from './quiz-abstraction/quiz-abstraction.component';


@NgModule({
  declarations: [
    QuizAbstractionComponent
  ],
  imports: [
    CommonModule,
    AbstractionTopicsRoutingModule,
    FormsModule
  ]
})
export class AbstractionTopicsModule { }

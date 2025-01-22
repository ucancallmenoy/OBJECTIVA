import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InheritanceTopicsRoutingModule } from './inheritance-topics-routing.module';
import { QuizInheritanceComponent } from './quiz-inheritance/quiz-inheritance.component';


@NgModule({
  declarations: [
    QuizInheritanceComponent
  ],
  imports: [
    CommonModule,
    InheritanceTopicsRoutingModule,
    FormsModule
  ]
})
export class InheritanceTopicsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PolymorphismTopicsRoutingModule } from './polymorphism-topics-routing.module';
import { QuizPolymorphismComponent } from './quiz-polymorphism/quiz-polymorphism.component';


@NgModule({
  declarations: [
    QuizPolymorphismComponent
  ],
  imports: [
    CommonModule,
    PolymorphismTopicsRoutingModule,
    FormsModule
  ]
})
export class PolymorphismTopicsModule { }

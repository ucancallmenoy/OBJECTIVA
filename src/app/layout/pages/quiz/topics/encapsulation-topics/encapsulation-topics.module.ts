import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EncapsulationTopicsRoutingModule } from './encapsulation-topics-routing.module';
import { QuizEncapsulationComponent } from './quiz-encapsulation/quiz-encapsulation.component';


@NgModule({
  declarations: [
    QuizEncapsulationComponent
  ],
  imports: [
    CommonModule,
    EncapsulationTopicsRoutingModule,
    FormsModule
  ]
})
export class EncapsulationTopicsModule { }

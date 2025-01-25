import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncapsulationTopicsRoutingModule } from './encapsulation-topics-routing.module';
import { ExerciseEncapsulationComponent } from './exercise-encapsulation/exercise-encapsulation.component';


@NgModule({
  declarations: [
    ExerciseEncapsulationComponent
  ],
  imports: [
    CommonModule,
    EncapsulationTopicsRoutingModule
  ]
})
export class EncapsulationTopicsModule { }

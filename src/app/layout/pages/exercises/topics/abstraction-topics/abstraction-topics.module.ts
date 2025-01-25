import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbstractionTopicsRoutingModule } from './abstraction-topics-routing.module';
import { ExerciseAbstractionComponent } from './exercise-abstraction/exercise-abstraction.component';


@NgModule({
  declarations: [
    ExerciseAbstractionComponent
  ],
  imports: [
    CommonModule,
    AbstractionTopicsRoutingModule
  ]
})
export class AbstractionTopicsModule { }

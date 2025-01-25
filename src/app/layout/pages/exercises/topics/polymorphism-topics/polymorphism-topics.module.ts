import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolymorphismTopicsRoutingModule } from './polymorphism-topics-routing.module';
import { ExercisePolymorphismComponent } from './exercise-polymorphism/exercise-polymorphism.component';


@NgModule({
  declarations: [
    ExercisePolymorphismComponent
  ],
  imports: [
    CommonModule,
    PolymorphismTopicsRoutingModule
  ]
})
export class PolymorphismTopicsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InheritanceTopicsRoutingModule } from './inheritance-topics-routing.module';
import { ExerciseInheritanceComponent } from './exercise-inheritance/exercise-inheritance.component';


@NgModule({
  declarations: [
    ExerciseInheritanceComponent
  ],
  imports: [
    CommonModule,
    InheritanceTopicsRoutingModule
  ]
})
export class InheritanceTopicsModule { }

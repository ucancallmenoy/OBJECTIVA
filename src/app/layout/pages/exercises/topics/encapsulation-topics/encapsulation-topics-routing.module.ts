import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseAbstractionComponent } from '../abstraction-topics/exercise-abstraction/exercise-abstraction.component';

const routes: Routes = [
  {path: 'exercise-abstraction', component: ExerciseAbstractionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncapsulationTopicsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisePolymorphismComponent } from './exercise-polymorphism/exercise-polymorphism.component';

const routes: Routes = [
  {path: 'exercise-polymorphism', component: ExercisePolymorphismComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolymorphismTopicsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseInheritanceComponent } from './exercise-inheritance/exercise-inheritance.component';

const routes: Routes = [
  {path: 'exercise-inheritance', component: ExerciseInheritanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InheritanceTopicsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InheritanceTopicsComponent } from './inheritance-topics.component';
import { Exercise1InheritanceComponent } from './inheritance-exercises/exercise1-inheritance/exercise1-inheritance.component';
import { Exercise2InheritanceComponent } from './inheritance-exercises/exercise2-inheritance/exercise2-inheritance.component';
import { Exercise3InheritanceComponent } from './inheritance-exercises/exercise3-inheritance/exercise3-inheritance.component';

const routes: Routes = [
  {path: '', component: InheritanceTopicsComponent, children: [
    {path: 'exercise1-inheritance', component: Exercise1InheritanceComponent},
    {path: 'exercise2-inheritance', component: Exercise2InheritanceComponent},
    {path: 'exercise3-inheritance', component: Exercise3InheritanceComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InheritanceTopicsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbstractionTopicsComponent } from './abstraction-topics.component';
import { Exercise1AbstractionComponent } from './abstraction-exercises/exercise1-abstraction/exercise1-abstraction.component';
import { Exercise2AbstractionComponent } from './abstraction-exercises/exercise2-abstraction/exercise2-abstraction.component';
import { Exercise3AbstractionComponent } from './abstraction-exercises/exercise3-abstraction/exercise3-abstraction.component';

const routes: Routes = [
  {path: '', component: AbstractionTopicsComponent, children: [
    {path: 'exercise1-abstraction', component: Exercise1AbstractionComponent},
    {path: 'exercise2-abstraction', component: Exercise2AbstractionComponent},
    {path: 'exercise3-abstraction', component: Exercise3AbstractionComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbstractionTopicsRoutingModule { }

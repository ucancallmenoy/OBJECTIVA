import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolymorphismTopicsComponent } from './polymorphism-topics.component';
import { Exercise1PolymorphismComponent } from './polymorphism-exercises/exercise1-polymorphism/exercise1-polymorphism.component';
import { Exercise2PolymorphismComponent } from './polymorphism-exercises/exercise2-polymorphism/exercise2-polymorphism.component';
import { Exercise3PolymorphismComponent } from './polymorphism-exercises/exercise3-polymorphism/exercise3-polymorphism.component';

const routes: Routes = [
  {path: '', component: PolymorphismTopicsComponent, children: [
    {path: 'exercise1-polymorphism', component: Exercise1PolymorphismComponent},
    {path: 'exercise2-polymorphism', component: Exercise2PolymorphismComponent},
    {path: 'exercise3-polymorphism', component: Exercise3PolymorphismComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolymorphismTopicsRoutingModule { }

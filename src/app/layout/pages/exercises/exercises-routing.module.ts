import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsComponent } from '../lessons/lessons.component';
import { TopicsComponent } from './topics/topics.component';
const routes: Routes = [
  {path: '',redirectTo: 'topics',pathMatch: 'full'},
  {path: '', component: LessonsComponent, children: [
    {path: 'topics', component : TopicsComponent, loadChildren: () => import('./topics/topics.module').then(m => m.TopicsModule)},  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }

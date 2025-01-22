import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { TopicsComponent } from '../lessons/topics/topics.component';

const routes: Routes = [
  {path: '', component: QuizComponent},

  {path: '', component: QuizComponent, children: [
    {path: 'topics', component : TopicsComponent, loadChildren: () => import('./topics/topics.module').then(m => m.TopicsModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }

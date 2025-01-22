import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,  
    children: [
      { path: 'home', component: HomeComponent, loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'lessons', loadChildren: () => import('./pages/lessons/lessons.module').then(m => m.LessonsModule) },
      {path: 'quiz', loadChildren: () => import('./pages/quiz/quiz.module').then(m => m.QuizModule)},
    ]
  },
  { path: '**', redirectTo: 'home' }  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

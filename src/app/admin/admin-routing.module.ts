import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component'; 
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { UsersComponent } from './pages/users/users.component';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {path: 'login-admin', component: LoginAdminComponent},
  {path: '', redirectTo: 'login-admin', pathMatch: 'full'},
  {path: '', component: AdminComponent, canActivate:[AuthGuard], children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'users', component: UsersComponent},
    {path: 'quizzes', component: QuizzesComponent},
    {path: 'exercises', component: ExercisesComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

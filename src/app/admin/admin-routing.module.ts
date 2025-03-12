import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component'; 
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { UsersComponent } from './pages/users/users.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import {PolymorphismComponent} from './pages/quizzes/polymorphism/polymorphism.component';
import {IntroductionJavaComponent} from './pages/quizzes/introduction-java/introduction-java.component';
import {IntroductionOopComponent} from './pages/quizzes/introduction-oop/introduction-oop.component';
import {InheritanceComponent} from './pages/quizzes/inheritance/inheritance.component';
import {EncapsulationComponent} from './pages/quizzes/encapsulation/encapsulation.component';
import {AbstractionComponent} from './pages/quizzes/abstraction/abstraction.component';
import { TotalReportComponent } from './pages/total-report/total-report.component';
import { AdminAuthGuard } from '../guards/admin-auth.guard';

const routes: Routes = [
  {path: 'login-admin', component: LoginAdminComponent},
  {path: '', redirectTo: 'login-admin', pathMatch: 'full'},
  {path: '', component: AdminComponent, canActivate:[AdminAuthGuard], children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'users', component: UsersComponent},
    {path: 'exercises', component: ExercisesComponent},
    {path: 'polymorphism', component: PolymorphismComponent},
    {path: 'introduction-java', component: IntroductionJavaComponent},
    {path: 'introduction-oop', component: IntroductionOopComponent},
    {path: 'inheritance', component: InheritanceComponent},
    {path: 'encapsulation', component: EncapsulationComponent},
    {path: 'abstraction', component: AbstractionComponent},
    {path: 'total-report', component: TotalReportComponent}
  ]},
  {path: '**', redirectTo: 'login-admin'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

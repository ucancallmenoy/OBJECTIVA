import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { QuizzesComponent } from './pages/quizzes/quizzes.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import { UsersComponent } from './pages/users/users.component';



@NgModule({
  declarations: [
    AdminComponent,
    SideNavbarComponent,
    DashboardComponent,
    LoginAdminComponent,
    QuizzesComponent,
    ExercisesComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import { UsersComponent } from './pages/users/users.component';

import { FormsModule } from '@angular/forms';
import { AbstractionComponent } from './pages/quizzes/abstraction/abstraction.component';
import { EncapsulationComponent } from './pages/quizzes/encapsulation/encapsulation.component';
import { InheritanceComponent } from './pages/quizzes/inheritance/inheritance.component';
import { IntroductionOopComponent } from './pages/quizzes/introduction-oop/introduction-oop.component';
import { IntroductionJavaComponent } from './pages/quizzes/introduction-java/introduction-java.component';
import { PolymorphismComponent } from './pages/quizzes/polymorphism/polymorphism.component';
import { TotalReportComponent } from './pages/total-report/total-report.component';

@NgModule({
  declarations: [
    AdminComponent,
    SideNavbarComponent,
    DashboardComponent,
    LoginAdminComponent,
    ExercisesComponent,
    UsersComponent,
    AbstractionComponent,
    EncapsulationComponent,
    InheritanceComponent,
    IntroductionOopComponent,
    IntroductionJavaComponent,
    PolymorphismComponent,
    TotalReportComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LessonsComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }

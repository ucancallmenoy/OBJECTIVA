import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InheritanceTopicsRoutingModule } from './inheritance-topics-routing.module';
import { Exercise1InheritanceComponent } from './inheritance-exercises/exercise1-inheritance/exercise1-inheritance.component';
import { Exercise2InheritanceComponent } from './inheritance-exercises/exercise2-inheritance/exercise2-inheritance.component';
import { Exercise3InheritanceComponent } from './inheritance-exercises/exercise3-inheritance/exercise3-inheritance.component';
import { InheritanceTopicsComponent } from './inheritance-topics.component';


@NgModule({
  declarations: [
    Exercise1InheritanceComponent,
    Exercise2InheritanceComponent,
    Exercise3InheritanceComponent,
    InheritanceTopicsComponent
  ],
  imports: [
    CommonModule,
    InheritanceTopicsRoutingModule,
    FormsModule
  ]
})
export class InheritanceTopicsModule { }

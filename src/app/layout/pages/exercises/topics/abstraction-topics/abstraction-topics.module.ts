import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AbstractionTopicsRoutingModule } from './abstraction-topics-routing.module';
import { Exercise1AbstractionComponent } from './abstraction-exercises/exercise1-abstraction/exercise1-abstraction.component';
import { Exercise2AbstractionComponent } from './abstraction-exercises/exercise2-abstraction/exercise2-abstraction.component';
import { Exercise3AbstractionComponent } from './abstraction-exercises/exercise3-abstraction/exercise3-abstraction.component';
import { AbstractionTopicsComponent } from './abstraction-topics.component';


@NgModule({
  declarations: [
  
        Exercise1AbstractionComponent,
       Exercise2AbstractionComponent,
       Exercise3AbstractionComponent,
       AbstractionTopicsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AbstractionTopicsRoutingModule
  ]
})
export class AbstractionTopicsModule { }

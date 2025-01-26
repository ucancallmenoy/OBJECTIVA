import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EncapsulationTopicsRoutingModule } from './encapsulation-topics-routing.module';
import { EncapsulationTopicsComponent } from './encapsulation-topics.component';
import { Exercise1EncapsulationComponent } from './encapsulation-exercises/exercise1-encapsulation/exercise1-encapsulation.component';
import { Exercise2EncapsulationComponent } from './encapsulation-exercises/exercise2-encapsulation/exercise2-encapsulation.component';
import { Exercise3EncapsulationComponent } from './encapsulation-exercises/exercise3-encapsulation/exercise3-encapsulation.component';
import { Exercise4EncapsulationComponent } from './encapsulation-exercises/exercise4-encapsulation/exercise4-encapsulation.component';
import { Exercise5EncapsulationComponent } from './encapsulation-exercises/exercise5-encapsulation/exercise5-encapsulation.component';


@NgModule({
  declarations: [
    EncapsulationTopicsComponent,
    Exercise1EncapsulationComponent,
    Exercise2EncapsulationComponent,
    Exercise3EncapsulationComponent,
    Exercise4EncapsulationComponent,
    Exercise5EncapsulationComponent
  ],
  imports: [
    CommonModule,
    EncapsulationTopicsRoutingModule,
    FormsModule
  ]
})
export class EncapsulationTopicsModule { }

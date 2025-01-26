import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PolymorphismTopicsRoutingModule } from './polymorphism-topics-routing.module';
import { PolymorphismTopicsComponent } from './polymorphism-topics.component';
import { Exercise1PolymorphismComponent } from './polymorphism-exercises/exercise1-polymorphism/exercise1-polymorphism.component';
import { Exercise2PolymorphismComponent } from './polymorphism-exercises/exercise2-polymorphism/exercise2-polymorphism.component';
import { Exercise3PolymorphismComponent } from './polymorphism-exercises/exercise3-polymorphism/exercise3-polymorphism.component';


@NgModule({
  declarations: [
  
    PolymorphismTopicsComponent,
       Exercise1PolymorphismComponent,
       Exercise2PolymorphismComponent,
       Exercise3PolymorphismComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PolymorphismTopicsRoutingModule
  ]
})
export class PolymorphismTopicsModule { }

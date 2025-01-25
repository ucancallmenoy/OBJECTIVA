import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsComponent } from './topics.component';
import { AbstractionTopicsModule } from './abstraction-topics/abstraction-topics.module';
import { EncapsulationTopicsModule } from './encapsulation-topics/encapsulation-topics.module';
import { InheritanceTopicsModule } from './inheritance-topics/inheritance-topics.module';
import { PolymorphismTopicsModule } from './polymorphism-topics/polymorphism-topics.module';

@NgModule({
  declarations: [
    TopicsComponent
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    AbstractionTopicsModule,
    EncapsulationTopicsModule,
    InheritanceTopicsModule,
    PolymorphismTopicsModule
  ]
})
export class TopicsModule { }

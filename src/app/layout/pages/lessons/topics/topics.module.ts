import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';
import { IntroductionTopicsComponent } from './introduction-topics/introduction-topics.component';
import { AbstractionTopicsComponent } from './abstraction-topics/abstraction-topics.component';
import { EncapsulationTopicsComponent } from './encapsulation-topics/encapsulation-topics.component';
import { InheritanceTopicsComponent } from './inheritance-topics/inheritance-topics.component';
import { PolymorphismTopicsComponent } from './polymorphism-topics/polymorphism-topics.component';


@NgModule({
  declarations: [
    IntroductionTopicsComponent,
    AbstractionTopicsComponent,
    EncapsulationTopicsComponent,
    InheritanceTopicsComponent,
    PolymorphismTopicsComponent
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule
  ]
})
export class TopicsModule { }

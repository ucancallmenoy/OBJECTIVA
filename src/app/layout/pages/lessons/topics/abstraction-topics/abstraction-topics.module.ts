import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbstractionTopicsRoutingModule } from './abstraction-topics-routing.module';
import { Abstraction1OverviewComponent } from './abstraction-topics-overview/abstraction1-overview/abstraction1-overview.component';
import { Abstraction2OverviewComponent } from './abstraction-topics-overview/abstraction2-overview/abstraction2-overview.component';
import { Abstraction3OverviewComponent } from './abstraction-topics-overview/abstraction3-overview/abstraction3-overview.component';
import { Abstraction4OverviewComponent } from './abstraction-topics-overview/abstraction4-overview/abstraction4-overview.component';
import { Abstraction1ContentComponent } from './abstraction-topics-content/abstraction1-content/abstraction1-content.component';
import { Abstraction2ContentComponent } from './abstraction-topics-content/abstraction2-content/abstraction2-content.component';
import { Abstraction3ContentComponent } from './abstraction-topics-content/abstraction3-content/abstraction3-content.component';
import { Abstraction4ContentComponent } from './abstraction-topics-content/abstraction4-content/abstraction4-content.component';


@NgModule({
  declarations: [
    Abstraction1OverviewComponent,
    Abstraction2OverviewComponent,
    Abstraction3OverviewComponent,
    Abstraction4OverviewComponent,
    Abstraction1ContentComponent,
    Abstraction2ContentComponent,
    Abstraction3ContentComponent,
    Abstraction4ContentComponent
  ],
  imports: [
    CommonModule,
    AbstractionTopicsRoutingModule
  ]
})
export class AbstractionTopicsModule { }

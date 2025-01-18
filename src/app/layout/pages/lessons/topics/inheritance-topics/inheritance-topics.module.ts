import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InheritanceTopicsRoutingModule } from './inheritance-topics-routing.module';
import { Inheritance1OverviewComponent } from './inheritance-topics-overview/inheritance1-overview/inheritance1-overview.component';
import { Inheritance2OverviewComponent } from './inheritance-topics-overview/inheritance2-overview/inheritance2-overview.component';
import { Inheritance3OverviewComponent } from './inheritance-topics-overview/inheritance3-overview/inheritance3-overview.component';
import { Inheritance4OverviewComponent } from './inheritance-topics-overview/inheritance4-overview/inheritance4-overview.component';
import { Inheritance5OverviewComponent } from './inheritance-topics-overview/inheritance5-overview/inheritance5-overview.component';
import { Inheritance6OverviewComponent } from './inheritance-topics-overview/inheritance6-overview/inheritance6-overview.component';
import { Inheritance1ContentComponent } from './inheritance-topics-content/inheritance1-content/inheritance1-content.component';
import { Inheritance2ContentComponent } from './inheritance-topics-content/inheritance2-content/inheritance2-content.component';
import { Inheritance3ContentComponent } from './inheritance-topics-content/inheritance3-content/inheritance3-content.component';
import { Inheritance4ContentComponent } from './inheritance-topics-content/inheritance4-content/inheritance4-content.component';
import { Inheritance5ContentComponent } from './inheritance-topics-content/inheritance5-content/inheritance5-content.component';
import { Inheritance6ContentComponent } from './inheritance-topics-content/inheritance6-content/inheritance6-content.component';


@NgModule({
  declarations: [
    Inheritance1OverviewComponent,
    Inheritance2OverviewComponent,
    Inheritance3OverviewComponent,
    Inheritance4OverviewComponent,
    Inheritance5OverviewComponent,
    Inheritance6OverviewComponent,
    Inheritance1ContentComponent,
    Inheritance2ContentComponent,
    Inheritance3ContentComponent,
    Inheritance4ContentComponent,
    Inheritance5ContentComponent,
    Inheritance6ContentComponent
  ],
  imports: [
    CommonModule,
    InheritanceTopicsRoutingModule
  ]
})
export class InheritanceTopicsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolymorphismTopicsRoutingModule } from './polymorphism-topics-routing.module';
import { Polymorphism1ContentComponent } from './polymorphism-topics-content/polymorphism1-content/polymorphism1-content.component';
import { Polymorphism2ContentComponent } from './polymorphism-topics-content/polymorphism2-content/polymorphism2-content.component';
import { Polymorphism3ContentComponent } from './polymorphism-topics-content/polymorphism3-content/polymorphism3-content.component';
import { Polymorphism4ContentComponent } from './polymorphism-topics-content/polymorphism4-content/polymorphism4-content.component';
import { Polymorphism5ContentComponent } from './polymorphism-topics-content/polymorphism5-content/polymorphism5-content.component';
import { Polymorphism6ContentComponent } from './polymorphism-topics-content/polymorphism6-content/polymorphism6-content.component';
import { Polymorphism1OverviewComponent } from './polymorphism-topics-overview/polymorphism1-overview/polymorphism1-overview.component';
import { Polymorphism2OverviewComponent } from './polymorphism-topics-overview/polymorphism2-overview/polymorphism2-overview.component';
import { Polymorphism3OverviewComponent } from './polymorphism-topics-overview/polymorphism3-overview/polymorphism3-overview.component';
import { Polymorphism4OverviewComponent } from './polymorphism-topics-overview/polymorphism4-overview/polymorphism4-overview.component';
import { Polymorphism5OverviewComponent } from './polymorphism-topics-overview/polymorphism5-overview/polymorphism5-overview.component';
import { Polymorphism6OverviewComponent } from './polymorphism-topics-overview/polymorphism6-overview/polymorphism6-overview.component';


@NgModule({
  declarations: [
    Polymorphism1ContentComponent,
    Polymorphism2ContentComponent,
    Polymorphism3ContentComponent,
    Polymorphism4ContentComponent,
    Polymorphism5ContentComponent,
    Polymorphism6ContentComponent,
    Polymorphism1OverviewComponent,
    Polymorphism2OverviewComponent,
    Polymorphism3OverviewComponent,
    Polymorphism4OverviewComponent,
    Polymorphism5OverviewComponent,
    Polymorphism6OverviewComponent
  ],
  imports: [
    CommonModule,
    PolymorphismTopicsRoutingModule
  ]
})
export class PolymorphismTopicsModule { }

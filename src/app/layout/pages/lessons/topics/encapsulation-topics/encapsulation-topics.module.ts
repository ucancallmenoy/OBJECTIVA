import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncapsulationTopicsRoutingModule } from './encapsulation-topics-routing.module';
import { Encapsulation1ContentComponent } from './encapsulation-topics-content/encapsulation1-content/encapsulation1-content.component';
import { Encapsulation2ContentComponent } from './encapsulation-topics-content/encapsulation2-content/encapsulation2-content.component';
import { Encapsulation3ContentComponent } from './encapsulation-topics-content/encapsulation3-content/encapsulation3-content.component';
import { Encapsulation4ContentComponent } from './encapsulation-topics-content/encapsulation4-content/encapsulation4-content.component';
import { Encapsulation5ContentComponent } from './encapsulation-topics-content/encapsulation5-content/encapsulation5-content.component';
import { Encapsulation1OverviewComponent } from './encapsulation-topics-overview/encapsulation1-overview/encapsulation1-overview.component';
import { Encapsulation2OverviewComponent } from './encapsulation-topics-overview/encapsulation2-overview/encapsulation2-overview.component';
import { Encapsulation3OverviewComponent } from './encapsulation-topics-overview/encapsulation3-overview/encapsulation3-overview.component';
import { Encapsulation4OverviewComponent } from './encapsulation-topics-overview/encapsulation4-overview/encapsulation4-overview.component';
import { Encapsulation5OverviewComponent } from './encapsulation-topics-overview/encapsulation5-overview/encapsulation5-overview.component';
import { Encapsulation6OverviewComponent } from './encapsulation-topics-overview/encapsulation6-overview/encapsulation6-overview.component';
import { Encapsulation6ContentComponent } from './encapsulation-topics-content/encapsulation6-content/encapsulation6-content.component';


@NgModule({
  declarations: [
    Encapsulation1ContentComponent,
    Encapsulation2ContentComponent,
    Encapsulation3ContentComponent,
    Encapsulation4ContentComponent,
    Encapsulation5ContentComponent,
    Encapsulation1OverviewComponent,
    Encapsulation2OverviewComponent,
    Encapsulation3OverviewComponent,
    Encapsulation4OverviewComponent,
    Encapsulation5OverviewComponent,
    Encapsulation6OverviewComponent,
    Encapsulation6ContentComponent
  ],
  imports: [
    CommonModule,
    EncapsulationTopicsRoutingModule
  ]
})
export class EncapsulationTopicsModule { }

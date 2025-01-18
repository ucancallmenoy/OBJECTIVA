import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionTopicsRoutingModule } from './introduction-topics-routing.module';
import { Introduction1OverviewComponent } from './intro-topics-overview/introduction1-overview/introduction1-overview.component';
import { Introduction2OverviewComponent } from './intro-topics-overview/introduction2-overview/introduction2-overview.component';
import { Introduction1ContentComponent } from './intro-topics-content/introduction1-content/introduction1-content.component';
import { Introduction2ContentComponent } from './intro-topics-content/introduction2-content/introduction2-content.component';
import { Introduction3OverviewComponent } from './intro-topics-overview/introduction3-overview/introduction3-overview.component';
import { Introduction4OverviewComponent } from './intro-topics-overview/introduction4-overview/introduction4-overview.component';
import { Introduction5OverviewComponent } from './intro-topics-overview/introduction5-overview/introduction5-overview.component';
import { Introduction6OverviewComponent } from './intro-topics-overview/introduction6-overview/introduction6-overview.component';
import { Introduction7OverviewComponent } from './intro-topics-overview/introduction7-overview/introduction7-overview.component';
import { Introduction8OverviewComponent } from './intro-topics-overview/introduction8-overview/introduction8-overview.component';
import { Introduction3ContentComponent } from './intro-topics-content/introduction3-content/introduction3-content.component';
import { Introduction4ContentComponent } from './intro-topics-content/introduction4-content/introduction4-content.component';
import { Introduction5ContentComponent } from './intro-topics-content/introduction5-content/introduction5-content.component';
import { Introduction6ContentComponent } from './intro-topics-content/introduction6-content/introduction6-content.component';
import { Introduction7ContentComponent } from './intro-topics-content/introduction7-content/introduction7-content.component';
import { Introduction8ContentComponent } from './intro-topics-content/introduction8-content/introduction8-content.component';
import { Introduction0ContentComponent } from './intro-topics-overview/introduction1-overview/introduction0-content/introduction0-content.component';


@NgModule({
  declarations: [
    Introduction1OverviewComponent,
    Introduction2OverviewComponent,
    Introduction1ContentComponent,
    Introduction2ContentComponent,
    Introduction3OverviewComponent,
    Introduction4OverviewComponent,
    Introduction5OverviewComponent,
    Introduction6OverviewComponent,
    Introduction7OverviewComponent,
    Introduction8OverviewComponent,
    Introduction3ContentComponent,
    Introduction4ContentComponent,
    Introduction5ContentComponent,
    Introduction6ContentComponent,
    Introduction7ContentComponent,
    Introduction8ContentComponent,
    Introduction0ContentComponent
  ],
  imports: [
    CommonModule,
    IntroductionTopicsRoutingModule
  ]
})
export class IntroductionTopicsModule { }

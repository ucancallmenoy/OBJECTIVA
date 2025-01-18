import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Introduction1OverviewComponent } from './intro-topics-overview/introduction1-overview/introduction1-overview.component';
import { Introduction1ContentComponent } from './intro-topics-content/introduction1-content/introduction1-content.component';
import { Introduction2ContentComponent } from './intro-topics-content/introduction2-content/introduction2-content.component';
import { Introduction2OverviewComponent } from './intro-topics-overview/introduction2-overview/introduction2-overview.component';
import path from 'path';
import { Introduction8OverviewComponent } from './intro-topics-overview/introduction8-overview/introduction8-overview.component';
import { Introduction7OverviewComponent } from './intro-topics-overview/introduction7-overview/introduction7-overview.component';
import { Introduction6OverviewComponent } from './intro-topics-overview/introduction6-overview/introduction6-overview.component';
import { Introduction5OverviewComponent } from './intro-topics-overview/introduction5-overview/introduction5-overview.component';
import { Introduction3OverviewComponent } from './intro-topics-overview/introduction3-overview/introduction3-overview.component';
import { Introduction4OverviewComponent } from './intro-topics-overview/introduction4-overview/introduction4-overview.component';
import { Introduction3ContentComponent } from './intro-topics-content/introduction3-content/introduction3-content.component';
import { Introduction4ContentComponent } from './intro-topics-content/introduction4-content/introduction4-content.component';
import { Introduction5ContentComponent } from './intro-topics-content/introduction5-content/introduction5-content.component';
import { Introduction6ContentComponent } from './intro-topics-content/introduction6-content/introduction6-content.component';
import { Introduction7ContentComponent } from './intro-topics-content/introduction7-content/introduction7-content.component';
import { Introduction8ContentComponent } from './intro-topics-content/introduction8-content/introduction8-content.component';
import { Introduction0ContentComponent } from './intro-topics-overview/introduction1-overview/introduction0-content/introduction0-content.component';
const routes: Routes = [
  //OVERVIEW ROUTES
    {path:'introduction-to-OOP-overview', component: Introduction1OverviewComponent, children: [
      {path:'intro1content', component: Introduction0ContentComponent},
    ]},
    {path:'understanding-object-and-classes-overview', component: Introduction2OverviewComponent},
    {path:'introduction-to-java-overview', component: Introduction3OverviewComponent},
    {path:'Basic-OOP-concepts-in-java-overview', component: Introduction4OverviewComponent},
    {path:'class-structure-and-access-overview', component: Introduction5OverviewComponent},
    {path:'basic-object-oriented-design-overview', component: Introduction6OverviewComponent},
    {path:'java-class-libraries-overview', component: Introduction7OverviewComponent},
    {path:'object-interactions-overview', component: Introduction8OverviewComponent},

  //CONTENT ROUTES
    {path:'introduction-to-OOP', component: Introduction1ContentComponent},
    {path:'understanding-object-and-classes', component: Introduction2ContentComponent},
    {path:'introduction-to-java', component: Introduction3ContentComponent},
    {path:'Basic-OOP-concepts-in-java', component: Introduction4ContentComponent},
    {path:'class-structure-and-access', component: Introduction5ContentComponent},
    {path:'basic-object-oriented-design', component: Introduction6ContentComponent},
    {path:'java-class-libraries', component: Introduction7ContentComponent},
    {path:'object-interactions', component: Introduction8ContentComponent},



  
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductionTopicsRoutingModule { }

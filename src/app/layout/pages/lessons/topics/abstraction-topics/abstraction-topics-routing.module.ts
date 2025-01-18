import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Abstraction1OverviewComponent } from './abstraction-topics-overview/abstraction1-overview/abstraction1-overview.component';
import { Abstraction2OverviewComponent } from './abstraction-topics-overview/abstraction2-overview/abstraction2-overview.component';
import { Abstraction3OverviewComponent } from './abstraction-topics-overview/abstraction3-overview/abstraction3-overview.component';
import { Abstraction4OverviewComponent } from './abstraction-topics-overview/abstraction4-overview/abstraction4-overview.component';
import { Abstraction1ContentComponent } from './abstraction-topics-content/abstraction1-content/abstraction1-content.component';
import { Abstraction2ContentComponent } from './abstraction-topics-content/abstraction2-content/abstraction2-content.component';
import { Abstraction3ContentComponent } from './abstraction-topics-content/abstraction3-content/abstraction3-content.component';
import { Abstraction4ContentComponent } from './abstraction-topics-content/abstraction4-content/abstraction4-content.component';

const routes: Routes = [
  //OVERVIEW ROUTES
    {path:'understanding-abstraction-overview', component: Abstraction1OverviewComponent},
    {path:'abstract-classes-overview', component: Abstraction2OverviewComponent},
    {path:'interfaces-overview', component: Abstraction3OverviewComponent},
    {path:'abstraction-implementation-in-java-overview', component: Abstraction4OverviewComponent},

  //CONTENT ROUTES
    {path:'understanding-abstraction', component: Abstraction1ContentComponent},
    {path:'abstract-classes', component: Abstraction2ContentComponent},
    {path:'interfaces', component: Abstraction3ContentComponent},
    {path:'abstraction-implementation-in-java', component: Abstraction4ContentComponent},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbstractionTopicsRoutingModule { }

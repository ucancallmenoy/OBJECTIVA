import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  //OVERVIEW ROUTES
    {path:'understanding-inheritance-overview', component: Inheritance1OverviewComponent},
    {path:'single-inheritance-overview', component: Inheritance2OverviewComponent},
    {path:'types-of-inheritance-in-java-overview', component: Inheritance3OverviewComponent},
    {path:'methods-overriding-overview', component: Inheritance4OverviewComponent},
    {path:'advanced-inheritance-concepts-overview', component: Inheritance5OverviewComponent},
    {path:'inheritance-implementation-in-java-overview', component: Inheritance6OverviewComponent},

  //CONTENT ROUTES
    {path:'understanding-inheritance', component: Inheritance1ContentComponent},
    {path:'single-inheritance', component: Inheritance2ContentComponent},
    {path:'types-of-inheritance-in-java', component: Inheritance3ContentComponent},
    {path:'methods-overriding', component: Inheritance4ContentComponent},
    {path:'advanced-inheritance-concepts', component: Inheritance5ContentComponent},
    {path:'inheritance-implementation-in-java', component: Inheritance6ContentComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InheritanceTopicsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Polymorphism1OverviewComponent } from './polymorphism-topics-overview/polymorphism1-overview/polymorphism1-overview.component';
import { Polymorphism2OverviewComponent } from './polymorphism-topics-overview/polymorphism2-overview/polymorphism2-overview.component';
import { Polymorphism3OverviewComponent } from './polymorphism-topics-overview/polymorphism3-overview/polymorphism3-overview.component';
import { Polymorphism4OverviewComponent } from './polymorphism-topics-overview/polymorphism4-overview/polymorphism4-overview.component';
import { Polymorphism5OverviewComponent } from './polymorphism-topics-overview/polymorphism5-overview/polymorphism5-overview.component';
import { Polymorphism6OverviewComponent } from './polymorphism-topics-overview/polymorphism6-overview/polymorphism6-overview.component';
import { Polymorphism1ContentComponent } from './polymorphism-topics-content/polymorphism1-content/polymorphism1-content.component';
import { Polymorphism2ContentComponent } from './polymorphism-topics-content/polymorphism2-content/polymorphism2-content.component';
import { Polymorphism3ContentComponent } from './polymorphism-topics-content/polymorphism3-content/polymorphism3-content.component';
import { Polymorphism4ContentComponent } from './polymorphism-topics-content/polymorphism4-content/polymorphism4-content.component';
import { Polymorphism5ContentComponent } from './polymorphism-topics-content/polymorphism5-content/polymorphism5-content.component';
import { Polymorphism6ContentComponent } from './polymorphism-topics-content/polymorphism6-content/polymorphism6-content.component';

const routes: Routes = [
  //OVERVIEW ROUTES
      {path:'understanding-polymorphism-overview', component: Polymorphism1OverviewComponent},
      {path:'compile-time-polymorphism-overview', component: Polymorphism2OverviewComponent},
      {path:'runtime-polymorphism-overview', component: Polymorphism3OverviewComponent},
      {path:'advanced-polymorphic-concepts-overview', component: Polymorphism4OverviewComponent},
      {path:'polymorphism-with-interfaces-overview', component: Polymorphism5OverviewComponent},
      {path:'polymorphism-implementation-in-java-overview', component: Polymorphism6OverviewComponent},

    //CONTENT ROUTES
      {path:'understanding-polymorphism', component: Polymorphism1ContentComponent},
      {path:'compile-time-polymorphism', component: Polymorphism2ContentComponent},
      {path:'runtime-polymorphism', component: Polymorphism3ContentComponent},
      {path:'advanced-polymorphic-concepts', component: Polymorphism4ContentComponent},
      {path:'polymorphism-with-interfaces', component: Polymorphism5ContentComponent},
      {path:'polymorphism-implementation-in-java', component: Polymorphism6ContentComponent},
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolymorphismTopicsRoutingModule { }

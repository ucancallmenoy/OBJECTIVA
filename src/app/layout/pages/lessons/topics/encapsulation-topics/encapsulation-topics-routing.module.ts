import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Encapsulation1OverviewComponent } from './encapsulation-topics-overview/encapsulation1-overview/encapsulation1-overview.component';
import { Encapsulation2ContentComponent } from './encapsulation-topics-content/encapsulation2-content/encapsulation2-content.component';
import { Encapsulation2OverviewComponent } from './encapsulation-topics-overview/encapsulation2-overview/encapsulation2-overview.component';
import { Encapsulation3OverviewComponent } from './encapsulation-topics-overview/encapsulation3-overview/encapsulation3-overview.component';
import { Encapsulation4ContentComponent } from './encapsulation-topics-content/encapsulation4-content/encapsulation4-content.component';
import { Encapsulation4OverviewComponent } from './encapsulation-topics-overview/encapsulation4-overview/encapsulation4-overview.component';
import { Encapsulation5OverviewComponent } from './encapsulation-topics-overview/encapsulation5-overview/encapsulation5-overview.component';
import { Encapsulation6OverviewComponent } from './encapsulation-topics-overview/encapsulation6-overview/encapsulation6-overview.component';
import { Encapsulation1ContentComponent } from './encapsulation-topics-content/encapsulation1-content/encapsulation1-content.component';
import { Encapsulation3ContentComponent } from './encapsulation-topics-content/encapsulation3-content/encapsulation3-content.component';
import { Encapsulation5ContentComponent } from './encapsulation-topics-content/encapsulation5-content/encapsulation5-content.component';
import { Encapsulation6ContentComponent } from './encapsulation-topics-content/encapsulation6-content/encapsulation6-content.component';

const routes: Routes = [
  //OVERVIEW ROUTES
    {path:'understanding-encapsulation-overview', component: Encapsulation1OverviewComponent},
    {path:'access-modifiers-overview', component: Encapsulation2OverviewComponent},
    {path:'getters-and-setters-overview', component: Encapsulation3OverviewComponent},
    {path:'java-bean-standard-overview', component: Encapsulation4OverviewComponent},
    {path:'data-validation-overview', component: Encapsulation5OverviewComponent},
    {path:'encapsulation-implementation-in-java-overview', component: Encapsulation6OverviewComponent},

  //CONTENT ROUTES
    {path:'understanding-encapsulation', component: Encapsulation1ContentComponent},
    {path:'access-modifiers', component: Encapsulation2ContentComponent},
    {path:'getters-and-setters', component: Encapsulation3ContentComponent},
    {path:'java-bean-standard', component: Encapsulation4ContentComponent},
    {path:'data-validation', component: Encapsulation5ContentComponent},
    {path:'encapsulation-implementation-in-java', component: Encapsulation6ContentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncapsulationTopicsRoutingModule { }

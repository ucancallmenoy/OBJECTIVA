import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionTopicsComponent } from './introduction-topics/introduction-topics.component';
import { AbstractionTopicsComponent } from './abstraction-topics/abstraction-topics.component';
import { EncapsulationTopicsComponent } from './encapsulation-topics/encapsulation-topics.component';
import { InheritanceTopicsComponent } from './inheritance-topics/inheritance-topics.component';
import { PolymorphismTopicsComponent } from './polymorphism-topics/polymorphism-topics.component';

const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionTopicsComponent,
    loadChildren: () => import('./introduction-topics/introduction-topics.module').then(m => m.IntroductionTopicsModule)
  },
  {
    path: 'abstraction',
    component: AbstractionTopicsComponent,
    loadChildren: () => import('./abstraction-topics/abstraction-topics.module').then(m => m.AbstractionTopicsModule)
  },
  {
    path: 'encapsulation',
    component: EncapsulationTopicsComponent,
    loadChildren: () => import('./encapsulation-topics/encapsulation-topics.module').then(m => m.EncapsulationTopicsModule)
  },
  { 
    path: 'inheritance', 
    component: InheritanceTopicsComponent,
    loadChildren: () => import('./inheritance-topics/inheritance-topics.module').then(m => m.InheritanceTopicsModule) 
  },
  {
    path: 'polymorphism',
    component: PolymorphismTopicsComponent,
    loadChildren: () => import('./polymorphism-topics/polymorphism-topics.module').then(m => m.PolymorphismTopicsModule)
  }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicsRoutingModule { }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction1-overview',
  templateUrl: './introduction1-overview.component.html',
  styleUrl: './introduction1-overview.component.scss'
})
export class Introduction1OverviewComponent {

  constructor(private router: Router) { }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction1-overview',
  templateUrl: './introduction1-overview.component.html',
  styleUrl: './introduction1-overview.component.scss'
})
export class Introduction1OverviewComponent {

  constructor(private router: Router) { }

  showBoxContainer: boolean = false;

  ngOnInit(): void {
    // Subscribe to the router's URL to track the current path
    this.router.events.subscribe(() => {
      // Check the current URL
      const currentUrl = this.router.url;
      // If the URL is '/lessons/introduction-topics', do not show the background container
      this.showBoxContainer = currentUrl === '/lessons/topics/introduction/introduction-to-OOP-overview';
    });
  }}
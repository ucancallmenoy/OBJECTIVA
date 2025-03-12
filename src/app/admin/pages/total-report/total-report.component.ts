import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-total-report',
  templateUrl: './total-report.component.html',
  styleUrls: ['./total-report.component.scss']
})
export class TotalReportComponent implements AfterViewInit {
  @ViewChild('barCanvas') barCanvas!: ElementRef<HTMLCanvasElement>;
  barChart!: Chart;
  
  // Topics for dropdown
  topics = ['Introduction', 'Abstraction', 'Encapsulation', 'Inheritance', 'Polymorphism'];
  selectedTopic: string = 'Introduction'; // Default selected topic

  // Labels for each topic
  chartLabels: { [key: string]: string[] } = {
    Introduction: [
      'Introduction to OOP', 'Understanding Object and Classes', 'Introduction to Java',
      'Basic OOP Concepts in Java', 'Class Structure and Access', 'Basic Object-Oriented Design',
      'Java Class Libraries Overview', 'Object Interactions'
    ],
    Abstraction: [
      'Understanding Abstraction', 'Abstract Classes', 'Interfaces', 'Implementation in Java'
    ],
    Encapsulation: [
      'Understanding Encapsulation', 'Access Modifiers', 'Getters and Setters',
      'Data Validation', 'Implementation in Java'
    ],
    Inheritance: [
      'Understanding Inheritance', 'Single Inheritance', 'Types of Inheritance in Java',
      'Method Overriding', 'Advanced Inheritance Concepts', 'Implementation in Java'
    ],
    Polymorphism: [
      'Understanding Polymorphism', 'Compile-time Polymorphism', 'Runtime Polymorphism',
      'Advanced Polymorphic Concepts', 'Polymorphism with Interfaces', 'Implementation in Java'
    ]
  };

  // Data for each topic
  chartData: { [key: string]: number[] } = {
    Introduction: [65, 59, 80, 120, 56, 55, 40, 12],
    Abstraction: [45, 60, 75, 90],
    Encapsulation: [30, 25, 35, 50, 45],
    Inheritance: [55, 45, 35, 25, 15, 30],
    Polymorphism: [20, 30, 40, 30, 20, 10]
  };

  ngAfterViewInit() {
    this.createChart();
  }

  // Function to create the chart
  createChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.chartLabels[this.selectedTopic],
        datasets: [{
          label: this.selectedTopic,
          data: this.chartData[this.selectedTopic],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)',
            'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'
          ],
          borderWidth: 0.5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  // Function to update the chart when a new topic is selected
  onTopicChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedTopic = target.value;

    // Update chart labels and dataset
    this.barChart.data.labels = this.chartLabels[this.selectedTopic];
    this.barChart.data.datasets[0].data = this.chartData[this.selectedTopic];
    this.barChart.data.datasets[0].label = this.selectedTopic;

    // Refresh the chart
    this.barChart.update();
  }
}

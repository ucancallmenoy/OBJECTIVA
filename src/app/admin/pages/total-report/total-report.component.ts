import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';
import { LessonProgressService } from '../../services/lesson-progress.service';

@Component({
  selector: 'app-total-report',
  templateUrl: './total-report.component.html',
  styleUrls: ['./total-report.component.scss']
})
export class TotalReportComponent implements OnInit, AfterViewInit {
  @ViewChild('barCanvas') barCanvas!: ElementRef<HTMLCanvasElement>;
  barChart!: Chart;
  
  // Topics for dropdown
  topics = ['Introduction', 'Abstraction', 'Encapsulation', 'Inheritance', 'Polymorphism'];
  selectedTopic: string = 'Introduction';

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

  // Lesson IDs mapping
  lessonIds: { [key: string]: string[] } = {
    Introduction: Array.from({length: 8}, (_, i) => `intro-lesson-${i + 1}`),
    Abstraction: Array.from({length: 4}, (_, i) => `abstraction-lesson-${i + 1}`),
    Encapsulation: Array.from({length: 5}, (_, i) => `encapsulation-lesson-${i + 1}`),
    Inheritance: Array.from({length: 6}, (_, i) => `inheritance-lesson-${i + 1}`),
    Polymorphism: Array.from({length: 6}, (_, i) => `polymorphism-lesson-${i + 1}`)
  };

  // Data for each topic
  chartData: { [key: string]: number[] } = {
    Introduction: Array(8).fill(0),
    Abstraction: Array(4).fill(0),
    Encapsulation: Array(5).fill(0),
    Inheritance: Array(6).fill(0),
    Polymorphism: Array(6).fill(0)
  };

  constructor(private http: HttpClient, private lessonProgressService: LessonProgressService) {}

  ngOnInit() {
    this.loadProgressData();
  }

  ngAfterViewInit() {
    this.createChart();
  }

  loadProgressData() {
    this.lessonProgressService.getAllUsersProgress().subscribe({
      next: (completionStats) => {
        // Update chart data for each topic
        for (const topic of this.topics) {
          const lessonIds = this.lessonIds[topic];
          this.chartData[topic] = lessonIds.map(lessonId => {
            // Get completion count for this lesson, default to 0 if not found
            return completionStats[lessonId] || 0;
          });
        }
  
        console.log('Completion stats:', completionStats); // For debugging
        console.log('Updated chart data:', this.chartData); // For debugging
  
        // Update chart if it exists
        if (this.barChart) {
          this.updateChart();
        }
      },
      error: (error: Error) => {
        console.error('Error loading progress data:', error);
      }
    });
  }

  createChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.chartLabels[this.selectedTopic],
        datasets: [{
          label: `${this.selectedTopic} - Number of Completions`,
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
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Users Completed'
            }
          }
        }
      }
    });
  }

  onTopicChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedTopic = target.value;
    this.updateChart();
  }

  private updateChart() {
    if (this.barChart) {
      this.barChart.data.labels = this.chartLabels[this.selectedTopic];
      this.barChart.data.datasets[0].data = this.chartData[this.selectedTopic];
      this.barChart.data.datasets[0].label = `${this.selectedTopic} - Number of Completions`;
      this.barChart.update();
    }
  }
}
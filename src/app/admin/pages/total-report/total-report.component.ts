import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';
import { LessonProgressService } from '../../services/lesson-progress.service';
import { formatDate } from '@angular/common';

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

  // Date filter options
  fromDate: string = '';
  toDate: string = '';
  
  // Date range presets
  dateRanges = [
    { label: 'All Time', value: 'all' },
    { label: 'Last 7 Days', value: '7days' },
    { label: 'Last 30 Days', value: '30days' },
    { label: 'This Month', value: 'thisMonth' },
    { label: 'Last Month', value: 'lastMonth' },
    { label: 'Custom Range', value: 'custom' }
  ];
  selectedDateRange: string = 'all';
  
  // Flag to show/hide custom date inputs
  showCustomDates: boolean = false;
  
  // Flag to check if there's any completion data to show
  hasCompletionData: boolean = false;

  // Latest completion dates
  completionDates: { [lessonId: string]: string } = {};

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
    this.setDateRange('all');
    this.loadProgressData();
  }

  ngAfterViewInit() {
    this.createChart();
  }

  loadProgressData() {
    this.lessonProgressService.getAllUsersProgress(this.fromDate, this.toDate).subscribe({
      next: (data) => {
        const { counts, dates } = data;
        this.completionDates = dates;
        
        // Update chart data for each topic
        for (const topic of this.topics) {
          const lessonIds = this.lessonIds[topic];
          this.chartData[topic] = lessonIds.map(lessonId => {
            // Get completion count for this lesson, default to 0 if not found
            return counts[lessonId] || 0;
          });
        }
        
        // Check if we have any data to display
        this.updateHasCompletionData();
  
        console.log('Completion stats:', counts);
        console.log('Completion dates:', dates);
        console.log('Updated chart data:', this.chartData);
  
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

  updateHasCompletionData() {
    // Check if the current selected topic has any completions
    this.hasCompletionData = this.chartData[this.selectedTopic].some(count => count > 0);
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
        },
        plugins: {
          tooltip: {
            callbacks: {
              afterLabel: (context) => {
                const lessonId = this.lessonIds[this.selectedTopic][context.dataIndex];
                const lastCompletionDate = this.completionDates[lessonId];
                if (lastCompletionDate) {
                  return `Last completed: ${this.formatDate(lastCompletionDate)}`;
                }
                return '';
              }
            }
          }
        }
      }
    });
  }

  onTopicChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedTopic = target.value;
    this.updateHasCompletionData();
    this.updateChart();
  }

  onDateRangeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.setDateRange(target.value);
    this.loadProgressData();
  }

  onCustomDateChange() {
    // Only reload if both dates are set
    if (this.fromDate && this.toDate) {
      this.loadProgressData();
    }
  }

  setDateRange(range: string) {
    this.selectedDateRange = range;
    const today = new Date();
    
    // Reset dates
    this.fromDate = '';
    this.toDate = '';
    this.showCustomDates = false;
    
    switch (range) {
      case 'all':
        // No date filters
        break;
      case '7days':
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 7);
        this.fromDate = this.formatDateForAPI(sevenDaysAgo);
        this.toDate = this.formatDateForAPI(today);
        break;
      case '30days':
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(today.getDate() - 30);
        this.fromDate = this.formatDateForAPI(thirtyDaysAgo);
        this.toDate = this.formatDateForAPI(today);
        break;
      case 'thisMonth':
        const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        this.fromDate = this.formatDateForAPI(firstDayOfMonth);
        this.toDate = this.formatDateForAPI(today);
        break;
      case 'lastMonth':
        const firstDayOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        this.fromDate = this.formatDateForAPI(firstDayOfLastMonth);
        this.toDate = this.formatDateForAPI(lastDayOfLastMonth);
        break;
      case 'custom':
        this.showCustomDates = true;
        break;
    }
  }

  formatDateForAPI(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleString();
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
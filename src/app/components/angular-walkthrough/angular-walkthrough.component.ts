import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-walkthrough',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-walkthrough.component.html',
  styleUrls: ['./angular-walkthrough.component.css']
})
export class AngularWalkthroughComponent implements OnInit {
  @Input() titles: string[];
  walkthroughSteps: any[];

  constructor() {
    this.titles = [];
    this.walkthroughSteps = [];
  }

  ngOnInit() {
    this.prepareWalkthroughSteps();
  }

  prepareWalkthroughSteps() {
    this.walkthroughSteps = this.titles.map((title, index) => ({
      selector: `[ng-walkthrough="step${index}"]`,
      description: title,
      position: 'bottom',
      arrow: true,
      arrowPosition: 'top'
    }));
  }
}

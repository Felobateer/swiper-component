import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgWalkthroughService } from 'ng-walkthrough';

@Component({
  selector: 'app-angular-walkthrough',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-walkthrough.component.html',
  styleUrls: ['./angular-walkthrough.component.css']
})
export class AngularWalkthroughComponent implements OnInit {
  @Input() titles: string[];

  constructor(private walkthroughService: NgWalkthroughService) {
    this.titles = [];
  }

  ngOnInit() {
    this.startWalkthrough();
  }

  startWalkthrough() {
    this.walkthroughService.startWalkthrough({
      steps: this.titles.map((title, index) => ({
        selector: `[ng-walkthrough="step${index}"]`,
        description: title,
        position: 'bottom',
        arrow: true,
        arrowPosition: 'top'
      }))
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgWalkthroughService } from 'ng-walkthrough';

@Component({
  selector: 'app-angular-walkthrough',
  standalone: true,
  imports: [CommonModule, BrowserModule],
  templateUrl: './angular-walkthrough.component.html',
  styleUrls: ['./angular-walkthrough.component.css']
})
export class AngularWalkthroughComponent implements OnInit {
  @Input() titles: string[];

  constructor(@Inject(NgWalkthroughService) private walkthroughService: NgWalkthroughService) {
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

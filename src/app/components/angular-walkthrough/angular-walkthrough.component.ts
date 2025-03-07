import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

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
  selectedIndex: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {
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

  onItemClick(index: number) {
    this.selectedIndex = index;
    this.applyTransform();
  }

  applyTransform() {
    const swiperList = this.el.nativeElement.querySelector('.swiper-list');
    const containerWidth = this.el.nativeElement.querySelector('.swiper-container').offsetWidth;
    const swiperListWidth = swiperList.offsetWidth;
  
    // Calculate the offset to center the selected item
    const offset = (containerWidth / 2) - (this.selectedIndex * 120);
  
    // Apply the transform value
    const transformValue = `translateX(${offset}px)`;
  
    // Set the transform style to center the selected item
    this.renderer.setStyle(swiperList, 'transform', transformValue);
  }
  
}
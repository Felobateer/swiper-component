import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AngularWalkthroughComponent} from '../../../../src/app/components/angular-walkthrough/angular-walkthrough.component';
import { CommonModule } from '@angular/common';
import { Renderer2, ElementRef } from '@angular/core';

describe('AngularWalkthroughComponent', () => {
  let component: AngularWalkthroughComponent;
  let fixture: ComponentFixture<AngularWalkthroughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [AngularWalkthroughComponent],
      providers: [Renderer2, ElementRef]
    }).compileComponents();

    fixture = TestBed.createComponent(AngularWalkthroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should prepare walkthrough steps', () => {
    component.titles = ['Step 1', 'Step 2', 'Step 3'];
    component.prepareWalkthroughSteps();
    expect(component.walkthroughSteps.length).toBe(3);
    expect(component.walkthroughSteps[0].description).toBe('Step 1');
  });

  it('should apply transform on item click', () => {
    component.titles = ['Step 1', 'Step 2', 'Step 3'];
    component.prepareWalkthroughSteps();
    component.onItemClick(1);
    fixture.detectChanges();
    const swiperList = fixture.nativeElement.querySelector('.swiper-list');
    expect(swiperList.style.transform).toContain('translateX');
  });
});
